import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import Review from "@/pages/home-page/Review";

const Coverd: React.FC = () => {

    return (
        <>
            <MaxWidth>
                <div style={{fontFamily: 'Favorit'}} className='  mx-auto  mt-10 lg:mt-[91px]   '>
                    <div className=' flex lg:flex-row flex-col items-start justify-between relative gap-5 '>
                        {/* left side  */}
                        <div>
                            <div className=' max-w-[411px] '>
                                <h1 className=' text-2xl lg:text-4xl font-bold headerColor leading-9 '>
                                    We’ve got you covered
                                </h1>
                            </div>

                            <div className=' max-w-[578px] lg:mt-8 mt-3 '>
                                <h1 className=' lg:text-lg textColor leading-6 font-bold '>LOVE TUNEM - GREAT CHOICE AND
                                    EVEN BETTER SERVICE </h1>
                            </div>


                            <div className="max-w-[691px] mx-auto lg:mt-[61px] mt-7 lg:space-y-5 space-y-3 ml-[10%] ">
                                <div className=" transition duration-300">
                                    <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                    <p className="textColor font-light  lg:text-lg leading-7">
                                        Perfectly edited by our industry-leading vocal editors to make your music the
                                        best it can be. 3 Vocal Takes and edited vocals are always included.
                                    </p>
                                </div>

                                <div className=" transition duration-300">
                                    <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                    <p className="textColor font-light  lg:text-lg leading-7">
                                        Perfectly edited by our industry-leading vocal editors to make your music the
                                        best it can be. 3 Vocal Takes and edited vocals are always included.
                                    </p>
                                </div>

                                <div className=" transition duration-300">
                                    <p className="headerColor font-bold lg:text-xl ">Premium-Quality Vocals</p>
                                    <p className="textColor font-light lg:text-lg   leading-7">
                                        Perfectly edited by our industry-leading vocal editors to make your music the
                                        best it can be. 3 Vocal Takes and edited vocals are always included.
                                    </p>
                                </div>
                            </div>


                        </div>
                        {/* right side  */}
                        <div>
                            <Image src={"/images/home-page/coveredImg.png"}
                                   className=' object-cover rounded-lg block mx-auto ' width={652} height={654}
                                   alt='....'/>
                        </div>
                    </div>

                    <div>
                        <Review></Review>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-8 lg:mt-2 w-full">
                        {/* Left Side */}
                        <div className="bg-black p-5 rounded-md w-full ">
                            <div className="max-w-[411px]">
                                <h1 className="text-2xl lg:text-[35px] font-bold text-white leading-9">
                                    Vocals from the Industry’s Best
                                </h1>
                            </div>

                            <div className="max-w-[478px] mt-3 lg:mt-8">
                                <p className="lg:text-lg text-white leading-6 font-thin">
                                    Get access to top featured artists and rising voices, professionally recorded in studio environments. All vocals come from credited singers behind major releases — trusted by producers and labels worldwide.
                                </p>
                            </div>

                            <div className="max-w-[700px] mx-auto mt-7 lg:mt-[50px] space-y-3 lg:space-y-12">
                                {/* Feature 1 */}
                                <div className="flex items-start gap-5">
                                    <div className="w-[50px] h-[47px] rounded-full bg-[#201F1F]" />
                                    <div className="w-full transition duration-300">
                                        <p className="text-white font-bold text-xl mb-4">100% Royalty-Free</p>
                                        <p className="text-white font-light text-lg leading-7">
                                            All vocals on TuneM are cleared for commercial use. You can release your music on any platform and keep 100% of the royalties — no licenses, no revenue splits, no restrictions.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-start gap-5">
                                    <div className="w-[50px] h-[47px] rounded-full bg-[#201F1F]" />
                                    <div className="w-full transition duration-300">
                                        <p className="text-white font-bold text-xl mb-4">Lifetime Use</p>
                                        <p className="text-white font-light text-lg leading-7">
                                            Receive your dry vocal stems, invoice, and confirmation by email after purchase. MIDI files sold separately if required.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-start gap-5">
                                    <div className="w-[50px] h-[47px] rounded-full bg-[#201F1F]" />
                                    <div className="w-full transition duration-300">
                                        <p className="text-white font-bold text-xl mb-4">Trusted Agreements</p>
                                        <p className="text-white font-light text-lg leading-7">
                                            Clear, professional, and built to protect you. Every vocal comes with a downloadable license — no hidden terms, no obstacles, release your music with no limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="w-full ">
                            <Image
                                src="/update-image/home-page/quote/becomeTuneM.png"
                                alt="Become TuneM"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>


                </div>
            </MaxWidth>
            <div className={'lg:mb-16 mb-10 '} >
                <div
                    className="bg-[url('/images/home-page/tunemImg.png')] lg:h-[503px] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16  relative overflow-hidden"
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                    <div className="relative lg:mt-20 mt-10 z-10">
                        <h1 style={{fontFamily: 'Favorit'}}
                            className="text-center text-[#E7F056] font-bold lg:text-3xl text-lg ">
                            Become a TuneM Artist.
                        </h1>

                        <div style={{fontFamily: 'Favorit'}} className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                            <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                                We work with talented singers and songwriters ready to take their voice further.
                                Expand your audience, get discovered, and join our global music network. </p>
                        </div>
                        <div>
                            <Link href={"/tune-m-artist"}>
                                <button style={{fontFamily: 'Favorit'}}
                                        className="cursor-pointer text-[#E7F056] text-sm  px-4 py-2 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                                    GET STARTED
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coverd
