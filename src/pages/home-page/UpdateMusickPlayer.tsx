'use client';

import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Image from 'next/image';
import { FiPlay, FiHeart } from 'react-icons/fi';
import { CiPause1 } from 'react-icons/ci';
import { AnimatePresence, motion } from 'framer-motion';
import MaxWidth from '@/components/max-width/MaxWidth';
import { imgUrl } from '@/utility/img/imgUrl';
import { useSongDetailsQuery } from '@/redux/api/home-api/homeApi';

type UpdateMusickPlayerProps = {
    show: boolean;
    onClose: () => void;
    currentIndex: number;
};

export function UpdateMusickPlayer({
                                       show,
                                       onClose,
                                       currentIndex,
                                   }: UpdateMusickPlayerProps) {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('00:00');
    const [timeLeft, setTimeLeft] = useState('00:00');

    const { data, isLoading } = useSongDetailsQuery({ songId: currentIndex });
    const musicData = data?.data;

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    useEffect(() => {
        if (!waveformRef.current || !musicData?.song) return;

        if (wavesurferRef.current) {
            try {
                wavesurferRef.current.stop();
            } catch (err) {
                console.warn('Error stopping audio:', err);
            }
            wavesurferRef.current.destroy();
        }

        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#ccc',
            progressColor: '#E7F056',
            height: 40,
            barWidth: 2,
            cursorColor: '#E7F056',
        });

        wavesurferRef.current = ws;
        ws.load(`${imgUrl}/${musicData.song}`);

        ws.on('ready', () => {
            const duration = ws.getDuration() || 0;
            setTimeLeft(`-${formatTime(duration)}`);
        });

        ws.on('audioprocess', () => {
            if (ws.isPlaying()) {
                const duration = ws.getDuration();
                const current = ws.getCurrentTime();
                setCurrentTime(formatTime(current));
                setTimeLeft(`-${formatTime(duration - current)}`);
            }
        });

        ws.on('finish', () => {
            setIsPlaying(false);
        });

        return () => {
            try {
                ws.stop();
            } catch (err) {
                console.warn('Cleanup stop error:', err);
            }
            ws.destroy();
        };
    }, [currentIndex, musicData?.song]);

    const togglePlay = async () => {
        if (wavesurferRef.current) {
            try {
                const isCurrentlyPlaying = wavesurferRef.current.isPlaying();
                wavesurferRef.current.playPause();
                setIsPlaying(!isCurrentlyPlaying);
            } catch (error) {
                console.warn('Playback error:', error);
            }
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
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed max-w-6xl mx-auto bottom-0 left-0 right-0 z-50 bg-[#1b1b1b] px-4 py-4 shadow-xl border-t-2 border-[#E7F056]"
                        >
                            {isLoading || !musicData ? (
                                <div className="flex justify-center items-center h-[120px] text-white text-lg">
                                    Loading...
                                </div>
                            ) : (
                                <div className="flex items-center justify-between gap-4 text-white">
                                    {/* Track Info */}
                                    <div className="flex items-center gap-3 min-w-[200px]">
                                        <div className="w-14 h-14 relative rounded overflow-hidden">
                                            <Image
                                                src={`${imgUrl}/${musicData.song_poster}`}
                                                alt={musicData.title}
                                                width={93}
                                                height={91}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">{musicData.title}</h3>
                                            <p className="text-xs text-gray-400">{musicData.artist?.name}</p>
                                        </div>
                                    </div>

                                    {/* Controls + Waveform */}
                                    <div className="flex-1 flex items-center gap-3">
                                        <button
                                            onClick={togglePlay}
                                            className="text-[#E7F056] hover:scale-110 cursor-pointer transition"
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
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </MaxWidth>
    );
}
