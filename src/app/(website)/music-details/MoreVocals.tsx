'use client';

import MaxWidth from '@/components/max-width/MaxWidth';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

type VocalTrack = {
    title: string;
    artist: string;
    image: string;
    genre: string;
    bpm: number;
    key: string;
    price: number;
};

const vocals: VocalTrack[] = [
    {
        title: "Need Your Lovin'",
        artist: 'Elianne',
        image: '/images/artist-library/artist/artist-1.png',
        genre: 'House',
        bpm: 124,
        key: 'G#min',
        price: 34,
    },
    {
        title: 'Tell Me',
        artist: 'Gulsah',
        image: '/images/artist-library/artist/artist-2.png',
        genre: 'House',
        bpm: 128,
        key: 'C#maj',
        price: 34,
    },
    {
        title: 'Never Looking Back',
        artist: 'Damian',
        image: '/images/artist-library/artist/artist-3.png',
        genre: 'Progressive House',
        bpm: 127,
        key: 'Amaj',
        price: 34,
    },
];

const MoreVocals = () => {
    return (
        <MaxWidth>
            <div className="bg-white rounded-md shadow-sm p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-md font-semibold">More vocals</h2>
                    <button className="text-blue-600 text-sm font-medium hover:underline">SEE ALL</button>
                </div>

                {/* Track List */}
                <div className="space-y-2">
                    {vocals.map((track, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-50 px-2 py-3 rounded-lg transition"
                        >
                            {/* Left: Image + Play + Info */}
                            <div className="flex items-center gap-5 md:w-1/3">
                                {/* Image */}
                                <div className="w-20 h-20 rounded overflow-hidden">
                                    <Image
                                        src={track.image}
                                        alt={track.title}
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full rounded"
                                    />
                                </div>

                                {/* Play Button */}
                                <FaPlay size={28} className="text-gray-800 cursor-pointer " />

                                {/* Info */}
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{track.title}</p>
                                    <p className="text-xs text-gray-500">{track.artist}</p>
                                </div>
                            </div>

                            {/* Center: Genre, BPM, Key */}
                            <div className="hidden md:flex items-center justify-center gap-6 text-xs text-gray-500 md:w-1/3">
                                <p>{track.genre}</p>
                                <p>{track.bpm} BPM</p>
                                <p>{track.key}</p>
                            </div>

                            {/* Right: Price Button */}
                            <div className="mt-2 md:mt-0 md:w-1/3 flex justify-end">
                                <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-blue-700">
                                    ${track.price}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    );
};

export default MoreVocals;
