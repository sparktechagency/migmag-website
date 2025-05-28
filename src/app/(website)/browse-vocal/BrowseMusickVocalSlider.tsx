'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { CiPause1 } from 'react-icons/ci';
import MusickPlayer from '@/components/musick-player/MusickPlayer';

interface AudioItem {
    id: number;
    title: string;
    name: string;
    price: string;
    img: string;
    audio: string;
}

const audioData: AudioItem[] = [
    {
        id: 1,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-1.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 2,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-2.png',
        audio: '/images/home-page/audio-2.mp3',
    },
    {
        id: 3,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-3.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 4,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-4.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 5,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-5.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 6,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-3.png',
        audio: '/images/home-page/audio-1.mp3',
    },

];

export default function BrowseMusickVocalSlider() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            origin: 'auto',
            perView: 5,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 340px)': {
                slides: { perView: 1, spacing: 29 },
            },
            '(min-width: 340px)': {
                slides: { perView: 2, spacing: 0 },
            },
            '(min-width: 640px)': {
                slides: { perView: 3, spacing: 15 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 6, spacing: 9 },
            },
        },
    });


    const handleTogglePlay = (url: string) => {

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(url);
        audioRef.current = audio;
        audio.play();
        setPlayingUrl(url);
        setIsPlaying(true);

        audio.onended = () => {
            setIsPlaying(false);
        };
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const nextTrack = () => {
        if (currentIndex !== null) {
            const nextIndex = (currentIndex + 1) % audioData.length;
            setCurrentIndex(nextIndex);
        }
    };

    const prevTrack = () => {
        if (currentIndex !== null) {
            const prevIndex = (currentIndex - 1 + audioData.length) % audioData.length;
            setCurrentIndex(prevIndex);
        }
    };


    return (
        <main className="">
            <div style={{ fontFamily: 'Favorit' }} ref={sliderRef} className="keen-slider relative lg:mt-9 mt-4">
                {audioData.map((item) => (
                    <div
                        key={item.id}
                        className="keen-slider__slide lg:w-[265px] w-full mx-auto px-4 lg:px-0 flex-shrink-0"
                    >
                        {/* Make this container relative */}
                        <div className="relative">
                            <Image
                                src={item.img}
                                width={265}
                                height={265}
                                alt={item.title}
                                className="object-cover rounded-xl w-[265px] h-[265px]"
                            />
                            {/* Absolutely centered play/pause button */}
                            <button
                                onClick={()=>{ handleOpenModal(item.id) }}
                                className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                {playingUrl === item.audio && isPlaying ? (
                                    <CiPause1 className="text-[#E7F056] text-xl" />
                                ) : (
                                    <svg
                                        width="22"
                                        height="26"
                                        viewBox="0 0 22 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 2.03275V23.9672C-0.00178 24.3306 0.09397 24.6878 0.277166 25.0013C0.460359 25.3148 0.724237 25.573 1.04112 25.7489C1.35801 25.9247 1.71624 26.0117 2.07818 26.0008C2.44013 25.9898 2.79247 25.8813 3.09824 25.6866L21.0553 13.4339C21.3448 13.2517 21.5834 12.9988 21.7488 12.6987C21.9142 12.3987 22.001 12.0614 22.001 11.7185C22.001 11.3756 21.9142 11.0383 21.7488 10.7383C21.5834 10.4382 21.3448 10.1852 21.0553 10.0031L3.09824 0.321376C2.79305 0.127058 2.44144 0.0186091 2.08019 0.00732771C1.71893 -0.00395366 1.3613 0.0823329 1.04467 0.257232C0.728031 0.432132 0.46402 0.689215 0.280244 1.00155C0.0964691 1.31389 -0.000340887 1.67002 0 2.03275Z"
                                            fill="#E7F056"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <h3 className="lg:text-lg font-bold lg:mt-5 mt-2 text-white">{item.title}</h3>
                        <p className="lg:text-lg font-bold text-[#E7F056]">{item.name}</p>
                        <p className="text-[#E7F056] lg:text-lg font-bold">{item.price}</p>
                    </div>
                ))}
            </div>


            {showModal && currentIndex !== null && (
                <MusickPlayer
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    currentTrack={audioData[currentIndex]}
                    nextTrack={nextTrack}
                    prevTrack={prevTrack}
                />
            )}


        </main>
    );
}
