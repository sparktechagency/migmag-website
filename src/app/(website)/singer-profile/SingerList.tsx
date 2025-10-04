/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useArtistListApiQuery } from "@/app/api/websiteApi/websiteApi";
import { useRef } from "react";
import SingerCard from "./SingerCard";


export default function SingerList() {
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
        <div className="w-full max-w-6xl mx-auto my-14 space-y-6     ">
            {artistData.slice(0, 3).map((artist: any) => (
                <SingerCard
                    key={artist.id}
                    {...artist}
                    onPlay={handlePlay}
                />
            ))}
        </div>
    );
}
