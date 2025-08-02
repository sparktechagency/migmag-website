"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import {useTopArtistListQuery} from "@/redux/api/home-api/homeApi";
import {imgUrl} from "@/utility/img/imgUrl";

const ArtistList: React.FC = () => {




    const { data} = useTopArtistListQuery();



















    return (
        <div 
             className="bg-[url('/images/home-page/artist/artistBgImg.png')] bg-no-repeat bg-cover bg-center px-4  w-full">
            <MaxWidth>
                <div className='   pb-2  mx-auto  '>
                    <h1 className="text-white text-2xl lg:text-4xl font-semibold lg:pt-9 pt-3 mx-auto ">Top Artists</h1>
                    <div
                        className=' lg:my-10 my-4   grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1  flex-col mx-auto lg:flex-row items-center justify-between gap-3 lg:gap-7     '>
                        {
                            data?.data?.data.slice(0, 6).map((item , i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`bg-[#c5c1bf] p-2 rounded-lg h-64   `}
                                    >
                                        <Link href={"/artist-library"}>

                                            <Image
                                                src={`${imgUrl}/${item.profile}`}
                                                width={213}
                                                height={163}
                                                alt={item.name}
                                                className="  h-40  mx-auto w-full "
                                            />
                                            <div className='mt-2'>
                                                <h1 className=' headerColor lg:text-xl leading-6  '>
                                                    {
                                                        item.name
                                                    }
                                                </h1>
                                                <h1 className=' text-[15px] leading-6 text-[#504E4E] my-0.5 '>
                                                    Singer - {item.singer}
                                                </h1>

                                            </div>
                                        </Link>

                                    </div>
                                );
                            })
                        }
                    </div>
                    <div  className='  '>
                        <div className="flex flex-row justify-center items-center space-y-4 mb-10">
                            <Link href={"/artist-library"}>
                                <button
                                    className="border border-white font-thin mt-3 w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer"
                                >
                                    SEE MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default ArtistList