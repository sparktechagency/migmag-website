import React from "react";
import Image from "next/image";

type Review = {
    name: string;
    role: string;
    image: string;
    review: string;
};

const reviews: Review[] = [
    {
        name: "Mabelle",
        role: "Singer at Vocalfy",
        image: "/images/artist-library/artist/artist-1.png",
        review:
            "Vocalfy gives me the opportunity to express myself. I’m involved in awesome projects and sing on music made by incredible producers. I love their concept of keeping everything so simple.",
    },
    {
        name: "Finn Schaller",
        role: "Producer at Vocalfy",
        image: "/images/artist-library/artist/artist-2.png",
        review:
            "I produce every once in a while songs for Vocalfy in my spare time. Always great communication and clear instructions for my projects! Vocalfy also gives me the freedom to create something unique.",
    },
    {
        name: "Jon",
        role: "Lyrics at Vocalfy",
        image: "/images/artist-library/artist/artist-3.png",
        review:
            "I feel like I’m in a very good company. I really enjoy working together with Vocalfy. Time is valuable, so they removed all unnecessary steps for artists so they can fully focus on what they do best: singing, writing, producing music, etc.",
    },
];

const ArtistSlider: React.FC = () => {
    return (
        <div
            style={{ fontFamily: "Favorit" }}
            className="max-w-[1588px]  lg:mt-24 lg:mb-28 mx-auto px-4"
        >
            <div className="lg:py-16 ">
                <h2 className="lg:text-4xl text-2xl font-bold mb-6 lg:mb-12">Reviews from artists</h2>

                {reviews.map((review, index) => {
                    const isRight = index % 2 === 1;

                    return (
                        <div
                            key={review.name}
                            className={`flex items-start lg:gap-6 gap-3 mb-6 lg:mb-12 ${
                                isRight ? "justify-end text-right" : "text-left"
                            }`}
                        >
                            {/* Avatar left */}
                            {!isRight && (
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover"
                                />
                            )}

                            {/* Text block */}
                            <div className="max-w-3xl">
                                <p className=" text-lg mb-2">{review.review}</p>
                                <div className={`${isRight ? "flex justify-end" : ""}`}>
                                    <div>
                                        <h3 className="font-semibold text-lg text-black">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm ">{review.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Avatar right */}
                            {isRight && (
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full object-cover"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ArtistSlider;
