'use client';

import { useEffect, useState } from 'react';
import { FaPlay, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useWishListQuery } from '@/redux/api/authApi/authApi';
import { imgUrl } from '@/utility/img/imgUrl';
import { MusickPlayer } from '@/components/musick-player/MusickPlayer';

// License Badge Component
const LicenseBadge = ({ type }: { type: string }) => {
    const colorMap = {
        PREMIUM: 'bg-cyan-500 text-white px-6 py-2',
        'NON-EXCLUSIVE': 'bg-gray-600 text-white px-6 py-2',
        EXCLUSIVE: 'bg-lime-500 text-black px-6 py-2',
    };

    return (
        <span className={`text-xs rounded-full font-semibold ${colorMap[type] || 'bg-gray-400 text-white px-6 py-2'}`}>
      {type}
    </span>
    );
};

const WishListPage: React.FC = () => {
    const router = useRouter();
    const { data } = useWishListQuery(undefined);
    const [tracks, setTracks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    useEffect(() => {
        if (data?.data?.data) {
            setTracks(data.data.data);
        }
    }, [data]);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    async function downloadAudio(url: string, title: string = 'audio') {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `${title}.mp3`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download failed:', error);
        }
    }

    return (
        <div className="">
            <div className="text-white">
                {/* Large screen view */}
                <div className="space-y-4 hidden xl:block">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-12 items-center gap-4 p-4 rounded-md shadow ${
                                index % 2 === 0 ? 'bg-black' : 'bg-gray-800'
                            }`}
                        >
                            {/* Image + Play */}
                            <div className="relative col-span-1 mt-6 w-[93px] h-[91px]">
                                <Image
                                    src={`${imgUrl}/${track?.song?.song_poster}`}
                                    alt={track?.song?.title}
                                    className="object-cover rounded-md w-full -mt-5 h-full"
                                    width={93}
                                    height={91}
                                />
                                <button
                                    onClick={() => handleOpenModal(index)}
                                    className="absolute cursor-pointer top-0 left-0 w-12 h-12 mt-2 ml-6 rounded-full bg-opacity-40 border border-[#E7F056] hover:bg-opacity-60 flex items-center justify-center transition"
                                >
                                    <FaPlay className="text-[#E7F056]" />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="text-left col-span-2 font-bold text-base">{track?.song?.title}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.artist?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.genre?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.bpm} BPM</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.key?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.gender}</div>
                            <div className="text-left col-span-1 text-base">
                                <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 19.0004L8.55 17.7004C6.86667 16.1837 5.475 14.8754 4.375 13.7754C3.275 12.6754 2.4 11.6879 1.75 10.8129C1.1 9.93789 0.645833 9.13372 0.3875 8.40039C0.129167 7.66706 0 6.91706 0 6.15039C0 4.58372 0.525 3.27539 1.575 2.22539C2.625 1.17539 3.93333 0.650391 5.5 0.650391C6.36667 0.650391 7.19167 0.833724 7.975 1.20039C8.75833 1.56706 9.43333 2.08372 10 2.75039C10.5667 2.08372 11.2417 1.56706 12.025 1.20039C12.8083 0.833724 13.6333 0.650391 14.5 0.650391C16.0667 0.650391 17.375 1.17539 18.425 2.22539C19.475 3.27539 20 4.58372 20 6.15039C20 6.91706 19.8708 7.66706 19.6125 8.40039C19.3542 9.13372 18.9 9.93789 18.25 10.8129C17.6 11.6879 16.725 12.6754 15.625 13.7754C14.525 14.8754 13.1333 16.1837 11.45 17.7004L10 19.0004Z"
                                        fill="#80BC02"
                                    />
                                </svg>
                            </div>

                            {/* License */}
                            <div className="col-span-2 text-left">
                                <LicenseBadge type={track?.song?.license?.name} />
                            </div>

                            {/* Download */}
                            <div className="col-span-1 flex justify-start">
                                <button
                                    onClick={() =>
                                        downloadAudio(`${imgUrl}/${track?.song?.song}`, track?.song?.title)
                                    }
                                    className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                >
                                    <FaDownload />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small device view */}
                <div className="space-y-4 block xl:hidden">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-md shadow ${index % 2 === 0 ? 'bg-black' : 'bg-gray-800'}`}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={`${imgUrl}/${track?.song?.song_poster}` || '/images/default.jpg'}
                                        alt={track?.song?.title}
                                        className="object-cover rounded-md"
                                        fill
                                    />
                                    <button
                                        onClick={() => handleOpenModal(index)}
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-md"
                                    >
                                        <FaPlay className="text-[#E7F056] w-10 h-10 p-2 border-2 border-amber-300 rounded-full" />
                                    </button>
                                </div>

                                <div className="font-bold text-left">{track?.song?.title}</div>
                                <div className="text-left">{track?.song?.artist?.name}</div>

                                <div className="text-white text-base flex flex-wrap items-center gap-x-8 gap-y-3">
                                    <div>{track?.song?.genre?.name}</div>
                                    <div>{track?.song?.bpm}</div>
                                    <div>{track?.song?.key?.name}</div>
                                    <div>{track?.song?.gender}</div>
                                    <LicenseBadge type={track?.song?.license?.name} />
                                    <button
                                        onClick={() =>
                                            downloadAudio(`${imgUrl}/${track?.song?.song}`, track?.song?.title)
                                        }
                                        className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                    >
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Music Player Modal */}
            {showModal && currentIndex !== null && (
                <MusickPlayer
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    currentTrack={{
                        title: tracks[currentIndex]?.song?.title,
                        name: tracks[currentIndex]?.song?.title,
                        song_poster: tracks[currentIndex]?.song?.song_poster,
                        song: `${imgUrl}/${tracks[currentIndex]?.song?.song}`,
                    }}
                />
            )}
        </div>
    );
};

export default WishListPage;
