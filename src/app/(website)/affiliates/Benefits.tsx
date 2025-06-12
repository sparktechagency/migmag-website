import Image from "next/image";
import React from "react";

const benefits = [
    {
        title: "Get 20% Commission",
        description: "You’ll get a coupon code for your audience to track your sales",
        icon: "/images/affiliates/benefit/benefit-1.png",
    },
    {
        title: "Dashboard",
        description: "See referrals, payouts and download promotional assets",
        icon: "/images/affiliates/benefit/benefit-2.png",
    },
    {
        title: "Access to 100+ vocals",
        description: "Get access to our non-exclusive vocals and use them for promotion",
        icon: "/images/affiliates/benefit/benefit-3.png",
    },
];

const Benefits : React.FC = () => {
    return (
        <section style={{fontFamily: "Favorit"}} className="bg-[#f9f9f9] py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Section */}
                <div className="flex-1 w-full">
                    <h2 className="text-3xl font-bold mb-6">Benefits</h2>
                    <div className="space-y-6">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="bg-black rounded-md p-2">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={50}
                                        height={50}
                                        className="invert"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold lg:text-2xl text-xl ">{item.title}</p>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 w-full flex justify-center md:justify-end">
                    <Image
                        src="/images/affiliates/benefit/benefit-5.jpeg"
                        alt="Mobile Preview"
                        width={280}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
