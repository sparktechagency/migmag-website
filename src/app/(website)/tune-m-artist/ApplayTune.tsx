import Image from 'next/image'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const ApplayTune: React.FC = () => {
    return (
        <MaxWidth>
            <div style={{fontFamily: 'Favorit'}} className='  mx-auto mb-[83px] '>
                <div
                    className=' flex lg:flex-row-reverse flex-col items-center justify-between relative lg:gap-5  '>

                    {/* left side  */}
                    <div>
                        <Image src={"/images/home-page/coveredImg.png"}
                               className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={654}
                               alt='....'/>
                    </div>
                    {/* right side  */}
                    <div>
                        <div className=' max-w-[450px] '>
                            <h1 className=' text-white leading-9 lg:text-4xl text-2xl font-bold headerColor  '>Work With
                                TuneM in 3 Simple
                                Steps.</h1>
                        </div>

                        <div className=' max-w-[698px] lg:mt-5 mt-3 '>
                            <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin '>
                                What’s required? Browse and purchase acapellas created by top singers from around the
                                world. Use them to create original music that you can release and profit from.
                            </h1>
                        </div>


                        <div className="max-w-[700px] mx-auto lg:mt-6 mt-4 space-y-3 ">
                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <h1 className={`lg:text-xl text-[16px]  font-bold  `}>1. Apply to Join</h1>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        Submit your profile and a few vocal samples. If accepted, you’ll be added to our
                                        roster of professional singers.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="lg:text-xl text-[16px]  font-bold   mb-2">2. Receive Vocal Requests</p>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        We’ll assign you vocal projects based on your voice and style — no need to look for work. Just focus on recording. </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#000000] font-bold lg:text-xl mb-4">3. Get Paid. No Fees.</p>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        We handle everything from marketing to sales. You earn for every vocal used — with clear payouts and no platform fees.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </MaxWidth>
    )
}

export default ApplayTune
