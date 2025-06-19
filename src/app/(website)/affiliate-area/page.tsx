import React from 'react';
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";
import {FaMicrophone, FaSmile, FaStar} from 'react-icons/fa';

const Page: React.FC = () => {
    const features = [
        {
            icon: <FaMicrophone className="text-4xl text-blue-200 mb-2"/>,
            title: 'Awesome vocals',
        },
        {
            icon: <FaSmile className="text-4xl text-blue-200 mb-2"/>,
            title: 'Happy customers',
        },
        {
            icon: <FaStar className="text-4xl text-blue-200 mb-2"/>,
            title: 'Trusted brand',
        },
    ];
    return (
        <div>
            <Navbar></Navbar>
            <MaxWidth>
                <div className={`my-8`} style={{fontFamily: "Favorit"}}>
                    <div className={`affiliationBgColor py-12 `}>
                        <h1 className={` text-center lg:text-5xl text-2xl font-bold `}>Fill Out The Form & Apply.</h1>
                        <div className="max-w-4xl mx-auto flex justify-around items-center flex-wrap gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center mt-6 my-4 ">
                                    <span className={ ` mx-auto flex justify-center ` } >{feature.icon}</span>
                                    <p className="text-lg font-medium">{feature.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`my-12`} >
                        <h1 className={` lg:text-5xl text-2xl text-center font-bold `}>You need to be registered first.</h1>
                        <Link className={" block mx-auto cursor-pointer "} href={"/register"}>
                            <button
                                className={` block mx-auto border border-black my-6 px-2 py-1 rounded-md text-lg cursor-pointer  `}>Login
                                or Register
                            </button>
                        </Link>
                    </div>
                </div>
            </MaxWidth>
            <UpdateFooter></UpdateFooter>
        </div>
    );
};

export default Page;