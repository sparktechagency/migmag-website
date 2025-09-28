"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { imgUrl } from "@/utility/img/imgUrl";

interface ArtistCardProps {
  id: number;
  name: string;
  singer?: string;
  cover_song?: string;
  profile?: string;
  onPlay: (id: number, audioEl: HTMLAudioElement) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  id,
  name,
  profile,
  singer,
  cover_song,
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
    <div className="flex items-center justify-between p-4 border-b py-6 hover:bg-gray-900 transition-colors duration-200 gap-4">
      {/* Left */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Link href={`/singer-profile/${id}`}>
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
        <h1 className="text-white md:font-semibold text-xs md:text-xl">23$</h1>
        <Link href={`/hire-from/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white md:px-4 md:py-2 py-1 md:text-[16px] text-xs px-2 rounded-md cursor-pointer">
            Hire Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
