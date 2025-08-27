'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MusickPlayer } from '@/components/musick-player/MusickPlayer';
import MaxWidth from '@/components/max-width/MaxWidth';
import { imgUrl } from '@/utility/img/imgUrl';

interface Artist {
    name: string;
}

interface Track {
    id: number;
    title: string;
    artist: Artist;
    song_poster: string;
    song: string;
    price: string;
}

export default function MusicSlider() {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const sliderRef = useRef<HTMLDivElement>(null);
    const [cardsPerView, setCardsPerView] = useState(5);
    const [currentSlide, setCurrentSlide] = useState(0);
    const url = process.env.NEXT_PUBLIC_API_BASE_URL
    useEffect(() => {
        const fetchTrendingVocals = async () => {
            try {
                const res = await fetch(`${url}/latest-trending`);
                const json = await res.json();

                if (json.success) {
                    setTracks(json.data);
                } else {
                    setError('Failed to load data');
                }
            } catch (err) {
                console.error(err);
                setError('Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingVocals();
    }, [url]);

    // Responsive cards per view
    useEffect(() => {
        function updateCardsPerView() {
            const width = window.innerWidth;
            if (width < 340) setCardsPerView(1);
            else if (width < 640) setCardsPerView(2);
            else if (width < 1024) setCardsPerView(3);
            else setCardsPerView(5);
        }

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    // Slide width and max slides
    const slideWidth = 240; // px, card + margin approx
    const maxSlide = Math.max(0, tracks.length - cardsPerView);

    // Scroll to slide
    const scrollToSlide = (slide: number) => {
        if (!sliderRef.current) return;
        const scrollPosition = slide * slideWidth;
        sliderRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
        setCurrentSlide(slide);
    };

    const prevSlide = () => {
        scrollToSlide(Math.max(0, currentSlide - 1));
    };

    const nextSlide = () => {
        scrollToSlide(Math.min(maxSlide, currentSlide + 1));
    };

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };





    return (
        <main className="mt-8">
            <MaxWidth>
                <h1 className="headerColor text-2xl lg:text-4xl font-semibold mx-auto mb-6">
                    Latest Trending Vocals
                </h1>

                {loading && <p className="text-center text-gray-400 mt-6">Loading...</p>}
                {error && <p className="text-center text-red-500 mt-6">{error}</p>}

                <div className="relative">
                    {/* Left arrow */}
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        aria-label="Previous"
                        className={`absolute left-0 cursor-pointer top-[42%]  -translate-y-1/2 z-20 p-2 bg-white bg-opacity-60 rounded-full text-black hover:bg-opacity-90 transition ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                    >
                        <FiChevronLeft size={28} />
                    </button>

                    {/* Slider container */}
                    <div
                        ref={sliderRef}
                        className="overflow-hidden"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex gap-4" style={{ width: `${tracks.length * slideWidth}px` }}>
                            {tracks.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="min-w-[220px] max-w-[220px] flex-shrink-0 cursor-pointer"
                                >
                                    <div className="relative w-full h-[215px] overflow-hidden ">
                                        <Image
                                            src={`${imgUrl}/${item.song_poster}`}
                                            alt={item.title}
                                              width = {500}
                                                                   height = {500}
                                            className="  w-[300px] h-[300px]  "
                                        />
                                        <button
                                            onClick={() => handleOpenModal(index)}
                                            className="w-[50px] h-[50px] rounded-full  bg-black bg-opacity-70 flex justify-center items-center cursor-pointer absolute bottom-4 right-4 z-10"
                                        >
                                            <FiPlay className="text-[#E7F056]" size={24} />
                                        </button>
                                    </div>
                                    <h3 className="lg:text-lg headerColor font-bold mt-3">{item.title}</h3>
                                    <div className="flex gap-x-6">
                                        <p className="textColor lg:text-lg font-bold">{item.artist?.name}</p>
                                        <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>
                                            <p className=" px-1 rounded-lg bg-black text-white lg:text-lg font-bold">{item.price}</p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === maxSlide}
                        aria-label="Next"
                        className={`absolute right-0 cursor-pointer top-[42%]  -translate-y-1/2 z-20 p-2 bg-white bg-opacity-60 rounded-full text-black hover:bg-opacity-90 transition ${currentSlide === maxSlide ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                    >
                        <FiChevronRight size={28} />
                    </button>
                </div>

                <div className="lg:mt-[68px] mt-5">
                    <h1 className=" text-xl textColor text-center px-4 lg:px-0">
                        Updated every Friday with new royalty-free vocals curated for music producers looking to
                        elevate their sound and stand out.
                    </h1>
                </div>

                <div className="mt-4 md:mt-12">
                    <Link href="/vocals">
                        <button className="cursor-pointer block mx-auto border bg-black text-white rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]">
                            BROWSE VOCALS
                        </button>
                    </Link>
                </div>
            </MaxWidth>

            {showModal && currentIndex !== null && (
                <MusickPlayer
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    currentTrack={{
                        id : tracks[currentIndex].id,
                        title: tracks[currentIndex].title,
                        name: tracks[currentIndex].artist.name,
                        song_poster: tracks[currentIndex].song_poster,
                        song: `${imgUrl}/${tracks[currentIndex].song}`,
                    }}
                />
            )}
        </main>
    );
}
