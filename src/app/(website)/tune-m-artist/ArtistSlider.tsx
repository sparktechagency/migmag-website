import React from "react";
import Image from "next/image";
import MaxWidth from "@/components/max-width/MaxWidth";

type Review = {
    name: string;
    role: string;
    image: string;
    review: string;
};

const reviews: Review[] = [
    {
        name: "Jessica",
        role: "Singer & Songwriter at TuneM",
        // image: "/update-image/tuneM-Artist/review/jessica.png",
        image: "/client-demo/artist-1.jpeg",
        review:
            "I don’t have to chase gigs anymore. TuneM brings the work to me, and I just focus on doing what I love — recording vocals. Everything is super clear and easy.",
    },
    {
        name: "Kimberly",
        role: "Vocalist at TuneM",
        // image: "/update-image/tuneM-Artist/review/kimberly.webp",
        image : "/client-demo/formal-1.jpg",
        review:
            "Working with TuneM for over five years has been a steady part of my growth as an artist. It’s opened up a lot of opportunities, and over time, it’s helped me build a career where I can support myself through music",
    },
    {
        name: "Sophianne",
        role: "Songwriter at TuneM",
        // image: "/update-image/tuneM-Artist/review/sophianne.png",
        image : "/client-demo/formal-1.jpg",
        review:
            "TuneM has helped me grow as a songwriter by giving me real opportunities to collaborate with vocalists and producers. It’s been one of the most reliable platforms I’ve worked with, and I’ve been able to steadily build a catalogue that actually gets used.",
    },
];

const ArtistSlider: React.FC = () => {
    return (
        <div className="lg:mt-24 lg:mb-28 mx-auto">
            <MaxWidth>
                <div className="lg:py-16  ">
                    <h2 className="lg:text-4xl text-2xl font-bold mb-6 headerColor lg:mb-12">
                        Our Artists Reviews
                    </h2>

                    {reviews.map((review, index) => {
                        const isRight = index % 2 === 1;

                        return (
                            <div
                                key={review.name}
                                className={`flex items-start lg:gap-6 gap-3 mb-6 lg:mb-12  ${
                                    isRight ? "justify-end text-right" : "text-left"
                                }`}
                            >
                                {/* Avatar left */}
                                <div className={``} >
                                    {!isRight && (
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            width={300}
                                            height={300}
                                            className={` rounded-full  w-20 h-20  `}
                                        />
                                    )}
                                </div>

                                {/* Text block */}
                                <div className="max-w-3xl">
                                    <p className="textColor text-lg mb-2">{review.review}</p>
                                    <div className={`${isRight ? "flex justify-end" : ""}`}>
                                        <div>
                                            <h3 className="font-semibold text-lg headerColor">
                                                {review.name}
                                            </h3>
                                            <p className="text-sm textColor">{review.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={"   "} >
                                    {/* Avatar right */}
                                    {isRight && (
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            width={300}
                                            height={300}
                                            className=" object-bottom rounded-full  w-20 h-20  "
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MaxWidth>
        </div>
    );
};

export default ArtistSlider;
