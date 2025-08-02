import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTopArtistListQuery} from "@/redux/api/home-api/homeApi";
import {imgUrl} from "@/utility/img/imgUrl";

const MoreSinger = () => {


    const {data} = useTopArtistListQuery();
    const artistList = data?.data?.data ?? [];


    return (
        <div className={"  "}>
            <div className='px-4  '>

                <div className=' mt-7 '>
                    <p className=' leading-6 textColor text-lg '>*all vocals are royalty free, both
                        non-exclusive
                        and exclusive vocals.</p>
                </div>

                <div className=' flex flex-col lg:flex-row space-y-2.5 justify-between items-center mt-4 '>
                    <p className=' text-3xl font-bold '>More <span className=' headerColor '>Singers</span></p>
                    <Link href={"/artist-library"} className=' '>
                        <button
                            className=' flex cursor-pointer  items-center gap-x-5 rounded-2xl px-2 text-sm py-1.5 border border-black  '>
                            BROWSE SINGERS
                        </button>
                    </Link>
                </div>

                <div
                    className="mt-6   lg:mt-14 grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4">
                    {artistList.map((singer) => (
                        <div

                            key={singer.id}
                            className="cursor-pointer transition-transform duration-300 hover:-translate-y-1  h-88 "
                        >
                            <Link href={`/singer-profile/${singer.id}`}>
                                <div className="w-full max-w-[357px] mx-auto rounded-md p-5 bg-[#222222]">
                                    <Image
                                        src={`${imgUrl}/${singer.profile}`}
                                        width={340}
                                        height={219}
                                        alt={`${singer.name} Image`}
                                        className="w-full  h-52 rounded-md"
                                    />

                                    <div className="mt-4">
                                        <h1 className="text-white text-lg leading-6">{singer.name}</h1>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-[#818080] text-base leading-6">{singer.singer}</p>
                                        <p className="mt-2 text-[#818080] text-base leading-6">
                                            English
                                        </p>
                                        <p className="mt-2 text-[#818080] text-base leading-6">
                                            Male
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MoreSinger;