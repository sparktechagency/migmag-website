"use client"
import MusickPlayer from '@/components/musick-player/MusickPlayer';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { CiPause1 } from 'react-icons/ci';
import { FaPlay } from 'react-icons/fa';

const TopTenVocal: React.FC = () => {
    interface AudioItem {
        id: number;
        title: string;
        name: string;
        price: string;
        img: string;
        audio: string;

    }
    const [visibleData, setVisibleData] = useState<number>(10);
    const audioData: AudioItem[] = [
        {
            id: 1,
            title: 'Rock Anthem',
            name: 'Bujhina Toh Tai',
            price: '€8',
            img: '/images/home-page/top/top-1.png',
            audio: '/images/audio/audio-1.mp3',
        },
        {
            id: 2,
            title: 'Classic Tune',
            name: 'Tomar Jonno',
            price: '€11',
            img: '/images/home-page/top/top-2.png',
            audio: '/images/audio/audio-2.mp3',
        },
        {
            id: 3,
            title: 'Pop Hit',
            name: 'Ei Mon Tomake',
            price: '€9',
            img: '/images/home-page/top/top-3.png',
            audio: '/images/audio/audio-3.mp3',
        },
        {
            id: 4,
            title: 'Jazz Vibes',
            name: 'Chirokal Tomar',
            price: '€10',
            img: '/images/home-page/top/top-4.png',
            audio: '/images/audio/audio-4.mp3',
        },
        {
            id: 5,
            title: 'Indie Mood',
            name: 'Ekla Pothe',
            price: '€7',
            img: '/images/home-page/top/top-5.png',
            audio: '/images/home-page/audio-5.mp3',
        },
        {
            id: 6,
            title: 'Soul Beats',
            name: 'Alo Chhaya',
            price: '€12',
            img: '/images/home-page/top/top-6.png',
            audio: '/images/home-page/audio-6.mp3',
        },
        {
            id: 7,
            title: 'Acoustic Chill',
            name: 'Mone Pore',
            price: '€9',
            img: '/images/home-page/top/top-7.png',
            audio: '/images/home-page/audio-7.mp3',
        },
        {
            id: 8,
            title: 'EDM Drop',
            name: 'Brishtite Tumi',
            price: '€14',
            img: '/images/home-page/top/top-8.png',
            audio: '/images/home-page/audio-8.mp3',
        },
        {
            id: 9,
            title: 'Lo-Fi Zone',
            name: 'Tumi Nei',
            price: '€6',
            img: '/images/home-page/top/top-9.png',
            audio: '/images/home-page/audio-9.mp3',
        },
        {
            id: 10,
            title: 'Fusion Funk',
            name: 'Bondhu Hoye Thako',
            price: '€10',
            img: '/images/home-page/top/top-10.png',
            audio: '/images/home-page/audio-10.mp3',
        },
    ];
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);



    const handleTogglePlay = (url: string) => {
        if (playingUrl === url && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            const audio = new Audio(url);
            audioRef.current = audio;
            audio.play();
            setPlayingUrl(url);
            setIsPlaying(true);
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
        <>
            <div style={{ fontFamily: 'Favorit' }} className="max-w-[1539px] mx-auto">
                <div className="border border-black"></div>
                <div className="mt-7">

                </div>
                <div className=' xl:hidden block ' >
                    <p className='text-[#000000] text-lg ' >OUR TOP 10 VOCALS</p>
                </div>
                <div className=' flex flex-row  xl:gap-13 justify-between      ' >
                    <div className="xl:block hidden mt-[10.5%]  w-[2%]  ">
                        <p className="-rotate-90 text-[#000000] text-lg  whitespace-nowrap">
                            OUR
                            TOP
                            10
                            VOCALS
                        </p>
                    </div>

                    <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-x-3 order w-[95%]  flex-1  ">
                        {audioData.slice(0, visibleData).map((item, i) => (
                            <div
                                key={item.id}
                                className={`:h-32 flex flex-col gap-y-2 lg:py-2  py-3 lg:flex-row items-center px-10 justify-between border 
                                -black my-2 rounded-lg max-w-[713px] transition-all duration-300 cursor-pointer
                            ${playingUrl === item.audio && isPlaying
                                        ? 'bg-black'
                                        : i % 2 === 0
                                            ? 'bg-[#F1F1F1]  '
                                            : 'bg-[#FFFFFF]'}
                        `}
                            >
                                <h1 className={`text-3xl ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '} `}>{i + 1}</h1>
                                <Image
                                    src={item.img}
                                    width={93}
                                    height={91}
                                    alt={item.title}
                                    className="object-cover rounded-xl"
                                />
                                <div className=" flex flex-col gap-x-1">
                                    <h3 className={`text-lg font-bold  leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-lg font-bold flex flex-row gap-x-2.5  leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '}`}>
                                        Luna <span className={`text-[#E7F056] text-lg font-bold leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '} `}>Exclusive</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => { handleOpenModal(i) }}
                                    className={`w-[50px] h-[50px] rounded-full cursor-pointer   flex  justify-center items-center self-center1 ${playingUrl === item.audio && isPlaying ? ' border border-[#E7F056] ' : ' border border-black '} `}
                                >
                                    {playingUrl === item.audio && isPlaying ? (
                                        <CiPause1 className="text-[#E7F056] text-2xl cursor-pointer " />
                                    ) : (
                                        <FaPlay className=' cursor-pointer ' />
                                    )}
                                </button>
                                <div>
                                    <button className={`w-[112px]  rounded-2xl  text-lg py-1 ${playingUrl === item.audio && isPlaying ? ' text-black bg-[#E7F056] ' : 'bg-black text-white '} `}>
                                        {item.price}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className=' flex lg:flex-row flex-col mx-auto justify-between items-center mt-5 ' >
                    <div className=' max-w-[562px] ' >
                        <h1 className=' text-black font-thin text-lg leading-6 mb-6 lg:mb-[69px] mx-auto ' >Our bi-weekly top-10 list features the popular artists coming up in our network, great for club nights and gigs to artist signings.</h1>
                    </div>
                    <div>

                        {audioData.length > 10 && (
                            <div className="flex flex-col items-center space-y-4 mb-10">
                                {visibleData < audioData.length && (
                                    <button
                                        onClick={() => setVisibleData((prev) => prev + 10)}
                                        className="bg-black border border-white font-thin w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer"
                                    >
                                        SEE ALL
                                    </button>
                                )}

                                {visibleData > 10 && (
                                    <button
                                        onClick={() => setVisibleData(10)}
                                        className="bg-black border border-white font-thin w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer"
                                    >
                                        SEE LESS
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
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
        </>

    );
};

export default TopTenVocal;