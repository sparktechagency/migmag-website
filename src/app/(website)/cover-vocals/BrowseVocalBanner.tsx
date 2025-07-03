'use client';

import Image from 'next/image';
import React from 'react';
import MaxWidth from '@/components/max-width/MaxWidth';

const BrowseVocalBanner: React.FC = () => {
    return (
        <MaxWidth>
            <div className="lg:py-10">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Left Side */}
                    <div className="text-white w-full lg:w-1/2">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight lg:leading-[4.5rem] mb-6">
                            Cover Songs
                        </h1>
                        <p className="text-lg lg:text-xl font-medium leading-relaxed text-white/90 mb-8 max-w-lg">
                            Pro cover vocals, ready to use. Secure your license and release with confidence.
                        </p>
                        <div className="rounded-lg overflow-hidden shadow-lg flex flex-row gap-x-5 ">
                            <Image
                                src="/update-image/cover-vocal/icon/icon-1.png"
                                width={77}
                                height={27}
                                alt="Sub Banner"
                                className="w-28 h-auto object-cover"
                                priority
                            />
                            <Image
                                src="/update-image/cover-vocal/icon/icon-2.png"
                                width={77}
                                height={27}
                                alt="Sub Banner"
                                className="w-40 h-auto object-cover"
                                priority
                            />
                            <Image
                                src="/update-image/cover-vocal/icon/icon-3.png"
                                width={77}
                                height={27}
                                alt="Sub Banner"
                                className="w-36 h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/update-image/cover-vocal/banner/vocalBanner.png"
                            alt="Main Banner"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                    
                </div>
            </div>
        </MaxWidth>
    );
};

export default BrowseVocalBanner;
