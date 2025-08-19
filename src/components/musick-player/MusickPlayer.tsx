"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";
import { FiPlay, FiHeart } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import MaxWidth from "@/components/max-width/MaxWidth";
import { imgUrl } from "@/utility/img/imgUrl";

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
    };
}) {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [timeLeft, setTimeLeft] = useState("00:00");
    const [isReady, setIsReady] = useState(false);

    /** Format time helper */
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");
        return `${mins}:${secs}`;
    };

    /** Create or recreate wavesurfer when track changes */
    useEffect(() => {
        if (!waveformRef.current) return;

        // Destroy old instance if exists
        if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
            wavesurferRef.current = null;
        }

        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#ccc",
            progressColor: "#E7F056",
            height: 40,
            barWidth: 2,
            cursorColor: "#E7F056",
        });

        wavesurferRef.current = ws;

        // Fix possible double slash in URL
        const audioSrc = `${currentTrack.song.replace(
            /^\//,
            ""
        )}`;
        console.log("Loading audio from:", audioSrc);

        ws.load(audioSrc);

        ws.on("ready", () => {
            const duration = ws.getDuration() || 0;
            setTimeLeft(`-${formatTime(duration)}`);
            setIsReady(true);
        });

        ws.on("audioprocess", () => {
            if (ws.isPlaying()) {
                const duration = ws.getDuration();
                const current = ws.getCurrentTime();
                setCurrentTime(formatTime(current));
                setTimeLeft(`-${formatTime(duration - current)}`);
            }
        });

        ws.on("finish", () => {
            setIsPlaying(false);
            setIsReady(false);
        });

        ws.on("error", (err) => {
            if (err.name !== "AbortError") {
                console.error("WaveSurfer error:", err);
            }
        });

        // Cleanup
        return () => {
            try {
                ws.destroy();
            } catch (e) {
                console.warn("Error destroying wavesurfer:", e);
            }
            wavesurferRef.current = null;
            setIsReady(false);
        };
    }, [currentTrack]);

    /** Play/Pause Toggle */
    const togglePlay = () => {
        const ws = wavesurferRef.current;
        if (!ws || !isReady) return;
        try {
            const isCurrentlyPlaying = ws.isPlaying();
            ws.playPause();
            setIsPlaying(!isCurrentlyPlaying);
        } catch (error) {
            console.warn("Playback error:", error);
        }
    };

    return (
        <MaxWidth>
            <AnimatePresence>
                {show && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/40 z-40"
                            onClick={onClose}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed max-w-[1539px] mx-auto bottom-0 left-0 right-0 z-50 bg-[#1b1b1b] px-4 py-2 shadow-xl border-t-2 border-[#E7F056]"
                        >
                            <div className="flex items-center justify-between gap-4 text-white">
                                {/* Track Info */}
                                <div className="flex items-center gap-3 min-w-[200px]">
                                    <div className="w-14 h-14 relative rounded overflow-hidden">
                                        <Image
                                            src={`${imgUrl}/${currentTrack.song_poster}`}
                                            alt={currentTrack.title}
                                            width={93}
                                            height={91}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">{currentTrack.title}</h3>
                                        <p className="text-xs text-gray-400">{currentTrack.name}</p>
                                    </div>
                                </div>

                                {/* Controls + Waveform */}
                                <div className="flex-1 flex items-center gap-3">
                                    <button
                                        onClick={togglePlay}
                                        disabled={!isReady}
                                        className={`text-[#E7F056] hover:scale-110 cursor-pointer transition ${!isReady ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        {isPlaying ? <CiPause1 size={24} /> : <FiPlay size={24} />}
                                    </button>
                                    <span className="text-xs w-10 text-right">{currentTime}</span>
                                    <div className="w-full">
                                        <div ref={waveformRef} className="w-full h-10" />
                                    </div>
                                    <span className="text-xs w-12 text-left">{timeLeft}</span>
                                </div>

                                {/* Like Icon */}
                                <div className="min-w-[30px]">
                                    <FiHeart
                                        size={20}
                                        className="text-white cursor-pointer hover:text-[#E7F056]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </MaxWidth>
    );
}
