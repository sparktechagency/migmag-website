"use client"


import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { ArrowRight } from "lucide-react";
import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";
import { useSubscriberApiMutation } from "@/redux/api/home-api/homeApi";
import { SubscriberApiPayload } from "@/utility/api-type/homeApiType";
import Swal from "sweetalert2";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const BrowseVocalFooter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [subscriberApi, { isLoading }] = useSubscriberApiMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload: SubscriberApiPayload = { email };

        try {
            const res = await subscriberApi(payload).unwrap();
            if (res) {
                setEmail('');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res?.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (err) {
            const error = err as FetchBaseQueryError & {
                data?: { message?: string };
            };

            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error?.data?.message || "Something went wrong",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

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
                                    Sign up for our mailing list to get latest updates and offers
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex items-center rounded-full overflow-hidden border border-gray-300 bg-white"
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 lg:w-full w-1/4 px-4 py-2 lg:py-2 text-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-yellow-400 cursor-pointer px-4 py-2  lg:px-6 lg:py-3 hover:bg-yellow-500 transition-colors duration-200"
                                    >
                                        {
                                            isLoading ? <>
                                                <div role="status">
                                                    <svg aria-hidden="true"
                                                        className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                        viewBox="0 0 100 101" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                            fill="currentColor" />
                                                        <path
                                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                            fill="currentFill" />
                                                    </svg>

                                                </div>
                                            </> : <>
                                                <ArrowRight className="w-5 h-5 textColor" />
                                            </>
                                        }
                                    </button>
                                </form>

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
                            src="/update-image/footer/payment-2.jpeg"
                            alt="payment-logo"
                            width={600}
                            height={400}
                            className="mx-auto object-cover bg-gray-400  " // center the image horizontally
                            priority // optional: preload if this image is above the fold
                        />
                    </div>
                    {/*date time */}
                    {/*<div>*/}
                    {/*    <p className="text-lg text-white">*/}
                    {/*        Copyright*/}
                    {/*        &copy; {new Date().getFullYear()} – Vocalfy LLC*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </MaxWidth>
        </div>
    )
}

export default BrowseVocalFooter;