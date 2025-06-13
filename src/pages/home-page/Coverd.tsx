import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const Coverd: React.FC = () => {

    return (
        <MaxWidth>
            <div style={{ fontFamily: 'Favorit' }} className='  mx-auto  mt-10 lg:mt-[91px]  ' >
                <div className=' flex lg:flex-row flex-col items-start justify-between relative gap-5 ' >
                    {/* left side  */}
                    <div>
                        <div className=' max-w-[411px] ' >
                            <h1 className=' text-2xl lg:text-4xl font-bold headerColor leading-9 ' >
                                We’ve got you covered
                            </h1>
                        </div>

                        <div className=' max-w-[578px] lg:mt-8 mt-3 ' >
                            <h1 className=' lg:text-lg textColor leading-6 font-bold ' >LOVE TUNEM - GREAT CHOICE AND EVEN BETTER SERVICE </h1>
                        </div>



                        <div className="max-w-[691px] mx-auto lg:mt-[61px] mt-7 lg:space-y-5 space-y-3 ml-[10%] ">
                            <div className=" transition duration-300">
                                <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                <p className="textColor font-light  lg:text-lg leading-7">
                                    Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                                </p>
                            </div>

                            <div className=" transition duration-300">
                                <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                <p className="textColor font-light  lg:text-lg leading-7">
                                    Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                                </p>
                            </div>

                            <div className=" transition duration-300">
                                <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                <p className="textColor font-light lg:text-lg   leading-7">
                                    Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                                </p>
                            </div>
                        </div>






                    </div>
                    {/* right side  */}
                    <div>
                        <Image src={"/images/home-page/coveredImg.png"} className=' object-cover rounded-lg block mx-auto ' width={652} height={654} alt='....' />
                    </div>
                </div>


                <div
                    className="bg-[url('/images/home-page/tunemImg.png')] lg:h-[503px] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                    <div className="relative lg:mt-20 mt-10 z-10">
                        <h1 style={{ fontFamily: 'Favorit' }} className="text-center text-[#E7F056] font-bold lg:text-3xl text-lg ">
                            Become a TuneM Artist.
                        </h1>

                        <div style={{ fontFamily: 'Favorit' }} className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                            <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                                We work with talented singers and songwriters ready to take their voice further. Expand your audience, get discovered, and join our global music network.                        </p>
                        </div>
                        <div>
                            <Link href={"/tune-m-artist"}>
                                <button style={{ fontFamily: 'Favorit' }} className="cursor-pointer text-[#E7F056] text-sm lg:text-lg w-[194px] py-2 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                                    GET STARTED
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </MaxWidth>
    )
}

export default Coverd
