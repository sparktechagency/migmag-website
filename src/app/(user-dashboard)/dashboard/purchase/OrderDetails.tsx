"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Download } from "lucide-react";
import { useOrderDetailsQuery } from "@/app/api/authApi/authApi";
import { imgUrl } from "@/utility/img/imgUrl";
import { OrderItemDetails } from "@/utility/type/orderType";
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";

interface OrderDetailsProps {
  orderId: number | string;
  onClose: () => void;
}

interface Track {
  id: number;
  title: string;
  artist: { name: string };
  price: string;
  song: string;
  song_poster: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  // ✅ RTK Query fetch
  const { data, error, isLoading } = useOrderDetailsQuery(orderId);
  const songs: OrderItemDetails[] = data?.data;




const handleDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", filename + ".mp3"); // Force save as file
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Download failed:", error);
  }
};







  // ✅ Open modal with correct track
  const handleOpenModal = (track: Track) => {
    setCurrentTrack(track);
    setShowModal(true);
  };




  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 w-[70%] mx-auto relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 cursor-pointer right-3 text-gray-700 text-xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <h2 className="text-xl font-bold mb-4">Order #{orderId} Details</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-white bg-black rounded-md">
          <tbody>
            {songs?.map((item, i) => (
              <tr
                key={item.id}
                className={`${i % 2 === 0 ? "bg-black" : "bg-gray-900"}`}
              >
                <td className="px-4 py-2">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image
                      src={`${imgUrl}/${item.song?.song_poster}`}
                      alt={item.song?.title}
                      fill
                      className="w-32 h-10 rounded"
                    />
                    {/* Play button overlay */}
                    <button
                      onClick={() =>
                        handleOpenModal({
                          id: item.song?.id,
                          title: item.song?.title,
                          artist: { name: item.song?.artist?.name },
                          price: item.song?.price,
                          song: item.song?.song,
                          song_poster: item.song?.song_poster,
                        } as Track)
                      }
                      className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition rounded-md"
                    >
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          stroke="black"
                          className="w-4 h-4 ml-0.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3l14 9-14 9V3z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">{item.song?.title}</td>
                <td className="px-4 py-2 text-center">
                  {item.song?.artist?.name}
                </td>
                <td className="px-4 py-2 text-center">{item.song?.type?.name}</td>
                <td className="px-4 py-2 text-center">{item.song?.bpm}</td>
                <td className="px-4 py-2 text-center">{item.song?.key?.name}</td>
                <td className="px-4 py-2 text-center">{item.song?.gender}</td>
                <td className="px-4 py-2 text-center">
                  {item.song?.license?.name && (
                    <span className="bg-cyan-500 text-black font-semibold px-3 py-1 rounded-full">
                      {item.song?.license?.name}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleDownload(
                        `${imgUrl}/${item.song?.song}`,
                        item.song?.title + ".mp3"
                      )
                    }
                    className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full bg-lime-500 hover:bg-lime-600 transition"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal Music Player */}
      {showModal && currentTrack && (
        <MusickPlayer
          show={showModal}
          onClose={() => setShowModal(false)}
          currentTrack={{
            id: currentTrack.id,
            title: currentTrack.title,
            name: currentTrack.artist.name,
            song_poster: currentTrack.song_poster,
            song: `${imgUrl}/${currentTrack.song}`,
          }}
        />
      )}
    </div>
  );
};

export default OrderDetails;
