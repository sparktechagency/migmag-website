"use client";
import MusickPlayer from "@/components/musick-player/MusickPlayer";
import Image from "next/image";
import React, {useRef, useState} from "react";
import {CiPause1} from "react-icons/ci";
import {FaPlay} from "react-icons/fa";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";

interface AudioItem {
    id: number;
    title: string;
    name: string;
    price: string;
    img: string;
    audio: string;
}

const TopTenVocal: React.FC = () => {
    /* ---------- static data ---------- */
    const audioData: AudioItem[] = [
        {
            id: 1,
            title: "Rock Anthem",
            name: "Bujhina Toh Tai",
            price: "€8",
            img: "/images/home-page/top/top-1.png",
            audio: "/images/audio/audio-1.mp3"
        },
        {
            id: 2,
            title: "Classic Tune",
            name: "Tomar Jonno",
            price: "€11",
            img: "/images/home-page/top/top-2.png",
            audio: "/images/audio/audio-2.mp3"
        },
        {
            id: 3,
            title: "Pop Hit",
            name: "Ei Mon Tomake",
            price: "€9",
            img: "/images/home-page/top/top-3.png",
            audio: "/images/audio/audio-3.mp3"
        },
        {
            id: 4,
            title: "Jazz Vibes",
            name: "Chirokal Tomar",
            price: "€10",
            img: "/images/home-page/top/top-4.png",
            audio: "/images/audio/audio-4.mp3"
        },
        {
            id: 5,
            title: "Indie Mood",
            name: "Ekla Pothe",
            price: "€7",
            img: "/images/home-page/top/top-5.png",
            audio: "/images/home-page/audio-5.mp3"
        },
        {
            id: 6,
            title: "Soul Beats",
            name: "Alo Chhaya",
            price: "€12",
            img: "/images/home-page/top/top-6.png",
            audio: "/images/home-page/audio-6.mp3"
        },
        {
            id: 7,
            title: "Acoustic Chill",
            name: "Mone Pore",
            price: "€9",
            img: "/images/home-page/top/top-7.png",
            audio: "/images/home-page/audio-7.mp3"
        },
        {
            id: 8,
            title: "EDM Drop",
            name: "Brishtite Tumi",
            price: "€14",
            img: "/images/home-page/top/top-8.png",
            audio: "/images/home-page/audio-8.mp3"
        },
        {
            id: 9,
            title: "Lo-Fi Zone",
            name: "Tumi Nei",
            price: "€6",
            img: "/images/home-page/top/top-9.png",
            audio: "/images/home-page/audio-9.mp3"
        },
        {
            id: 10,
            title: "Fusion Funk",
            name: "Bondhu Hoye Thako",
            price: "€10",
            img: "/images/home-page/top/top-10.png",
            audio: "/images/home-page/audio-10.mp3"
        },{
            id: 11,
            title: "Fusion Funk",
            name: "Bondhu Hoye Thako",
            price: "€10",
            img: "/images/home-page/top/top-10.png",
            audio: "/images/home-page/audio-10.mp3"
        },
    ];

    /* ---------- state ---------- */
    const [visibleData, setVisibleData] = useState<number>(10);                 // how many to show
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    /* ---------- audio element ---------- */
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleTogglePlay = (url: string) => {
        if (playingUrl === url && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            audioRef.current?.pause();
            const audio = new Audio(url);
            audioRef.current = audio;
            audio.play();
            setPlayingUrl(url);
            setIsPlaying(true);
        }
    };

    /* ---------- modal helpers ---------- */
    const handleOpenModal = (globalIndex: number) => {
        setCurrentIndex(globalIndex);
        setShowModal(true);
    };
    const nextTrack = () => currentIndex !== null && setCurrentIndex((currentIndex + 1) % audioData.length);
    const prevTrack = () => currentIndex !== null && setCurrentIndex((currentIndex - 1 + audioData.length) % audioData.length);

    /* ---------- split list into two vertical columns ---------- */
    const midpoint = Math.ceil(visibleData / 2);
    const leftItems = audioData.slice(0, midpoint);
    const rightItems = audioData.slice(midpoint, visibleData);

    /* ---------- reusable renderer ---------- */
    const renderCard = (item: AudioItem, globalIndex: number) => (
        <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center justify-between
                  gap-y-2 lg:gap-y-0 lg:py-2 border border-black py-3 px-10 my-2 rounded-lg max-w-[713px]
                  transition-all duration-300 cursor-pointer
                  ${playingUrl === item.audio && isPlaying
                ? "bg-black"
                : globalIndex % 2 === 0
                    ? "bg-[#F1F1F1]"
                    : "bg-[#FFFFFF]"}`}
        >
            {/* index */}
            <h1 className={`text-3xl  ${playingUrl === item.audio && isPlaying ? "text-white" : "headerColor"}`}>
                {globalIndex + 1}
            </h1>

            {/* cover */}
            <Link href={`/browse-vocal/${item.id}`}>
                <Image
                    src={item.img}
                    alt={item.title}
                    width={93}
                    height={91}
                    className="object-cover rounded-xl"
                />
            </Link>

            {/* title + artist */}
            <div className="flex flex-col">
                <Link href={`/artist-library/${item.id}`}>
                    <h3 className={`text-lg font-bold leading-6 hover:underline ${playingUrl === item.audio && isPlaying ? "text-white" : "headerColor"}`}>
                        {item.title}
                    </h3>
                </Link>
                <p className={`text-lg font-bold flex gap-x-2.5 leading-6 ${playingUrl === item.audio && isPlaying ? "text-white" : "textColor"}`}>
                    Luna <span className="">Exclusive</span>
                </p>
            </div>

            {/* play / pause */}
            <button
                onClick={() => {
                    handleTogglePlay(item.audio);
                    handleOpenModal(globalIndex);
                }}
                className={`w-[50px] cursor-pointer h-[50px] rounded-full flex justify-center items-center
                    ${playingUrl === item.audio && isPlaying
                    ? "border border-[#E7F056]"
                    : "border border-black"}`}
                aria-label="Play or pause"
            >
                {playingUrl === item.audio && isPlaying
                    ? <CiPause1 className="text-[#E7F056] text-2xl"/>
                    : <FaPlay className="text-black text-2xl"/>}
            </button>

            {/* price */}
            <button className={`w-[112px] cursor-pointer rounded-2xl text-lg py-1
                          ${playingUrl === item.audio && isPlaying
                ? "bg-[#E7F056] text-black"
                : "bg-black text-white"}`}>
                {item.price}
            </button>
        </div>
    );

    return (
        <>
            <MaxWidth>
                <div style={{fontFamily: "Favorit"}} className=" mx-auto">
                    <div className="border border-black"/>
                    <h2 className="mt-7 text-2xl lg:text-4xl font-semibold headerColor">Top 10 Vocals</h2>

                    {/* ---------- two fixed vertical columns ---------- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 w-[100%]  ">
                        {/* left column (1-5) */}
                        <div className="flex flex-col">{leftItems.map((item, i) => renderCard(item, i))}</div>

                        {/* right column (6-10) */}
                        <div className="flex flex-col mt-4 md:mt-0">
                            {rightItems.map((item, i) => renderCard(item, i + midpoint))}
                        </div>
                    </div>

                    {/* see-all / see-less controls */}
                    {audioData.length > 10 && (
                        <div className="flex justify-center mb-4 mt-10">
                            {visibleData < audioData.length ? (
                                <button
                                    onClick={() => setVisibleData(prev => Math.min(prev + 10, audioData.length))}
                                    className="bg-black border border-white cursor-pointer text-white w-[194px] py-2 rounded-2xl lg:text-lg"
                                >
                                    SEE ALL
                                </button>
                            ) : (
                                <button
                                    onClick={() => setVisibleData(10)}
                                    className="bg-black border border-white text-white w-[194px] py-2 rounded-2xl cursor-pointer lg:text-lg"
                                >
                                    SEE LESS
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* modal player */}
                {showModal && currentIndex !== null && (
                    <MusickPlayer
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        currentTrack={audioData[currentIndex]}
                        nextTrack={nextTrack}
                        prevTrack={prevTrack}
                    />
                )}
            </MaxWidth>
        </>
    );
};

export default TopTenVocal;
