import Image from 'next/image'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import {Bayon} from "next/font/google";
const bayon = Bayon({
    weight: '400',
    subsets: ['latin'],
});
const BrowseVocalBanner = () => {
    return (
        <MaxWidth>
            <div className='  '>
                <div className='   flex flex-col lg:flex-row justify-between gap-y-10 '>
                    {/* left side  */}
                    <div className=' max-w-2xl text-white w-full '>
                        <div
                             className={`lg:max-w-[700px] lg:text-[70px] text-4xl lg:leading-20 ${bayon.className} `}>
                            Get Studio Quality Acapellas
                        </div>
                        <div style={{fontFamily: 'Favorit'}}
                             className=' max-w-[561px] mt-3 lg:mt-6 text-lg leading-6 font-bold '>
                            <p>Spark new ideas today with our royalty free acapellas made by professional vocalists.Used
                                by trusted artists and labels.</p>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className={` w-full`} >
                        <Image
                            src="/update-image/browse-vocal/banner/banner.png"
                            width={772}
                            height={478}
                            alt="Browse Vocal Banner"
                            className=' w-full h-auto   object-cover rounded  '
                        />

                    </div>
                </div>
                <div>

                </div>
            </div>
        </MaxWidth>
    )
}

export default BrowseVocalBanner
