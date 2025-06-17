"use client"

import type React from "react"
import {Smile} from "lucide-react" // Declare the Smile variable
import {X} from "lucide-react" // Declare the X variable for cancelUpload

import {useState, useRef, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Send, Settings, Search, MoreVertical, Paperclip, Trash2, Reply, Undo} from "lucide-react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import MaxWidth from "@/components/max-width/MaxWidth";

interface Message {
    id: string
    content: string
    sender: string
    timestamp: Date
    isOwn: boolean
    replyTo?: {
        id: string
        content: string
        sender: string
    }
}

interface User {
    id: string
    name: string
    avatar?: string
    status: "online" | "offline" | "away"
    lastSeen?: Date
}

interface DeletedMessage {
    message: Message
    deletedAt: number
}

const ChatApplication = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "Hey! How are you doing today? 😊",
            sender: "Alice Johnson",
            timestamp: new Date(Date.now() - 3600000),
            isOwn: false,
        },
        {
            id: "2",
            content: "I'm doing great! Just working on some new projects. How about you? 🚀",
            sender: "You",
            timestamp: new Date(Date.now() - 3500000),
            isOwn: true,
        },
        {
            id: "3",
            content: "That sounds exciting! I'd love to hear more about what you're working on. 🤔",
            sender: "Alice Johnson",
            timestamp: new Date(Date.now() - 3400000),
            isOwn: false,
        },
        {
            id: "4",
            content: "I'm building a new chat application with some really cool features. 💻✨",
            sender: "You",
            timestamp: new Date(Date.now() - 3300000),
            isOwn: true,
        },
    ])

    const [newMessage, setNewMessage] = useState("")
    const [selectedUser, setSelectedUser] = useState<User>({
        id: "1",
        name: "Alice Johnson",
        status: "online",
    })
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [replyingTo, setReplyingTo] = useState<Message | null>(null)
    const [deleteConfirmation, setDeleteConfirmation] = useState<{ show: boolean; messageId: string | null }>({
        show: false,
        messageId: null,
    })
    const [deletedMessage, setDeletedMessage] = useState<DeletedMessage | null>(null)
    const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null)
    const [forwardMessage, setForwardMessage] = useState<Message | null>(null)
    const [selectedForwardUsers, setSelectedForwardUsers] = useState<string[]>([])
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])
    const [uploadType, setUploadType] = useState<"photo" | "video" | "audio" | "document" | null>(null)

    const users: User[] = [
        {id: "1", name: "Alice Johnson", status: "online"},
        {id: "2", name: "Bob Smith", status: "away"},
        {id: "3", name: "Carol Davis", status: "online"},
        {id: "4", name: "David Wilson", status: "offline", lastSeen: new Date(Date.now() - 7200000)},
        {id: "5", name: "Emma Brown", status: "online"},
    ]

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        const message: Message = {
            id: Date.now().toString(),
            content: newMessage,
            sender: "You",
            timestamp: new Date(),
            isOwn: true,
            replyTo: replyingTo
                ? {
                    id: replyingTo.id,
                    content: replyingTo.content,
                    sender: replyingTo.sender,
                }
                : undefined,
        }

        setMessages((prev) => [...prev, message])
        setNewMessage("")
        setReplyingTo(null)

        // Remove the automatic reply simulation entirely
    }

    const handleDeleteMessage = (messageId: string) => {
        setDeleteConfirmation({show: true, messageId})
    }

    const handleReplyToMessage = (message: Message) => {
        setReplyingTo(message)
    }

    const confirmDelete = () => {
        if (deleteConfirmation.messageId) {
            const messageToDelete = messages.find((msg) => msg.id === deleteConfirmation.messageId)
            if (messageToDelete) {
                // Store the deleted message for undo
                setDeletedMessage({
                    message: messageToDelete,
                    deletedAt: Date.now(),
                })

                // Remove message from chat
                setMessages((prev) => prev.filter((message) => message.id !== deleteConfirmation.messageId))

                // Set timer to clear undo option after 5 seconds
                const timer = setTimeout(() => {
                    setDeletedMessage(null)
                }, 5000)
                setUndoTimer(timer)
            }
        }
        setDeleteConfirmation({show: false, messageId: null})
    }

    const cancelDelete = () => {
        setDeleteConfirmation({show: false, messageId: null})
    }

    const undoDelete = () => {
        if (deletedMessage) {
            // Restore the message to its original position
            setMessages((prev) => {
                const newMessages = [...prev, deletedMessage.message]
                // Sort by timestamp to maintain order
                return newMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
            })

            // Clear undo option
            setDeletedMessage(null)
            if (undoTimer) {
                clearTimeout(undoTimer)
                setUndoTimer(null)
            }
        }
    }

    const handleForwardMessage = (message: Message) => {
        setForwardMessage(message)
        setSelectedForwardUsers([])
    }

    const toggleUserSelection = (userId: string) => {
        setSelectedForwardUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
    }

    const confirmForward = () => {
        if (forwardMessage && selectedForwardUsers.length > 0) {
            // In a real app, this would send the message to the selected users
            // For demo purposes, we'll just show a success message
            console.log(`Forwarding message "${forwardMessage.content}" to users:`, selectedForwardUsers)

            // Reset forward state
            setForwardMessage(null)
            setSelectedForwardUsers([])

            // You could add a toast notification here
            alert(`Message forwarded to ${selectedForwardUsers.length} user(s)!`)
        }
    }

    const cancelForward = () => {
        setForwardMessage(null)
        setSelectedForwardUsers([])
    }

    const handleUploadFiles = () => {
        if (selectedFiles.length > 0) {
            // In a real app, you would upload files to a server here
            console.log("Uploading files:", selectedFiles)

            // Create a message for each file
            selectedFiles.forEach((file, index) => {
                const fileUrl = URL.createObjectURL(file) // Create a temporary URL for preview

                let messageContent = ""

                if (uploadType === "photo") {
                    messageContent = `IMAGE:${fileUrl}:${file.name}`
                } else if (uploadType === "video") {
                    messageContent = `VIDEO:${fileUrl}:${file.name}`
                } else if (uploadType === "audio") {
                    messageContent = `AUDIO:${fileUrl}:${file.name}`
                } else {
                    messageContent = `📎 ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
                }

                const message: Message = {
                    id: (Date.now() + index).toString(),
                    content: messageContent,
                    sender: "You",
                    timestamp: new Date(),
                    isOwn: true,
                }
                setMessages((prev) => [...prev, message])
            })

            // Reset upload state
            setSelectedFiles([])
            setUploadType(null)
            setShowUploadModal(false)

            alert(`${selectedFiles.length} file(s) uploaded successfully!`)
        }
    }

    // Add a function to render message content based on type
    const renderMessageContent = (content: string) => {
        if (content.startsWith("IMAGE:")) {
            const [, imageUrl, fileName] = content.split(":")
            return (
                <div className="space-y-2">
                    <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={fileName}
                        className="max-w-full h-auto rounded-lg max-h-64 object-cover"
                        onLoad={() => scrollToBottom()}
                    />
                    <p className="text-xs opacity-75">{fileName}</p>
                </div>
            )
        } else if (content.startsWith("VIDEO:")) {
            const [, videoUrl, fileName] = content.split(":")
            return (
                <div className="space-y-2">
                    <video
                        src={videoUrl}
                        controls
                        className="max-w-full h-auto rounded-lg max-h-64"
                        onLoadedData={() => scrollToBottom()}
                    >
                        Your browser does not support the video tag.
                    </video>
                    <p className="text-xs opacity-75">{fileName}</p>
                </div>
            )
        } else if (content.startsWith("AUDIO:")) {
            const [, audioUrl, fileName] = content.split(":")
            return (
                <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border min-w-64">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xl">🎵</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{fileName}</p>
                            <audio src={audioUrl} controls className="w-full mt-2"
                                   onLoadedData={() => scrollToBottom()}>
                                Your browser does not support the audio tag.
                            </audio>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <p className="text-sm">{content}</p>
        }
    }

    const getFileIcon = (type: string) => {
        switch (type) {
            case "photo":
                return "🖼️"
            case "video":
                return "🎥"
            case "audio":
                return "🎵"
            case "document":
                return "📄"
            default:
                return "📎"
        }
    }

    const getAcceptedFileTypes = (type: string) => {
        switch (type) {
            case "photo":
                return "image/*"
            case "video":
                return "video/*"
            case "audio":
                return "audio/*"
            case "document":
                return ".pdf,.doc,.docx,.txt,.xlsx,.pptx"
            default:
                return "*"
        }
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "online":
                return "bg-green-500"
            case "away":
                return "bg-yellow-500"
            case "offline":
                return "bg-gray-400"
            default:
                return "bg-gray-400"
        }
    }

    const emojis = [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "😂",
        "🤣",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
        "😍",
        "🥰",
        "😘",
        "😗",
        "😙",
        "😚",
        "😋",
        "😛",
        "😝",
        "😜",
        "🤪",
        "🤨",
        "🧐",
        "🤓",
        "😎",
        "🤩",
        "🥳",
        "😏",
        "😒",
        "😞",
        "😔",
        "😟",
        "😕",
        "🙁",
        "☹️",
        "😣",
        "😖",
        "😫",
        "😩",
        "🥺",
        "😢",
        "😭",
        "😤",
        "😠",
        "😡",
        "🤬",
        "🤯",
        "😳",
        "🥵",
        "🥶",
        "😱",
        "😨",
        "😰",
        "😥",
        "😓",
        "🤗",
        "🤔",
        "🤭",
        "🤫",
        "🤥",
        "😶",
        "😐",
        "😑",
        "😬",
        "🙄",
        "😯",
        "😦",
        "😧",
        "😮",
        "😲",
        "🥱",
        "😴",
        "🤤",
        "😪",
        "😵",
        "🤐",
        "🥴",
        "🤢",
        "🤮",
        "🤧",
        "😷",
        "🤒",
        "🤕",
        "🤑",
        "🤠",
        "😈",
        "👍",
        "👎",
        "👌",
        "✌️",
        "🤞",
        "🤟",
        "🤘",
        "🤙",
        "👈",
        "👉",
        "👆",
        "🖕",
        "👇",
        "☝️",
        "👋",
        "🤚",
        "🖐️",
        "✋",
        "🖖",
        "👏",
        "🙌",
        "🤲",
        "🤝",
        "🙏",
        "✍️",
        "💪",
        "🦾",
        "🦿",
        "🦵",
        "🦶",
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🖤",
        "🤍",
        "🤎",
        "💔",
        "❣️",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "💟",
        "☮️",
        "✨",
        "🎉",
        "🎊",
        "🎈",
        "🎁",
        "🏆",
        "🥇",
        "🥈",
        "🥉",
        "⭐",
    ]

    const handleEmojiSelect = (emoji: string) => {
        setNewMessage((prev) => prev + emoji)
        // Modal stays open - user can select multiple emojis
    }

    const handleUserClick = (user: User) => {
        setSelectedUser(user)
    }

    const cancelUpload = () => {
        setSelectedFiles([])
        setUploadType(null)
        setShowUploadModal(false)
    }

    return (
        <MaxWidth>
            <div style={{fontFamily:"Favorit"}} className="flex h-screen bg-gray-50">
                {/* Sidebar */}
                <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-xl font-semibold">Messages</h1>
                            <Button variant="ghost" size="icon">
                                <Settings className="h-5 w-5"/>
                            </Button>
                        </div>
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                            <Input placeholder="Search conversations..." className="pl-10"/>
                        </div>
                    </div>

                    {/* User List */}
                    <ScrollArea className="flex-1">
                        <div className="p-2">
                            {users.map((user) => (
                                <div
                                    key={user.id}
                                    className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                                        selectedUser.id === user.id ? "bg-blue-50 border border-blue-200" : ""
                                    }`}
                                    onClick={() => setSelectedUser(user)}
                                >
                                    <div className="relative">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={user.avatar || "/placeholder.svg"}/>
                                            <AvatarFallback>
                                                {user.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(user.status)}`}
                                        />
                                    </div>
                                    <div className="ml-3 flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                                            <span className="text-xs text-gray-500">2:30 PM</span>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">
                                            {user.status === "online"
                                                ? "Active now"
                                                : user.status === "away"
                                                    ? "Away"
                                                    : user.lastSeen
                                                        ? `Last seen ${formatTime(user.lastSeen)}`
                                                        : "Offline"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col  overflow-y-scroll  ">
                    {/* Chat Header */}
                    <div className="bg-white border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="relative">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={selectedUser.avatar || "/placeholder.svg"}/>
                                        <AvatarFallback>
                                            {selectedUser.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(selectedUser.status)}`}
                                    />
                                </div>
                                <div className="ml-3">
                                    <h2 className="text-lg font-semibold text-gray-900">{selectedUser.name}</h2>
                                    <p className="text-sm text-gray-500">
                                        {selectedUser.status === "online" ? "Active now" : selectedUser.status === "away" ? "Away" : "Offline"}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Undo Delete Notification */}
                    {deletedMessage && (
                        <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Trash2 className="h-4 w-4"/>
                                <span className="text-sm">Message deleted</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700"
                                    onClick={undoDelete}>
                                <Undo className="h-4 w-4 mr-1"/>
                                Undo
                            </Button>
                        </div>
                    )}

                    {/* Messages */}
                    <ScrollArea style={{fontFamily:"Favorit"}} className="flex-1 p-4">
                        <div style={{fontFamily:"Favorit"}} className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isOwn ? "justify-end" : "justify-start"} group hover:bg-gray-50 rounded-lg p-1 transition-colors`}
                                >
                                    <div style={{fontFamily:"Favorit"}} className="flex items-start gap-2 cursor-pointer max-w-xs lg:max-w-md">
                                        {!message.isOwn && (
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 rounded-full"
                                                    >
                                                        <MoreVertical className="h-4 w-4"/>
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent style={{fontFamily:"Favorit"}} className="w-32 p-1" align="start">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start"
                                                        onClick={() => handleReplyToMessage(message)}
                                                    >
                                                        <Reply className="h-4 w-4 mr-2"/>
                                                        Reply
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full cursor-pointer justify-start"
                                                        onClick={() => handleForwardMessage(message)}
                                                    >
                                                        <Send className="h-4 w-4 cursor-pointer mr-2"/>
                                                        Forward
                                                    </Button>
                                                </PopoverContent>
                                            </Popover>
                                        )}

                                        <div className="flex flex-col">
                                            {/* Reply Preview */}
                                            {message.replyTo && (
                                                <div
                                                    className="mb-1 p-2 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                                                    <p className="text-xs text-gray-600 font-medium">{message.replyTo.sender}</p>
                                                    <p className="text-xs text-gray-500 truncate">{message.replyTo.content}</p>
                                                </div>
                                            )}

                                            {/* Message Content */}
                                            <div
                                                className={`px-4 py-2 rounded-lg ${
                                                    message.isOwn ? "bg-blue-500 text-white" : "bg-white border border-gray-200 text-gray-900"
                                                }`}
                                            >
                                                {renderMessageContent(message.content)}
                                                <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                                                    {formatTime(message.timestamp)}
                                                </p>
                                            </div>
                                        </div>

                                        {message.isOwn && (
                                            <Popover >
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        style={{fontFamily:"Favorit"}}
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 rounded-full"
                                                    >
                                                        <MoreVertical className="h-4 w-4"/>
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-32 p-1" align="end">
                                                    <Button
                                                        style={{fontFamily:"Favorit"}}
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full cursor-pointer justify-start "
                                                        onClick={() => handleReplyToMessage(message)}
                                                    >
                                                        <Reply className="h-4 w-4 mr-2"/>
                                                        Reply
                                                    </Button>
                                                    <Button
                                                        style={{fontFamily:"Favorit"}}
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full cursor-pointer justify-start"
                                                        onClick={() => handleForwardMessage(message)}
                                                    >
                                                        <Send className="h-4 w-4 mr-2"/>
                                                        Forward
                                                    </Button>
                                                    <Button
                                                        style={{fontFamily:"Favorit"}}
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start  cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                                                        onClick={() => {
                                                            console.log("Delete clicked for message:", message.id)
                                                            handleDeleteMessage(message.id)
                                                        }}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-2"/>
                                                        Delete
                                                    </Button>
                                                </PopoverContent>
                                            </Popover>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{animationDelay: "0.1s"}}
                                            ></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{animationDelay: "0.2s"}}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef}/>
                        </div>
                    </ScrollArea>

                    {/* Reply Preview */}
                    {replyingTo && (
                        <div className="bg-gray-50 border-t border-gray-200 p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Reply className="h-4 w-4 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Replying
                                            to {replyingTo.sender}</p>
                                        <p className="text-xs text-gray-500 truncate max-w-md">{replyingTo.content}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setReplyingTo(null)}>
                                    <X className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Message Input */}
                    <div className="bg-white border-t border-gray-200 p-4">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                            <Button type="button" variant="ghost" size="icon" onClick={() => setShowUploadModal(true)}>
                                <Paperclip className="h-4 w-4"/>
                            </Button>

                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder={replyingTo ? `Reply to ${replyingTo.sender}...` : "Type a message..."}
                                className="flex-1"
                            />

                            <Button type="button" variant="ghost" size="icon" onClick={() => setShowEmojiPicker(true)}>
                                <Smile className="h-4 w-4"/>
                            </Button>

                            <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                                <Send className="h-4 w-4"/>
                            </Button>
                        </form>
                    </div>
                </div>

                {/* All Modals - Outside main container */}

                {/* Emoji Modal */}
                {showEmojiPicker && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">Choose an Emoji</h3>
                                <Button variant="ghost" size="icon" onClick={() => setShowEmojiPicker(false)}>
                                    <X className="h-4 w-4"/>
                                </Button>
                            </div>
                            <div className="grid grid-cols-8 gap-2 max-h-80 overflow-y-auto">
                                {emojis.map((emoji, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleEmojiSelect(emoji)}
                                        className="p-3 hover:bg-gray-100 rounded-lg text-2xl transition-colors flex items-center justify-center aspect-square hover:scale-110 transform"
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {deleteConfirmation.show && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <Trash2 className="h-6 w-6 text-red-600"/>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Delete Message?</h3>
                            <p className="text-sm text-gray-600 text-center mb-6">
                                Are you sure you want to delete this message? This action cannot be undone.
                            </p>
                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="flex-1 cursor-pointer "
                                    onClick={() => {
                                        console.log("Cancel clicked")
                                        cancelDelete()
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="flex-1 cursor-pointer "
                                    onClick={() => {
                                        console.log("Confirm delete clicked")
                                        confirmDelete()
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Forward Message Modal */}
                {forwardMessage && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">Forward Message</h3>
                                <Button className={`cursor-pointer`} variant="ghost" size="icon" onClick={cancelForward}>
                                    <X className="h-4 w-4 cursor-pointer "/>
                                </Button>
                            </div>

                            {/* Message Preview */}
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg border">
                                <p className="text-sm font-medium text-gray-700 mb-1">Forwarding:</p>
                                <p className="text-sm text-gray-600">{forwardMessage.content}</p>
                                <p className="text-xs text-gray-500 mt-1">From: {forwardMessage.sender}</p>
                            </div>

                            {/* User Selection */}
                            <div className="mb-4">
                                <p className="text-sm font-medium text-gray-700 mb-3">Select recipients:</p>
                                <div className="max-h-60 overflow-y-auto space-y-2">
                                    {users
                                        .filter((user) => user.id !== selectedUser.id)
                                        .map((user) => (
                                            <div
                                                key={user.id}
                                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                                                    selectedForwardUsers.includes(user.id)
                                                        ? "bg-blue-50 border border-blue-200"
                                                        : "hover:bg-gray-50 border border-transparent"
                                                }`}
                                                onClick={() => toggleUserSelection(user.id)}
                                            >
                                                <div className="relative cursor-pointer ">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src={user.avatar || "/placeholder.svg"}/>
                                                        <AvatarFallback>
                                                            {user.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div
                                                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(user.status)}`}
                                                    />
                                                </div>
                                                <div className="ml-3 flex-1">
                                                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                                    <p className="text-xs text-gray-500">
                                                        {user.status === "online" ? "Active now" : user.status === "away" ? "Away" : "Offline"}
                                                    </p>
                                                </div>
                                                {selectedForwardUsers.includes(user.id) && (
                                                    <div
                                                        className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white cursor-pointer " fill="currentColor"
                                                             viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 cursor-pointer ">
                                <Button variant="outline" className="flex-1 cursor-pointer " onClick={cancelForward}>
                                    Cancel
                                </Button>
                                <Button className="flex-1 cursor-pointer " onClick={confirmForward}
                                        disabled={selectedForwardUsers.length === 0}>
                                    Forward
                                    to {selectedForwardUsers.length} user{selectedForwardUsers.length !== 1 ? "s" : ""}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Upload Modal */}
                {showUploadModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">Upload Files</h3>
                                <Button variant="ghost" size="icon" onClick={cancelUpload}>
                                    <X className="h-4 w-4"/>
                                </Button>
                            </div>

                            {/* Upload Type Selection */}
                            {!uploadType && (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600 mb-4">Choose what you'd like to upload:</p>

                                    {/* Photo Upload */}
                                    <label
                                        className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    const files = Array.from(e.target.files)
                                                    setSelectedFiles(files)
                                                    setUploadType("photo")
                                                }
                                            }}
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <span className="text-xl">🖼️</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Photos</p>
                                                <p className="text-sm text-gray-500">JPG, PNG, GIF, WebP</p>
                                            </div>
                                        </div>
                                    </label>

                                    {/* Video Upload */}
                                    <label
                                        className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                                        <input
                                            type="file"
                                            multiple
                                            accept="video/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    const files = Array.from(e.target.files)
                                                    setSelectedFiles(files)
                                                    setUploadType("video")
                                                }
                                            }}
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <span className="text-xl">🎥</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Videos</p>
                                                <p className="text-sm text-gray-500">MP4, AVI, MOV, WebM</p>
                                            </div>
                                        </div>
                                    </label>

                                    {/* Audio Upload */}
                                    <label
                                        className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                                        <input
                                            type="file"
                                            multiple
                                            accept="audio/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    const files = Array.from(e.target.files)
                                                    setSelectedFiles(files)
                                                    setUploadType("audio")
                                                }
                                            }}
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                                <span className="text-xl">🎵</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Audio</p>
                                                <p className="text-sm text-gray-500">MP3, WAV, OGG, M4A</p>
                                            </div>
                                        </div>
                                    </label>

                                    {/* Document Upload */}
                                    <label
                                        className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,.doc,.docx,.txt,.xlsx,.pptx"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    const files = Array.from(e.target.files)
                                                    setSelectedFiles(files)
                                                    setUploadType("document")
                                                }
                                            }}
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-xl">📄</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Documents</p>
                                                <p className="text-sm text-gray-500">PDF, DOC, TXT, XLS, PPT</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}

                            {/* File Preview and Upload */}
                            {uploadType && selectedFiles.length > 0 && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl">{getFileIcon(uploadType)}</span>
                                        <h4 className="font-medium capitalize">{uploadType} Upload</h4>
                                    </div>

                                    {/* Selected Files List */}
                                    <div className="max-h-60 overflow-y-auto space-y-2">
                                        {selectedFiles.map((file, index) => (
                                            <div key={index}
                                                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-lg">{getFileIcon(uploadType)}</span>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 truncate max-w-48">{file.name}</p>
                                                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                    onClick={() => {
                                                        const newFiles = selectedFiles.filter((_, i) => i !== index)
                                                        setSelectedFiles(newFiles)
                                                        if (newFiles.length === 0) {
                                                            setUploadType(null)
                                                        }
                                                    }}
                                                >
                                                    <X className="h-3 w-3"/>
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Upload Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <Button variant="outline" className="flex-1" onClick={cancelUpload}>
                                            Cancel
                                        </Button>
                                        <Button className="flex-1" onClick={handleUploadFiles}>
                                            Upload {selectedFiles.length} file{selectedFiles.length !== 1 ? "s" : ""}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </MaxWidth>
    )
}
export default ChatApplication;