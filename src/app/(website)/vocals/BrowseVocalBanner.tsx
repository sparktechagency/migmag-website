import Image from 'next/image';
import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner = () => {
    return (
        <div className=" py-16">
            <MaxWidth>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Left Side */}
                    <div className="text-white w-full max-w-2xl">
                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Get Studio Quality Acapellas
                        </h1>
                        <p className="text-lg lg:text-xl font-medium text-gray-200 leading-relaxed">
                            Spark new ideas today with our royalty-free acapellas made by professional vocalists. Used
                            by trusted artists and labels.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full max-w-4xl">
                        <Image
                            src="/update-image/cover-vocal/banner/banner-1.png"
                            width={1000}
                            height={1000}
                            alt="Browse Vocal Banner"
                            className="w-full h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default BrowseVocalBanner;
