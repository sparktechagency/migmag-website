import React from 'react';
import Image from "next/image";
import {Info} from "lucide-react";

const MusickDetails = () => {
    return (
        <div>
            <div className="w-full max-w-3xl mx-auto bg-white rounded-md p-4 shadow-md">
                <div className="flex gap-4">
                    {/* Left - Image */}
                    <div className="relative w-36 h-36 rounded-md overflow-hidden">
                        <Image
                            src="/cover.jpg" // Replace with actual image
                            alt="Open Your Eyes"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">Open Your Eyes</h2>
                        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                            <span className="font-medium">Ella</span>
                            <span>•</span>
                            <span>House</span>
                            <span>•</span>
                            <span>122 BPM</span>
                            <span>•</span>
                            <span>C#min</span>
                            <span>•</span>
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Non-Exclusive</span>
                            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
              Human-Made
            </span>
                        </div>

                        {/* Progress Bar (Static) */}
                        <div className="bg-gray-200 rounded h-1 my-4 w-full">
                            <div className="bg-gray-500 h-1 w-[10%] rounded"></div>
                        </div>

                        {/* Info Text */}
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Info className="w-4 h-4"/>
                            <span>Only available to subscribed users</span>
                        </div>

                        {/* Credit Section */}
                        <div className="mt-2">
                            <p className="text-black font-semibold">1 Credit</p>
                            <p className="text-sm text-gray-500">Includes</p>
                            <div className="flex gap-2 mt-1">
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                WET Vocals
              </span>
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                3x DRY Vocals Takes
              </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex gap-4">
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
                                Download Now (1 Credit)
                            </button>
                            <button
                                className="border border-blue-600 text-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-50">
                                Test Vocal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusickDetails;