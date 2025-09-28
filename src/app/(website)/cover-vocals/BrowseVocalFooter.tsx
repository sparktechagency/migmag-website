


import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";

const BrowseVocalFooter: React.FC = () => {







    return (
        <div className="lg:mt-1">
            <MaxWidth>
                <div className=" ">
                    {/* Logo */}
                    <div className="mx-auto flex justify-center">
                        <span>
                            <Image src={"/images/logo/WhiteLogo.png"} alt={"logo"} width={200} height={200}
                                className={" object-cover "} />
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="text-black border border-white "></div>


                    {/* Divider */}
                    {/*<div className="border border-[#000000] mt-12"></div>*/}

                    <div
                        className={`flex flex-col lg:flex-row items-start justify-between lg:gap-x-20  mt-10 lg:mt-14  my-3 `}>
                        {/*left side */}
                        <div className={` lg:max-w-[30%]   w-full `}>
                            {/*logo*/}
                            <div>
                                <Image src={"/images/logo/WhiteLogo.png"} alt={"logo"} width={200} height={200}
                                    className={" object-cover "} />

                            </div>
                            <div className={`my-5`}>
                                <p className="text-white  block text-justify text-lg leading-6">
                                    We work with unique, handpicked trusted singers, top-tier songwriters, and
                                    professional
                                    engineers. All vocals are recorded in high-quality studio setups to ensure every
                                    take is
                                    clean, original, and ready for your next release.
                                </p>
                            </div>
                            {/*social icons */}
                            <div>
                                <div className="flex gap-x-5  mt-3">
                                    <div className="  rounded-full">
                                        <a target="_blank"
                                            href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagramSquare
                                                size={25} className={"text-white"} /></a>
                                    </div>
                                    <div className="  rounded-full">
                                        <a target="_blank"
                                            href="https://www.instagram.com/accounts/login/?hl=en"><FaTiktok
                                                className={"text-white"} size={25} /></a>
                                    </div>
                                    <div className="  rounded-full">
                                        <a target="_blank"
                                            href="https://www.instagram.com/accounts/login/?hl=en"><BsDiscord
                                                className={"text-white"} size={25} /></a>
                                    </div>
                                    {/*face book*/}

                                    <div>

                                        <a
                                            target="_blank"
                                            href="https://www.facebook.com"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer flex items-center gap-x-3.5"
                                        >
                                            <FaFacebook
                                                size={25}
                                                className=" text-white transition-all cursor-pointer"
                                            />

                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className={`my-5`}>

                                {/*face book*/}

                                <div>

                                    {/*<p className="text-white text-xl">@migmag.com</p>*/}

                                </div>
                            </div>

                            <div>
                                <p className=" mt-5 text-white text-lg mb-2">
                                    support@tunem.com
                                </p>


                            </div>


                        </div>
                        {/*right side footer menu item */}
                        <div className={`lg:max-w-[70%]   w-full `}>
                            <div className="flex lg:flex-row flex-col justify-between  ">
                                <div className="  ">
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg text-white font-bold leading-9">TUNEM</li>
                                        <div className={" "}></div>
                                        <li><Link className="text-lg text-white leading-9" href="/tune-m-artist">Hire
                                            a
                                            Singer</Link></li>

                                        <li><Link className="text-lg text-white leading-9"
                                            href="/https://tunemcollective.com/">Courses</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg text-white font-bold leading-9">CONTACT</li>
                                        <li><Link className="text-lg text-white leading-9" href="/contact">Contact
                                            Us</Link>
                                        </li>
                                        <li><Link className="text-lg text-white leading-9" href="/refund-policy">Refund
                                            Policy</Link></li>
                                        <li><Link className="text-lg text-white leading-9" href="/faq">FAQ</Link>
                                        </li>
                                        <li><Link className="text-lg text-white leading-9" href="/term&condiction">Term
                                            &
                                            Condiction</Link></li>
                                        <li><Link className="text-lg text-white leading-9" href="/privacy-policy">Privacy
                                            Policy</Link></li>
                                        <li><Link className="text-lg text-white leading-9"
                                            href="/license">License</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg text-white font-bold leading-9">WORK WITH US</li>
                                        <li><Link className="text-lg text-white leading-9" href="/tune-m-artist">TUNEM
                                            for
                                            Artists</Link></li>
                                        <li>
                                            <Link className="text-lg text-white leading-9" href="/affiliates">
                                                Affiliates
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={`lg:text-lg text-sm text-white text-center  `}>Payment Methods</h1>
                    </div>
                    <div className="max-w-6xl mx-auto ">
                        <Image
                            src="/images/logo/update-footer-logo.jpg"
                            alt="payment-logo"
                            width={600}
                            height={400}
                            className="mx-auto object-cover  " // center the image horizontally
                            priority // optional: preload if this image is above the fold
                        />
                    </div>

                </div>
            </MaxWidth>
        </div>
    )
}

export default BrowseVocalFooter;

