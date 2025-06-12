import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HomeBanner: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Bayon' }}  className=' max-w-[1519px] mx-auto mt-8 lg:mt-14  ' >
            <div className="flex flex-col-reverse lg:flex-row  justify-between gap-x-10 lg:gap-0">
                {/* Left Side */}
                <div className="max-w-[658px]   text-center lg:text-left">
                    <h1 style={{ fontFamily: 'Bayon' }} className="text-[36px] md:text-[46px] font-thin lg:text-[90px] text-[#000000]  uppercase ">
                        Royalty-Free Vocals, Ready for Release
                    </h1>
                    <p  style={{ fontFamily: 'Favorit' }} className="text-[#000000] text-base md:text-lg mt-4 md:mt-8 leading-6">
                        Used by producers. Trusted by labels. Vocals that fit your sound and fuel your success.
                    </p>

                    <div style={{ fontFamily: 'Favorit' }} className="mt-8 md:mt-12">
                        <Link href="/browse-vocal" passHref>
                            <button className="bg-[#000000] w-[194px] text-white py-2 cursor-pointer rounded-2xl text-lg">
                                BROWSE VOCALS
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/images/home-page/home-banner-img.png"
                        alt="banner-image"
                        width={500}
                        height={30}
                        className="w-[90%] md:w-[70%] lg:w-auto  object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner