import React from 'react';
import Image from "next/image";

const AffiliatesBanner: React.FC = () => {
    return (
        <div style={{fontFamily: "Favorit"}} className="max-w-[1539px] mx-auto ">
            <div>
                <h1 className={`text-center font-bold text-2xl lg:text-5xl `}>
                    Promote Vocalfy
                    <span className={`text-[#0088ff]`}>& Earn Money</span>
                </h1>
            </div>
            <div className="max-w-[1100px] mx-auto flex mt-4 justify-center ">
                {/* Card Component */}
                {[
                    {
                        name: "YouTube",
                        icon: "/images/affiliates/youtube.jpg",
                        reel: "/images/affiliates/youtube-reel.jpg",
                    },
                    {
                        name: "Instagram",
                        icon: "/images/affiliates/instagram.jpg",
                        reel: "/images/affiliates/insta-reel.png",
                    },
                    {
                        name: "TikTok",
                        icon: "/images/affiliates/tiktok.png",
                        reel: "/images/affiliates/tiktok-reel.png",
                    },
                ].map((platform, index) => (
                    <div
                        key={index}
                        className="flex flex-col   bg-white  w-[300px]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={platform.icon}
                                width={50}
                                height={50}
                                alt={platform.name}
                                className="rounded-md object-cover"
                            />
                            <h1 className="text-xl font-semibold">{platform.name}</h1>
                        </div>
                        <Image
                            src={platform.reel}
                            width={240}
                            height={60}
                            alt={`${platform.name} reel`}
                            className=" object-cover rounded-[4px] "
                        />
                    </div>
                ))}
            </div>

            <div className=" mt-5">
                <button
                    className={`block mx-auto lg:mt-12 px-6 py-2 lg:text-lg text-[16px] font-semibold bg-[#000000] text-white rounded-md  `}>JOIN
                    NOW
                </button>
            </div>


            <div>

            </div>

        </div>
    );
};

export default AffiliatesBanner;