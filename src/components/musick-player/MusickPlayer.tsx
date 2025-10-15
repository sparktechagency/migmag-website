"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { imgUrl } from "@/utility/img/imgUrl";
import { useAddWishListMutation, } from "@/app/api/authApi/authApi";
import { useLazyViewSongQuery, } from "@/app/api/websiteApi/websiteApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function MusickPlayer({
    show,
    onClose,
    currentTrack,
}: {
    show: boolean;
    onClose: () => void;
    currentTrack: {
        title: string;
        name: string;
        song_poster: string;
        song: string;
        id: number;
    };
}) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [waveform, setWaveform] = useState<number[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const songId = Number(currentTrack?.id);
    const router = useRouter();

    const [addWishList] = useAddWishListMutation();


    /** Initialize waveform bars */
    useEffect(() => {
        const barsCount = 107;
        const newBars = Array.from({ length: barsCount }, () => Math.random() * 0.8 + 0.2);
        setWaveform(newBars);
    }, [currentTrack]);






    /** Update audio time & duration */
    useEffect(() => {
        if (!audioRef.current) return;
        const audio = audioRef.current;

        const updateTime = () => {
            if (!isDragging) setCurrentTime(audio.currentTime);
        };
        const setAudioDuration = () => setDuration(audio.duration || 0);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", setAudioDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", setAudioDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [currentTrack, isDragging]);

    /** Animate waveform bars smoothly */
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setWaveform((prev) =>
                prev.map((h) => {
                    const change = (Math.random() - 0.5) * 0.1;
                    let newHeight = h + change;
                    newHeight = Math.max(0.2, Math.min(1, newHeight));
                    return newHeight;
                })
            );
        }, 150);

        return () => clearInterval(interval);
    }, [isPlaying]);


    const [trigger] = useLazyViewSongQuery();

    const handleClick = () => {
        trigger(songId);
    };

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);

        } else {
            await audioRef.current.play();
            handleClick();
            setIsPlaying(true);
            // API call for play

        }
    };
    const formatTime = (time: number) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    /** Click on slider to jump */
    const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!audioRef.current || !progressRef.current) return;
        const rect = progressRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    /** Wishlist handlers */
    const handleAddToWishlist = async () => {
        try {
            const res = await addWishList({ songId }).unwrap();
            if (res) {

                Swal.fire({ position: "top-end", icon: "success", title: res?.message, showConfirmButton: false, timer: 1500 });
            }
        } catch (err) {
            console.log(err)
            const error = err as FetchBaseQueryError & { data?: { message?: string } };
            if (error.status === 401) {
                router.push("/login");
                // window.location.reload();
            }
            Swal.fire({
                position: "top",
                icon: "error",
                title: error?.data?.message || "Something went wrong",
                showConfirmButton: false,
                timer: 2000,
            });

            // Swal.fire({ position: "top-end", icon: "error", title: err?.data?.message || "Already in wishlist", showConfirmButton: false, timer: 1500 });
        }


    };

    // const removeFromWishlist = async () => {
    //     try {
    //         const res = await removeWish({ songId }).unwrap();
    //         if (res) {
    //             refetch();
    //             Swal.fire({ position: "top-end", icon: "success", title: res?.message, showConfirmButton: false, timer: 1500 });
    //         }
    //     } catch (err) {
    //         const error = err as FetchBaseQueryError & { data?: { message?: string } };
    //         Swal.fire({
    //             position: "top",
    //             icon: "error",
    //             title: error?.data?.message || "Something went wrong",
    //             showConfirmButton: false,
    //             timer: 2000,
    //         });
    //     };
    // }

    const progress = duration ? (currentTime / duration) * 100 : 0;

    /** Fully free draggable slider using pointer events */
    const startDrag = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        document.addEventListener("pointermove", onDrag);
        document.addEventListener("pointerup", stopDrag);
    };

    const onDrag = (e: PointerEvent) => {
        if (!progressRef.current) return;
        const rect = progressRef.current.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        const newTime = (x / rect.width) * duration;
        setCurrentTime(newTime);
    };

    const stopDrag = () => {
        if (audioRef.current) audioRef.current.currentTime = currentTime;
        setIsDragging(false);
        document.removeEventListener("pointermove", onDrag);
        document.removeEventListener("pointerup", stopDrag);
    };

    return (
        <div className="max-w-3xl h-44 mx-auto">
            <AnimatePresence>
                {show && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={onClose}
                        />

                        {/* Player */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed bottom-0 left-0 right-0 mx-auto max-w-6xl z-50 bg-[#1b1b1b] px-4 py-4 shadow-xl border-t-2 border-[#E7F056] rounded-t-xl"
                        >
                            <div className="flex items-center justify-between gap-4 text-white">
                                {/* Track Info */}
                                <div className="flex items-center gap-3 min-w-[200px]">
                                    <div className="w-14 h-14 relative rounded-full overflow-hidden">
                                        <Image
                                            src={`${imgUrl}/${currentTrack.song_poster}`}
                                            alt={currentTrack.title}
                                            width={56}
                                            height={56}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">{currentTrack.title}</h3>
                                        <p className="text-xs text-gray-400">{currentTrack.name}</p>
                                    </div>
                                </div>

                                {/* Waveform + Slider */}
                                <div className="flex-1 flex flex-col gap-2">
                                    {/* Waveform */}
                                    <div className="flex items-end gap-1 cursor-pointer w-full">
                                        {waveform.map((height, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-[#E7F056] rounded-sm transition-[height] duration-150 ease-linear flex-1"
                                                style={{ height: `${height * 40}px` }}
                                            />
                                        ))}
                                    </div>

                                    {/* Progress Slider */}
                                    <div
                                        ref={progressRef}
                                        className="relative w-full h-2 bg-gray-700 rounded cursor-pointer"
                                        onPointerDown={startDrag}
                                        onClick={handleSeek}
                                    >
                                        <div
                                            className="h-2 bg-[#E7F056] rounded"
                                            style={{ width: `${progress}%` }}
                                        />
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E7F056] rounded-full cursor-grab shadow-lg"
                                            style={{ left: `calc(${progress}% - 8px)` }}
                                        // onPointerDown={(e) => e.stopPropagation() || startDrag(e)}
                                        />
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center gap-3 mt-1">
                                        <button
                                            onClick={togglePlay}
                                            className="text-[#E7F056] hover:scale-110 transition cursor-pointer "
                                        >
                                            {isPlaying ? <CiPause1 size={24} /> : <FiPlay size={24} />}
                                        </button>
                                        <span className="text-xs w-10 text-right">{formatTime(currentTime)}</span>
                                        <span className="text-xs w-12 text-left">{formatTime(duration - currentTime)}</span>
                                        <audio ref={audioRef} src={currentTrack.song} />
                                    </div>
                                </div>

                                {/* Wishlist */}
                                <div className="min-w-[30px]">
                                    <Heart onClick={handleAddToWishlist} className="cursor-pointer hover:text-red-500 transition" />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
