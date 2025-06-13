"use client"


import Link from 'next/link'
import React, {useState} from 'react'
import {FaCcApplePay, FaFacebook, FaInstagramSquare} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {BsDiscord} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {ArrowRight} from "lucide-react";
import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";

const UpdateFooter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle email submission logic
        console.log('Email submitted:', email);
    };

    return (
        <div style={{fontFamily: 'Favorit'}} className="lg:mt-1 mt-5 pb-20 h-screen ">
            <MaxWidth>
                <div className=" ">
                    {/* Logo */}
                    <div className="mx-auto flex justify-center">
                    <span>
                        <Image src={"/images/logo/TuneMSVG.svg"} alt={"logo"} width={200} height={200}
                               className={" object-cover "}/>
                    </span>
                    </div>

                    {/* Divider */}
                    <div className="text-black border border-[#000000] "></div>


                    {/* Divider */}
                    {/*<div className="border border-[#000000] mt-12"></div>*/}

                    <div className={`flex flex-row items-start justify-between gap-x-20 my-7 `}>
                        {/*left side */}
                        <div className={` max-w-[30%]   w-full `}>
                            {/*logo*/}
                            <div>
                                <Image src={"/images/logo/TuneMSVG.svg"} alt={"logo"} width={200} height={200}
                                       className={" object-cover "}/>

                            </div>
                            <div className={`my-5`}>
                                <p className="textColor text-justify text-lg leading-6">
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
                                            size={25} className={"textColor"}/></a>
                                    </div>
                                    <div className="  rounded-full">
                                        <a target="_blank"
                                           href="https://www.instagram.com/accounts/login/?hl=en"><FaTiktok
                                            className={"textColor"} size={25} /></a>
                                    </div>
                                    <div className="  rounded-full">
                                        <a target="_blank"
                                           href="https://www.instagram.com/accounts/login/?hl=en"><BsDiscord
                                            className={"textColor"} size={25}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className={`my-5`}>

                                {/*face book*/}

                                <div>

                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer flex items-center gap-x-3.5"
                                    >
                                        <FaFacebook
                                            size={30}
                                            className=" textColor transition-all cursor-pointer"
                                        />
                                        <p className="textColor text-xl">@migmag.com</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                        {/*right side footer menu item */}
                        <div className={`max-w-[70%]   w-full `}>
                            <div className="flex flex-row justify-between  ">
                                <div className="  ">
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg headerColor font-bold leading-9">TUNEM</li>
                                        <div className={" "}></div>
                                        <li><Link className="text-lg textColor leading-9" href="/tune-m-artist">Hire
                                            a
                                            Singer</Link></li>

                                        <li><Link className="text-lg textColor leading-9"
                                                  href="/https://tunemcollective.com/">Courses</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg headerColor font-bold leading-9">CONTACT</li>
                                        <li><Link className="text-lg textColor leading-9" href="/contact">Contact
                                            Us</Link>
                                        </li>
                                        <li><Link className="text-lg textColor leading-9" href="/refund-policy">Refund
                                            Policy</Link></li>
                                        <li><Link className="text-lg textColor leading-9" href="/faq">FAQ</Link>
                                        </li>
                                        <li><Link className="text-lg textColor leading-9" href="/term&condiction">Term
                                            &
                                            Condiction</Link></li>
                                        <li><Link className="text-lg textColor leading-9" href="/privacy-policy">Privacy
                                            Policy</Link></li>
                                        <li><Link className="text-lg textColor leading-9"
                                                  href="/license">License</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="flex flex-col gap-1">
                                        <li className="text-lg headerColor font-bold leading-9">WORK WITH US</li>
                                        <li><Link className="text-lg textColor leading-9" href="/tune-m-artist">TUNEM
                                            for
                                            Artists</Link></li>
                                        <li>
                                            <Link className="text-lg textColor leading-9" href="/affiliates">
                                                Affiliates
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </MaxWidth>
        </div>
    )
}

export default UpdateFooter;