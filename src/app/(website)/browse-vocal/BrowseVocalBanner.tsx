import Image from 'next/image'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner = () => {
    return (
        <MaxWidth>
            <div className='  '>
                <div className='   flex flex-col lg:flex-row justify-between '>
                    {/* left side  */}
                    <div className=' max-w-2xl text-white '>
                        <div style={{fontFamily: 'Bayon'}}
                             className=' lg:max-w-[700px] lg:text-[75px] text-4xl lg:leading-20 '>
                            Get Studio Quality Acapellas
                        </div>
                        <div style={{fontFamily: 'Favorit'}}
                             className=' max-w-[561px] mt-3 lg:mt-6 text-lg leading-6 font-bold '>
                            <p>Spark new ideas today with our royalty free acapellas made by professional vocalists.Used
                                by trusted artists and labels.</p>
                        </div>
                        <div className=' lg:mt-5  '>
                            <p>Vocals featured with:</p>
                        </div>
                        <div className=' flex gap-3.5 lg:gap-12 items-center mb-6  '>
                            {/* 1st circle */}
                            <div className=' flex gap-3.5 lg:gap-12 items-center mb-6 lg:mt-10 '>
                                {/* 1st circle */}
                                <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full  '>
                                    <Image src={"/images/ai-data-set/broadcast.png"} alt={"Broadcast"} width={100}
                                           height={100}
                                           className={`object-cover  `}/>
                                </div>
                                <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full  '>
                                    <Image src={"/images/ai-data-set/music.png"} alt={"Broadcast"} width={100}
                                           height={100}
                                           className={`object-cover  `}/>
                                </div>
                                <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full  '>
                                    <Image src={"/images/ai-data-set/sound.png"} alt={"Broadcast"} width={100}
                                           height={100}
                                           className={`object-cover  `}/>

                                </div>
                                <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full  '>
                                    <Image src={"/images/ai-data-set/voice-chat.png"} alt={"Broadcast"} width={100}
                                           height={100}
                                           className={`object-cover  `}/>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side  */}
                    <div>
                        <Image
                            src="/images/browse-vocal/banner/browse-vocal-banner.jpg"
                            width={772}
                            height={478}
                            alt="Browse Vocal Banner"
                            className=' object-cover rounded  '
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
