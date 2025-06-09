"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import {GrNext, GrPrevious} from "react-icons/gr";

type Review = {
    name: string;
    avatar: string;
    role: string
};

const reviews: Review[] = [
    {
        name: "Andrew Tao",
        avatar: "/images/artist-library/artist/artist-1.png",
        role: "Music Producer"
    },
    {
        name: "Lukas Hofmann",
        avatar: "/images/artist-library/artist/artist-2.png",
        role: "DJ"
    },
    {
        name: "Augusto Chiarle",
        avatar: "/images/artist-library/artist/artist-3.png",
        role: "Sound Engineer"
    },
    {
        name: "Emily Carter",
        avatar: "/images/artist-library/artist/artist-4.png",
        role: "Vocalist"
    },
    {
        name: "Sofia Nguyen",
        avatar: "/images/artist-library/artist/artist-5.png",
        role: "Composer"
    },
    {
        name: "James Liu",
        avatar: "/images/artist-library/artist/artist-6.png",
        role: "Music Director"
    },
    {
        name: "Isabella Rossi",
        avatar: "/images/artist-library/artist/artist-7.png",
        role: "Singer-Songwriter"
    },

];

const UseSound: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 480) {
                // Extra small devices (mobile phones)
                setVisibleSlides(1);
            } else if (width >= 480 && width < 768) {
                // Small devices (large phones)
                setVisibleSlides(1);
            } else if (width >= 768 && width < 1024) {
                // Medium devices (tablets)
                setVisibleSlides(2);
            } else if (width >= 1024 && width < 1280) {
                // Large devices (small laptops)
                setVisibleSlides(3);
            } else {
                // Extra large devices (desktops and up)
                setVisibleSlides(5);
            }
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = reviews.length - visibleSlides;
    const nextSlide = () => currentIndex < maxIndex && setCurrentIndex(i => i + 1);
    const prevSlide = () => currentIndex > 0 && setCurrentIndex(i => i - 1);
    const totalBullets = maxIndex + 1;

    return (
        <div style={{fontFamily: "Favorit"}} className="relative max-w-[1580px] mx-auto py-12 px-4">
            <div className="mb-8 ">
                <h1 className="text-2xl lg:text-4xl font-bold">Who uses our sounds</h1>
            </div>

            {/* slider */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`}}
                >
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className="px-3"
                            style={{minWidth: `${100 / visibleSlides}%`}}
                        >
                            <div className="p-6 h-full flex flex-col items-center gap-4">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={208}
                                    height={208}
                                    className="rounded-full w-[208px] h-[208px] object-cover"
                                />
                                <p className="font-semibold lg:text-xl text-sm">{item.name}</p>
                                <p className=" lg:text-lg text-sm">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* arrows */}
            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Previous"
                className="absolute cursor-pointer left-0 top-[50%] -translate-y-1/2  p-2 disabled:opacity-50"
            >
                <GrPrevious size={30} className={`font-bold`}/>
            </button>
            <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                aria-label="Next"
                className="absolute right-0 top-[50%] cursor-pointer -translate-y-1/2  p-2 disabled:opacity-50"
            >
                <GrNext size={30} className={`font-bold`}/>
            </button>

            {/* bullets */}
            <div className="flex justify-center mt-6 space-x-3">
                {Array.from({length: totalBullets}).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${
                            i === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default UseSound;
