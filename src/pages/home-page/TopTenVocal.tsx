'use client';

import { MusickPlayer } from "@/components/musick-player/MusickPlayer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";

interface Artist {
  id: number;
  name: string;
}

interface Track {
  id: number;
  title: string;
  artist: Artist;
  price: string;
  song: string;
  song_poster: string;
}

const TopTenVocal: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchTrendingVocals = async () => {
      try {
        const res = await fetch(`${url}/latest-trending`);
        const json = await res.json();
        if (json.success) {
          setTracks(json.data.slice(0, 10));
        } else {
          setError("Failed to load data");
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchTrendingVocals();
    }
  }, [url]);

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const midpoint = Math.ceil(tracks.length / 2);
  const leftItems = tracks.slice(0, midpoint);
  const rightItems = tracks.slice(midpoint);

  const renderCard = (item: Track, index: number) => {
    const imagePath = `${imgUrl}/${item.song_poster}`;
    return (
      <div
        key={item.id}
        className={`flex flex-col lg:flex-row items-center justify-between gap-y-2 lg:gap-y-0 lg:py-2 border border-black py-3 px-10 my-2 rounded-lg max-w-[713px] transition-all duration-300 cursor-pointer ${index % 2 === 0 ? "bg-[#F1F1F1]" : "bg-[#FFFFFF]"
          }`}
      >
        <h1
          className={`${index === 9 ? "-ml-3" : ""
            } text-3xl headerColor`}
        >
          {index + 1}
        </h1>

        <Link href={`/music-details/${item.id}`}>
          <Image
            src={imagePath}
            alt={item.title}
            width={100}
            height={100}
            className={` ${index === 6 ? "-ml-2" : ""} ${index === 1 ? "-ml-1.5" : ""}   ${index === 5 ? "-ml-2.5" : ""} ${index === 8 ? "-ml-1.5" : ""
              } ${index % 2 === 0 ? "bg-red-400" : "bg-red-900"} w-20 h-20 rounded-xl`}
          />
        </Link>

        <div className="flex flex-col">
          <Link href={`/singer-profile/${item.artist.id}`}>
            <h3 className="text-lg font-bold leading-6 hover:underline headerColor">
              {item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}
            </h3>
          </Link>

          <p className="text-lg font-bold flex flex-col gap-x-2.5 leading-6 textColor">
            <Link href={`/singer-profile/${item.artist.id}`}>
              {item.artist.name.length > 10
                ? item.artist.name.slice(0, 10) + "..."
                : item.artist.name}
            </Link>
            <span>Exclusive</span>
          </p>
        </div>

        <button
          onClick={() => handleOpenModal(index)}
          className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-black"
        >
          <FaPlay className="text-black text-2xl cursor-pointer " />
        </button>

        <button className="w-[112px] rounded-2xl text-lg py-1 bg-black text-white">
          <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>
            {item.price}
          </Link>
        </button>
      </div>
    );
  };

  return (
    <MaxWidth>
      <div className="mx-auto mb-10">
        <div className="border border-black" />
        <h2 className="mt-7 text-2xl lg:text-4xl font-semibold headerColor">
          Top 10 Vocals
        </h2>

        {loading && <p className="text-gray-400 mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full">
          <div className="flex flex-col">
            {leftItems.map((item, i) => renderCard(item, i))}
          </div>
          <div className="flex flex-col mt-4 md:mt-0">
            {rightItems.map((item, i) => renderCard(item, i + midpoint))}
          </div>
        </div>
      </div>

      {showModal && currentIndex !== null && (
        <MusickPlayer
          show={showModal}
          onClose={() => setShowModal(false)}
          currentTrack={{
            id: tracks[currentIndex].id,
            title: tracks[currentIndex].title,
            name: tracks[currentIndex].artist.name,
            song_poster: tracks[currentIndex].song_poster,
            song: tracks[currentIndex].song.startsWith("http")
              ? tracks[currentIndex].song
              : `${imgUrl}/${tracks[currentIndex].song}`,
          }}
        />
      )}
    </MaxWidth>
  );
};

export default TopTenVocal;
