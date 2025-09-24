"use client";
import { useArtistListApiQuery } from "@/app/api/websiteApi/websiteApi";
import ArtistCard from "./ArtistCard";
import { useRef } from "react";


export default function ArtistList() {
  const { data } = useArtistListApiQuery(undefined);
  const artistData = data?.data?.data || [];

  const lastAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (id: number, audioEl: HTMLAudioElement) => {
    // Pause previously playing audio
    if (lastAudioRef.current && lastAudioRef.current !== audioEl) {
      lastAudioRef.current.pause();
    }

    lastAudioRef.current = audioEl;
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-14 rounded-lg shadow-sm divide-y">
      {artistData.map((artist: any) => (
        <ArtistCard
          key={artist.id}
          {...artist}
          onPlay={handlePlay}
        />
      ))}
    </div>
  );
}
