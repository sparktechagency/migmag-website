import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidth from "@/components/max-width/MaxWidth";


const HomeBanner: React.FC = () => {
    return (
        <div className={"bg-[linear-gradient(90deg,rgba(233,244,254,1)_0%,rgba(249,253,255,1)_50%,rgba(238,248,255,1)_100%)]"} >
            <MaxWidth>
                <div  className=' pt-8 lg:pt-10 pb-10   '>
                    <div className="flex flex-col-reverse lg:flex-row  justify-between gap-x-10 lg:gap-0">
                        {/* Left Side */}
                        <div className="max-w-[658px]   text-center lg:text-left">
                            <h1
                                className={`text-[36px] md:text-[46px]  lg:text-[70px] headerColor uppercase   `}>
                                Royalty-Free Vocals, Ready for Release
                            </h1>
                            <p 
                               className="textColor lg:text-2xl text-lg  mt-4 md:mt-8 leading-6">
                                Used by producers. Trusted by labels.
                            </p>

                            <div  className="mt-8 md:mt-12">
                                <Link href="/browse-vocal" passHref>
                                    <button
                                        className="bg-[#000000] w-[194px] text-white py-2 cursor-pointer rounded-2xl text-lg">
                                        BROWSE VOCALS
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex justify-center lg:justify-end  ">
                            <Image
                                src="/update-image/home-page/banner/banner.png"
                                alt="banner-image"
                                width={600}
                                height={530}
                                className=" w-full   object-cover  "
                            />
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default HomeBanner