'use client';

import React, { useEffect, useState } from 'react';
import { imgUrl } from '@/utility/img/imgUrl';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidth from '@/components/max-width/MaxWidth';
import axios from 'axios';
import { Artist } from '@/utility/type/websiteApiType';

const ArtistList: React.FC = () => {
    const [topArtists, setTopArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const url = process.env.NEXT_PUBLIC_API_BASE_URL
    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await axios.get(
                    `${url}/artist`
                );
                // Extract the first 6  safely
                const artists: Artist[] = response.data.data.data.slice(0, 6);
                setTopArtists(artists);
            } catch (err) {
                console.error(err);
                setError('Failed to load artists');
            } finally {
                setLoading(false);
            }
        };

        fetchArtists();
    }, [url]);

    console.log(`top artist is ${topArtists}`)

    if (loading) return <div className="text-center py-10 text-white">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="bg-[url('/images/home-page/artist/artistBgImg.png')] bg-no-repeat bg-cover bg-center px-4 w-full">
            <MaxWidth>
                <div className="pb-2 mx-auto">
                    <h1 className="text-white text-2xl lg:text-4xl font-semibold lg:pt-9 pt-3 mx-auto">
                        Top Artists
                    </h1>

                    <div className="lg:my-10 my-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 flex-col mx-auto lg:flex-row items-center justify-between gap-3 lg:gap-7">
                        {topArtists.map((artist: Artist) => (
                            <div key={artist.id} className="bg-[#c5c1bf] p-2 rounded-lg h-64">
                                <Link href="/artist-library">
                                    <Image
                                        src={artist.profile.startsWith('http') ? artist.profile : `${imgUrl}/${artist.profile}`}
                                        width={213}
                                        height={163}
                                        alt={artist.name}
                                        className="h-40 mx-auto w-full object-cover rounded-md"
                                    />
                                    <div className="mt-2">
                                        <h1 className="headerColor lg:text-xl leading-6">{artist.name}</h1>
                                        <h1 className="text-[15px] leading-6 text-[#504E4E] my-0.5">
                                            Singer - {artist.singer}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row justify-center items-center space-y-4 mb-10">
                        <Link href="/artist-library">
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
