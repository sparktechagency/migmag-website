"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import {FaArrowRight} from 'react-icons/fa';

const ArtistList: React.FC = () => {
    const [visibleData, setVisibleData] = useState<number>(6)

    interface SingerInterface {
        image: string;
        name: string;
        singer: string;
        genre: string
    }

    const singerData: SingerInterface[] = [
        {
            image: "/images/home-page/artist/singer-3.png",
            name: "Blinding Lights",
            singer: "The Weeknd",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-4.png",

            name: "Shape of You",
            singer: "Ed Sheeran",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-5.png",
            name: "Levitating",
            singer: "Dua Lipa",
            genre: "Disco-Pop"
        },
        {
            image: "/images/home-page/artist/singer-6.png",
            name: "Bad Guy",
            singer: "Billie Eilish",
            genre: "Electropop"
        },
        {
            image: "/images/home-page/artist/singer-1.png",
            name: "Lose Yourself",
            singer: "Eminem",
            genre: "Hip-Hop"
        },
        {
            image: "/images/home-page/artist/singer-2.png",
            name: "Peaches",
            singer: "Justin Bieber",
            genre: "R&B"
        },
        {
            image: "/images/home-page/artist/singer-3.png",
            name: "Stay",
            singer: "The Kid LAROI & Justin Bieber",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-4.png",
            name: "Uptown Funk",
            singer: "Mark Ronson ft. Bruno Mars",
            genre: "Funk"
        },
        {
            image: "/images/home-page/artist/singer-5.png",
            name: "Thinking Out Loud",
            singer: "Ed Sheeran",
            genre: "Soul"
        },
        {
            image: "/images/home-page/artist/singer-6.png",
            name: "Happier Than Ever",
            singer: "Billie Eilish",
            genre: "Alternative"
        }
    ]
    return (
        <div style={{fontFamily: 'Favorit'}}
             className="bg-[url('/images/home-page/artist/artistBgImg.png')] bg-no-repeat bg-cover bg-center px-4  w-full">
            <div className=' max-w-[1539px]  pb-2  mx-auto  '>
                <h1 className="text-white text-2xl lg:text-4xl font-semibold lg:pt-9 pt-3 mx-auto ">Top Artists</h1>
                <div
                    className=' lg:my-10 my-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1  flex-col mx-auto lg:flex-row items-center justify-between gap-3 lg:gap-7     '>
                    {
                        singerData.slice(0, visibleData).map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`bg-[#c5c1bf] p-2 rounded-lg   `}
                                >
                                    <Link href={"/artist-library"}>

                                        <Image
                                            src={item.image}
                                            width={213}
                                            height={163}
                                            alt={item.name}
                                            className="object-cover mx-auto w-full "
                                        />
                                        <div className='mt-2'>
                                            <h1 className=' lg:text-xl leading-6 text-[#000000] '>
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
                <div style={{fontFamily: 'Favorit'}} className='  '>
                    <div className="flex flex-row justify-center items-center space-y-4 mb-10">
                        <Link href={"/artist-library"}>
                            <button
                                className="border border-white font-thin mt-3 w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer"
                            >
                                SEE ALL
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistList