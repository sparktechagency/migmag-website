"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { imgUrl } from "@/utility/img/imgUrl";

interface ArtistCardProps {
  id: number;
  slug: string;
  name: string;
  singer?: string;
  cover_song?: string;
  profile?: string;
  price?: string
  onPlay: (id: number, audioEl: HTMLAudioElement) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  id,
  slug,
  name,
  profile,
  singer,
  cover_song,
  price,
  onPlay,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audioRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const seekTime = (offsetX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress((seekTime / audioRef.current.duration) * 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      onPlay(id, audioRef.current);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const handlePause = () => setIsPlaying(false);
      audioRef.current.addEventListener("pause", handlePause);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => audioRef.current?.removeEventListener("pause", handlePause);
    }
  }, []);

  return (
    <div>
      <div className ={"md:block hidden "} >
        <div className="flex items-center justify-between p-4  border-b py-6 hover:bg-gray-900 transition-colors duration-200 gap-4    ">
      {/* Left */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Link href={`/singer-profile/${slug}`}>
          <Image
            src={`${imgUrl}/${profile}`}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-16 h-16"
          />
        </Link>
        <div className="truncate">
          <h3 className="font-semibold md:text-lg text-xs text-white truncate">{name}</h3>
          <p className="md:text-sm text-xs text-white truncate">{singer}</p>
        </div>
      </div>

      {/* Middle: Custom Progress Bar */}
      <div className="flex-1 flex items-center justify-center gap-3">
        <audio
          ref={audioRef}
          src={`${imgUrl}/${cover_song}`}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration);
          }}
        />
        <button
          onClick={togglePlay}
          className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <div className="flex-1 flex flex-col">
          {/* Progress bar */}
          <div
            className="h-2 w-full bg-gray-700 rounded-full cursor-pointer relative md:block hidden "
            onClick={handleSeek}
          >
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
            {/* Thumb */}
            <div
              className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-white mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-x-6 flex-1 justify-end min-w-0">
        <h1 className="text-white md:font-semibold text-xs md:text-xl">${price}</h1>
        <Link href={`/hire-from/${slug}`}>
          <button className=" text-white bg-[#FDC700]  md:px-4 md:py-2 py-1 md:text-[16px] text-xs px-2 rounded-md cursor-pointer">
            Hire Now
          </button>
        </Link>
      </div>
    </div>
      </div>



      <div className = {"md:hidden block   "} >
        <div className="flex items-center justify-between p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <Link className = {` w-20 h-20 rounded-full `} href={`/singer-profile/${slug}`}>
          <Image
            src={`${imgUrl}/${profile}`}
            alt={name}
            width={2000}
            height={2000}
            className="rounded-full w-16 h-16"
          />
        </Link>
    </div>
    <audio
          ref={audioRef}
          src={`${imgUrl}/${cover_song}`}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration);
          }}
        />
        <button
          onClick={togglePlay}
          className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full  text-white"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
    <div>
      <h3 className="text-white font-medium">{name}</h3>
      <p className="text-white text-sm">{singer}</p>
    </div>
  </div>
  <Link href={`/hire-from/${slug}`}  > <svg className="text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
  </Link>
</div>
      </div>

      
      
    </div>
  );
};

export default ArtistCard;
