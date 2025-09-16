"use client";

import React from "react";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Link from "next/link";

interface ArtistCardProps {
  id: number;
  name: string;
  role: string;
  price: number;
  image: string;
  audio: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ id, name, role, price, image, audio }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b py-6 hover:bg-gray-90  transition-colors duration-200 gap-4">
      {/* Left: Profile */}
      <div className="flex items-center gap-3  ">
        <Link href={`/singer-profile/${id}`}>
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full  w-16 h-16"
          />
        </Link>
        <div>
          <h3 className="font-semibold text-white ">{name}</h3>
          <p className="text-sm text-white  ">{role}</p>
        </div>
      </div>

      {/* Middle: Audio Player */}
      <div className="flex-1 w-full sm:px-6  max-w-xl    ">
        <AudioPlayer
          src={audio}
          autoPlay={false}
          showJumpControls={false}
          layout="horizontal"
          customAdditionalControls={[]} // no extra buttons
          customVolumeControls={[]} // hide volume controls
          customProgressBarSection={["PROGRESS_BAR"]} // only progress bar
          className="shadow-none bg-black text-white p-2 rounded-md h-12"
        />
      </div>

      {/* Right: Hire Button */}
      <div className="flex items-center gap-x-6">
        <span className="bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full font-medium border border-green-200">
          ${price}
        </span>
        <Link href={`/hire-from`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer ">
            Hire Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;