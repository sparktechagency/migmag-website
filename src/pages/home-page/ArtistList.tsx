"use client";

import React, { useEffect, useState } from "react";
import { imgUrl } from "@/utility/img/imgUrl";
import Image from "next/image";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";
import axios from "axios";
import { Artist } from "@/utility/type/websiteApiType";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ArtistList: React.FC = () => {
    const [topArtists, setTopArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await axios.get(`${url}/artist`);
                const artists: Artist[] = response.data.data.data.slice(0, 6);
                setTopArtists(artists);
            } catch (err) {
                console.error(err);
                setError("Failed to load artists");
            } finally {
                setLoading(false);
            }
        };

        fetchArtists();
    }, [url]);

    // Auto slide for mobile
    useEffect(() => {
        if (topArtists.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % topArtists.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [topArtists]);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? topArtists.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % topArtists.length);
    };

    if (loading)
        return <div className="text-center py-10 text-white">Loading...</div>;
    if (error)
        return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="bg-[url('/images/home-page/artist/artistBgImg.png')] bg-no-repeat bg-cover bg-center px-4 w-full">
            <MaxWidth>
                <div className="pb-2 mx-auto">
                    <h1 className="text-black text-2xl lg:text-4xl font-semibold lg:pt-9 pt-3 mx-auto">
                        Top Artists
                    </h1>

                    {/* DESKTOP GRID */}
                    <div className="hidden md:grid lg:my-10 my-4 lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-3 lg:gap-7">
                        {topArtists.map((artist: Artist) => (
                            <div
                                key={artist.id}
                                className="bg-[#c5c1bf] p-2 rounded-lg h-64"
                            >
                                <Link href="/artist-list">
                                    <Image
                                        src={
                                            artist.profile.startsWith("http")
                                                ? artist.profile
                                                : `${imgUrl}/${artist.profile}`
                                        }
                                        width={213}
                                        height={163}
                                        alt={artist.name}
                                        className="h-40 mx-auto w-full object-cover rounded-md"
                                    />
                                    <div className="mt-2">
                                        <h1 className="headerColor lg:text-xl leading-6">
                                            {artist.name}
                                        </h1>
                                        <h1 className="text-[15px] leading-6 text-[#504E4E] my-0.5">
                                            Singer - {artist.singer}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE SLIDER */}
                    {/* MOBILE SLIDER (2 cards visible) */}
                    <div className="relative md:hidden w-full overflow-hidden mt-6">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / 2)}%)`, // move half width per step
                                width: `${(topArtists.length * 100) / 2}%`, // adjust width since 2 per view
                            }}
                        >
                            {topArtists.map((artist: Artist) => (
                                <div key={artist.id} className="w-1/2 flex-shrink-0 px-2">
                                    <div className="bg-[#c5c1bf] p-2 rounded-lg h-64">
                                        <Link href="/artist-list">
                                            <Image
                                                src={
                                                    artist.profile.startsWith("http")
                                                        ? artist.profile
                                                        : `${imgUrl}/${artist.profile}`
                                                }
                                                width={2000}
                                                height={163}
                                                alt={artist.name}
                                                className="h-40 mx-auto w-full object-cover rounded-md"
                                            />
                                            <div className="mt-2">
                                                <h1 className="headerColor text-lg leading-6">
                                                    {artist.name}
                                                </h1>
                                                <h1 className="text-[15px] leading-6 text-[#504E4E] my-0.5">
                                                    Singer - {artist.singer}
                                                </h1>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* SEE MORE BUTTON */}
                    <div className="flex flex-row justify-center items-center space-y-4 mb-10">
                        <Link href="/artist-list">
                            <button className="border border-white font-thin mt-3 w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer">
                                SEE MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default ArtistList;
