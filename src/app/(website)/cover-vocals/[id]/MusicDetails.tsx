'use client';

import React, {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import {
    FaHeart,
    FaPlay,
    FaPause,
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaRegCopy
} from 'react-icons/fa';
import {BsShare} from 'react-icons/bs';

const MusicDetails: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com';

    // Toggle play/pause
    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Update progress bar
    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            setProgress(progressPercent);
        }
    };

    // Reset play state on audio end
    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
    };
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showModal]);

    return (
        <>
            <div style={{fontFamily: "Favorit"}}
                 className="flex flex-col md:flex-row items-start gap-6 my-8 p-6 bg-white rounded-lg shadow-md ">
                {/* Left: Image */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/artist-library/artist/artist-1.png"
                        alt="Yours Tonight Cover"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex-1 w-full">
                    {/* Top section */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className=" lg:text-4xl text-2xl font-bold ">Yours Tonight</h2>
                            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-700">
                                <span className="font-medium">Sadie</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">House</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">124 BPM</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">Bmaj</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">Non-Exclusive</span>
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">✔ Human–Made</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center text-gray-500 text-xl mt-1">
                            <FaHeart className="cursor-pointer"/>
                            <BsShare className="hover:text-gray-700 cursor-pointer" onClick={() => setShowModal(true)}/>
                        </div>
                    </div>

                    {/* Audio player */}
                    <div className="flex items-center mt-4 gap-3">
                        <button
                            className="text-white cursor-pointer bg-black rounded-full w-10 h-10 flex items-center justify-center"
                            onClick={handlePlayPause}
                        >
                            {isPlaying ? <FaPause/> : <FaPlay/>}
                        </button>
                        <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-black transition-all duration-200"
                                style={{width: `${progress}%`}}
                            />
                        </div>
                    </div>
                    <audio
                        ref={audioRef}
                        src="/images/audio/audio-1.mp3"
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleEnded}
                    />

                    {/* Options */}
                    <div className="mt-4 flex items-center gap-2 text-sm textColor">
                        <input type="checkbox" id="stems" className="mr-1 cursor-pointer "/>
                        <label className={` textColor cursor-pointer `} htmlFor="stems">Add stems & midi files +$15</label>
                    </div>

                    {/* Price */}
                    <div className="mt-4 lg:text-xl text-lg font-semibold ">$34</div>

                    {/* Includes */}
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                        <span className="text-sm textColor ">Includes</span>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              WET Vocals
            </span>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              3x DRY Vocals Takes
            </span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex  flex-wrap gap-3">
                        <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded font-medium">
                            Buy Now & Download
                        </button>
                        <button
                            className="border cursor-pointer border-blue-600 text-blue-600 px-5 py-2 rounded font-medium">
                            Test Vocal
                        </button>
                        <button
                            className="border cursor-pointer border-blue-600 text-blue-600 px-5 py-2 rounded font-medium">
                            Add To Cart
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-xs text-gray-400 mt-3">
                        *The vocal has a limited supply and the offer can end at anytime
                    </p>
                    <p className="text-xs textColor mt-1">
                        <span className="inline-block textColor mr-1">✅</span>Secure Checkout with 30 Day Money Back
                        Guarantee<br/>
                        <a href="/refund-policy" className="headerColor underline">Refund Policy</a>
                    </p>
                </div>
            </div>

            {/* Share Modal */}
            {showModal && (
                <div style={{fontFamily: "Favorit"}}
                     className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center relative">
                        <button onClick={() => setShowModal(false)}
                                className="absolute cursor-pointer top-2 right-4 text-gray-600 text-xl">&times;</button>
                        <h3 className="text-xl font-semibold mb-4">Share this track</h3>
                        <div className="flex justify-center gap-4 text-2xl text-white mb-4">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 p-3 rounded-full"
                            >
                                <FaFacebook/>
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-400 p-3 rounded-full"
                            >
                                <FaTwitter/>
                            </a>
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 p-3 rounded-full"
                            >
                                <FaWhatsapp/>
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                type="text"
                                value={shareUrl}
                                readOnly
                                className="w-full px-3 py-2 border rounded text-sm"
                            />
                            <button
                                onClick={handleCopy}
                                className="bg-gray-200 hover:bg-gray-300 px-3 py-2 cursor-pointer rounded"
                            >
                                <FaRegCopy/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MusicDetails;
