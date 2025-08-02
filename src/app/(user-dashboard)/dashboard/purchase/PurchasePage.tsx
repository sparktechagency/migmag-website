"use client";

import React, {useState, useRef, useEffect} from "react";
import {FaEye } from "react-icons/fa";
import { useUserOrderApiQuery } from "@/redux/api/authApi/authApi";
import OrderDetails from "@/app/(user-dashboard)/dashboard/purchase/OrderDetails";

export type Track = {
    id: number;
    image?: string;
    title: string;
    artist: string;
    genre: string;
    bpm: string | number;
    key: string | number;
    gender: string;
    license: "PREMIUM" | "EXCLUSIVE" | "NON-EXCLUSIVE";
    audio: string;
};

// const licenseMap = {
//     1: "PREMIUM",
//     2: "NON-EXCLUSIVE",
//     3: "EXCLUSIVE",
// };

// const LicenseBadge = ({ type }: { type: Track["license"] }) => {
//     const colorMap = {
//         PREMIUM: "bg-cyan-500 text-white px-6 py-2",
//         "NON-EXCLUSIVE": "bg-gray-600 text-white px-6 py-2",
//         EXCLUSIVE: "bg-lime-500 text-black px-6 py-2",
//     };
//     return (
//         <span className={`text-xs px-3 py-1 rounded-full font-semibold ${colorMap[type]}`}>
//       {type}
//     </span>
//     );
// };

// async function downloadAudio(url: string, title: string = "audio") {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Network response was not ok");
//
//         const blob = await response.blob();
//         const blobUrl = window.URL.createObjectURL(blob);
//
//         const link = document.createElement("a");
//         link.href = blobUrl;
//         link.download = `${title}.mp3`;
//         document.body.appendChild(link);
//         link.click();
//
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//         console.error("Download failed:", error);
//     }
// }

const PurchasePage: React.FC = () => {
    const [selectedOrder, setSelectedOrder] = useState<number | string>("");
    const [showModal, setShowModal] = useState(false);

    const handleView = (orderId: number) => {
        setSelectedOrder(orderId);
        setShowModal(true);
    };

    // const handleCloseModal = () => {
    //     setShowModal(false);
    //     setSelectedOrder("");
    // };

    const [playingId, setPlayingId] = useState<number | null>(null);
    console.log(playingId);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // const togglePlay = (detailId: number, audioSrc: string) => {
    //     if (playingId === detailId) {
    //         audioRef.current?.pause();
    //         setPlayingId(null);
    //     } else {
    //         if (audioRef.current) {
    //             audioRef.current.src = `http://103.186.20.110:8002/${audioSrc}`;
    //             audioRef.current.play();
    //         }
    //         setPlayingId(detailId);
    //     }
    // };

    const onAudioEnded = () => {
        setPlayingId(null);
    };

    const { data } = useUserOrderApiQuery(undefined);
    const orderData = data?.data?.data || [];

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    return (
        <div className="w-full bg-gray-900 min-h-screen p-4">
            <h1 className="text-white text-3xl mb-6 font-bold">Purchase Details</h1>

            {/* Table for large screens */}
            <div className="hidden lg:block">
                <div className="overflow-x-auto border border-gray-700 rounded-md">
                    <table className="min-w-full text-sm text-left text-white">
                        <thead className="bg-gray-900 text-white">
                        <tr>
                            <th className="px-4 py-3">Full Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Order #</th>
                            <th className="px-4 py-3">Total</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {orderData.map((order, index) => (
                            <tr key={order.id} className={index % 2 === 0 ? "bg-black" : ""}>
                                <td className="px-4 py-2">{order.user?.full_name || "N/A"}</td>
                                <td className="px-4 py-2">{order.user?.email || "N/A"}</td>
                                <td className="px-4 py-2">{order.user?.location || "N/A"}</td>
                                <td className="px-4 py-2">{order.order_number}</td>
                                <td className="px-4 py-2">${parseFloat(order.total_amount).toFixed(2)}</td>
                                <td className="px-4 py-2 capitalize">{order.status}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleView(order.id)}
                                        className=" cursor-pointer text-white px-3 py-1 rounded flex items-center gap-1"
                                    >
                                        <FaEye />
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedOrder && (
                <div className="fixed inset-0  bg-opacity-60r mx-auto  top-40  z-50  ">
                    <OrderDetails
                        orderId={selectedOrder}
                        onClose={() => {
                            setShowModal(false);
                            setSelectedOrder("");
                        }}
                    />
                </div>
            )}

            <audio ref={audioRef} onEnded={onAudioEnded} className="hidden" />
        </div>
    );
};

export default PurchasePage;
