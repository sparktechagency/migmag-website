"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Review = {
    avatar: string;
};

const reviews: Review[] = [
    { avatar: "/images/affiliates/avatar/avatar-1.png" },
    { avatar: "/images/affiliates/avatar/avatar-2.png" },
    { avatar: "/images/affiliates/avatar/avatar-3.png" },
    { avatar: "/images/affiliates/avatar/avatar-4.png" },
    { avatar: "/images/affiliates/avatar/avatar-5.png" },
    { avatar: "/images/affiliates/avatar/avatar-6.png" },
    { avatar: "/images/affiliates/avatar/avatar-7.png" },
];

const ReviewSlider : React.FC = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 480px)": {
                slides: { perView: 3, spacing: 16 },
            },
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 24 },
            },
        },
    });

    return (
        <div  className="max-w-7xl mx-auto px-4 lg:mt-14 mt-7 " style={{ fontFamily: "Favorit" }}>
            <div className=" text-center">
                <h1 className=" lg:text-lg text-sm font-bold">Join 100+ Individuals and Companies that already promote Vocalfy</h1>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex justify-center items-center  p-6"
                    >
                        <Image
                            src={review.avatar}
                            alt={`Reviewer ${index + 1}`}
                            width={120}
                            height={120}
                            className="rounded-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSlider;
