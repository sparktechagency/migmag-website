import Image from 'next/image'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner = () => {
    return (
        <MaxWidth>
            <div className=' '>
                <div className='  flex flex-col lg:flex-row justify-between items-center '>
                    {/* left side  */}
                    <div className=' max-w-3xl text-white w-full  '>
                        <div
                             className=' max-w-[668px] lg:text-[75px] text-5xl lg:leading-20 '>
                            Get Studio Quality Acapellas
                        </div>
                        <div
                             className=' max-w-[561px] mt-3 lg:mt-6 text-lg leading-6 font-bold '>
                            <p>Spark new ideas today with our royalty free acapellas made by professional vocalists.Used
                                by
                                trusted artists and labels.</p>
                        </div>
                        <div className={`w-full border border-white h-auto  `} >
                            <Image
                                src="/update-image/cover-vocal/banner/banner-1.png"
                                width={50}
                                height={100}
                                alt="Browse Vocal Banner"
                                className='  object-cover rounded   '
                            />

                        </div>


                    </div>
                    {/* right side  */}
                    <div className={`w-full border border-white h- `} >
                        <Image
                            src="/update-image/cover-vocal/banner/banner-1.png"
                            width={872}
                            height={878}
                            alt="Browse Vocal Banner"
                            className=' w-full object-cover rounded   '
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
