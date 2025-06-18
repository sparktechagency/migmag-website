import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const HireVocal: React.FC = () => {
    interface VocalInt {
        image: string;
    };

    const vocalData: VocalInt[] = [
        {
            image: "/update-image/sponser-logo/sponser-1.png"
        },

        {
            image: "/update-image/sponser-logo/sponser-2.png"
        },

        {
            image: "/update-image/sponser-logo/sponser-3.png"
        },

        {
            image: "/update-image/sponser-logo/sponser-4.png"
        },


    ]
    return (
        <div style={{fontFamily: 'Favorit'}} className=' '>
            <MaxWidth>
                <h1 className=' text-center lg:mt-14 md:mt-7 mt-4 headerColor lg:text-3xl text-lg  font-bold  '>HERE
                    OUR VOCALS ON</h1>
                <div className="flex flex-wrap justify-between items-center gap-4 mx-auto mt-4">
                    <div>
                        <Image
                            src="/update-image/sponser-logo/logo-1.png"
                            alt="logo"
                            width={145}
                            height={70}
                            className="object-cover w-full"
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-1.png"
                            alt="logo"
                            width={200}
                            height={90}
                            className="object-cover w-full"
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-2.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-3.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-4.png"
                            alt="logo"
                            width={120}
                            height={70}
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className=' max-w-[1449px] mx-auto my-1 '>
                    <div className=' flex lg:flex-row flex-col items-start justify-between relative lg:gap-5 lg:mt-40 '>
                        <div>
                            <p className=' lg:rotate-90 textColor lg:text-lg lg:absolute lg:top-14 lg:-ml-20   '>JUST
                                FOR YOU</p>
                        </div>
                        {/* left side  */}
                        <div>
                            <Image src={"/images/hire/bannerImg/hireBannerImg.png"}
                                   className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={654}
                                   alt='....'/>
                        </div>
                        {/* right side  */}
                        <div>
                            <div className=' max-w-[411px] '>
                                <h1 className=' text-2xl lg:text-[35px] font-bold headerColor leading-9 '>
                                    How It Works?
                                </h1>
                            </div>

                            <div className=' max-w-[478px] lg:mt-4 mt-3 '>
                                <h1 className=' lg:text-lg textColor leading-6 font-thin '>
                                    We will do advertising for you while you can fully focus on your work – without the
                                    need to actively search for clients. Beautifully simple for you – we handle
                                    everything around your talent. We distribute your skill throughout our network of
                                    companies, individual artists, marketplaces and record labels.
                                </h1>
                            </div>


                            <div className="max-w-[700px] mx-auto mt-4   space-y-3 ">
                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">Choose A Singer</p>
                                        <p className="textColor font-light mt-2 lg:text-lg leading-7">
                                            We make sure that you get only the best premium quality vocals by only
                                            working with the industry’s finest artists. This makes us the #1 vocal
                                            provider.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">Share your idea</p>
                                        <p className="textColor font-light  lg:text-lg leading-7">
                                            You find our vocals only on Vocalfy and nowhere else. We delete our
                                            Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">We Deliver the Vocal</p>
                                        <p className="textColor font-light  lg:text-lg leading-7">
                                            Our contracts are easy to understand without any sketchy clauses. Download
                                            your license for each of your vocals. Pick a vocal and start without
                                            obstacles..
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className=' lg:mt-14 md:mt-8 mt-5 '>
                        <Link href={"/tune-m-artist"}>
                            <button
                                className=' cursor-pointer  block mx-auto  text-[#000000] border border-[#000000] rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]  '>GET
                                STARTED
                            </button>
                        </Link>
                    </div>


                    <div className="">


                        {/* Card Section */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-6 md:mt-8 lg:mt-[59px] mb-6 md:mb-10 lg:mb-20 ">
                            <div className=" p-5 lg:pt-44 pb-14 rounded-md  border border-black shadow ">
                                <h1 className="text-xl lg:text-3xl leading-9 font-bold headerColor ">
                                    Work with Trusted Talent
                                </h1>
                                <div className="mt-6 lg:text-lg leading-6">
                                    <p className={` textColor `} >Our singers are hand-selected for their vocal ability, professionalism, and track
                                        record.</p>
                                </div>
                            </div>
                            <div className=" p-5 lg:pt-44 pb-14 rounded-md  border border-black shadow ">
                                <h1 className="text-xl lg:text-3xl leading-9 font-bold headerColor ">
                                    Secure and Verified
                                </h1>
                                <div className="mt-6 lg:text-lg leading-6">
                                    <p className={` textColor `}     >
                                        TuneM is built for trust with protected payments, verified artists, and real
                                        customer feedback.

                                    </p>
                                </div>
                            </div>
                            <div className=" p-5 lg:pt-44 pb-14 rounded-md  border border-black shadow ">
                                <h1 className="text-xl lg:text-3xl leading-9 font-bold headerColor ">
                                    Delivered Within 3–10 Days
                                </h1>
                                <div className="mt-6 lg:text-lg textColor leading-6">
                                    <p>Our vocalists deliver your custom vocals within 3–10 days, often sooner.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default HireVocal
