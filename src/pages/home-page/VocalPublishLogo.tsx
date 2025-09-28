// components/VocalPublishLogo.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import MaxWidth from "@/components/max-width/MaxWidth";
import { GrNext, GrPrevious } from 'react-icons/gr';

const VocalPublishLogo: React.FC = () => {

    const images = [
        {
            image: "/update-image/sponser-logo/logo-1.png"
        },
        {
            image: "/update-image/sponser-logo/sponser-3.png"
        },
        {
            image: "/update-image/sponser-logo/sponser-2.png"
        },
        {
            image: "/update-image/sponser-logo/sponser-1.png"
        },
        {
            image: "/update-image/sponser-logo/sponser-4.png"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width < 480) {
                setVisibleSlides(2); // Extra small devices
            } else if (width >= 480 && width < 768) {
                setVisibleSlides(2); // Small devices
            } else if (width >= 768 && width < 1024) {
                setVisibleSlides(2); // Medium devices
            } else if (width >= 1024 && width < 1280) {
                setVisibleSlides(3); // Large devices
            } else {
                setVisibleSlides(3); // XL devices
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = images.length - visibleSlides;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev < maxIndex ? prev + 1 : 0 // Loop back to start
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    // Auto slide every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // 1 second
        return () => clearInterval(interval);
    }, []);

    return (
        <MaxWidth>
            <div className=" hidden  md:block   ">
                <h1 className="text-center headerColor lg:text-4xl text-2xl font-semibold">
                    {/*TuneM Vocals Featured In*/}
                </h1>
                <div className="flex md:flex-row flex-col   justify-between items-center gap-4 mx-auto mt-4">
                    <div>
                        <Image
                            src="/update-image/sponser-logo/logo-1.png"
                            alt="logo"
                            width={130}
                            height={30}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-1.png"
                            alt="logo"
                            width={200}
                            height={90}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-3.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-2.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover w-36 "
                        />
                    </div>

                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-4.png"
                            alt="logo"
                            width={120}
                            height={70}
                            className="object-cover w-24 "
                        />
                    </div>
                </div>
            </div>

            {/* slider */}

            <div className="relative w-full block md:hidden my-6 ">
                {/* slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
                    >
                        {images.map((item, i) => (
                            <div
                                key={i}
                                className="px-3"
                                style={{ minWidth: `${100 / visibleSlides}%` }}
                            >
                                <div className="lg:p-6 h-full flex flex-col items-center lg:gap-4">
                                    <Image
                                        src={item.image}
                                        alt="image"
                                        width={130}
                                        height={30}
                                        className="object-cover w-20 h-20  "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* arrows */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous"
                    className="absolute cursor-pointer left-0 top-[45%] -translate-y-1/2 p-2 disabled:opacity-50"
                >
                    <GrPrevious size={20} className="font-bold" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next"
                    className="absolute right-0 top-[45%] cursor-pointer -translate-y-1/2 p-2 disabled:opacity-50"
                >
                    <GrNext size={20} className="font-bold" />
                </button>
            </div>


        </MaxWidth>
    );
};

export default VocalPublishLogo;
