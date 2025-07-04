'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
    Info,
    Share2,
    Heart,
    Facebook,
    Twitter,
    MessageCircle,
    Copy,
    X
} from 'lucide-react'

import { FaPlay } from "react-icons/fa6";



const MusickDetails = () => {
    const [showModal, setShowModal] = useState(false)

    const shareUrl =
        typeof window !== 'undefined'
            ? window.location.href
            : 'https://example.com'

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
    }

    return (
        <>
            {/* Main Music Card */}
        <div className="w-full max-w-6xl mx-auto bg-white rounded-md p-4 shadow-md relative">
      {/* Top Right Icons */}
      <div className="absolute top-4 right-4 flex gap-4 text-gray-400 z-10">
        <Heart className="cursor-pointer hover:text-red-500 transition" />
        <Share2
          className="cursor-pointer hover:text-blue-500 transition"
          onClick={() => setShowModal(true)}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6 mt-10  ">
        {/* Left - Image */}
        <div className="relative w-full lg:w-[40%] h-72 sm:h-80 md:h-96 mx-auto">
          <Image
            src="/images/affiliates/benefit/benefit-1.png"
            alt="Open Your Eyes"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Open Your Eyes</h2>

          <div className="flex items-center text-sm text-gray-500 gap-2 mt-1 flex-wrap">
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

          {/* Play Button */}
          <div className="my-4">
            <FaPlay size={30} className="cursor-pointer text-gray-700 hover:text-black transition" />
          </div>

          {/* Info Text */}
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Info className="w-4 h-4" />
            <span>Only available to subscribed users</span>
          </div>

          {/* Credit Section */}
          <div className="mt-2">
            <p className="text-black font-semibold">1 Credit</p>
            <p className="text-sm text-gray-500">Includes</p>
            <div className="flex gap-2 mt-1 flex-wrap">
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
            {/* <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
              Download Now (1 Credit)
            </button> */}
            <button className="border border-blue-600 text-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-50">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    

            {/* Share Modal */}
            {showModal && (
                <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md px-6 py-5 w-[95%] max-w-md">
                    {/* Close Button */}
                    <button onClick={() => setShowModal(false)} className="absolute top-3 right-4 text-gray-400 hover:text-black cursor-pointer ">
                        <X size={18} />
                    </button>

                    {/* Modal Heading */}
                    <h3 className="text-xl font-bold text-center mb-1">Share this vocal</h3>
                    <p className="text-sm text-gray-500 text-center mb-5">
                        Inspire people by sharing this vocal
                    </p>

                    {/* Share Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#3b5998] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                        >
                            <Facebook size={16} />
                            Facebook
                        </a>

                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#1da1f2] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                        >
                            <Twitter size={16} />
                            Twitter
                        </a>

                        <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#25d366] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                        >
                            <MessageCircle size={16} />
                            WhatsApp
                        </a>

                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md"
                        >
                            <Copy size={16} />
                            Copy link
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default MusickDetails
