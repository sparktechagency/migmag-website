"use client";

import { useState } from "react";
import MonthlyPlans from "./MonthlyPlan";
import YearlyPlans from "./YearlyPlansa";
import MaxWidth from "@/components/max-width/MaxWidth";


export default function Pricing() {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("yearly");

    return (
        <MaxWidth>
            <div className=" mt-10 ">
                <div className={"flex justify-between "} >
                    <div className=" max-w-[40%] " >
                        <h2 className="text-2xl font-semibold text-gray-800">Choose your plan</h2>
                        <p className="text-gray-500 mt-2 ">
                            Try for free and upgrade to access our subscription-only voices and more features. Cancel anytime.

                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 flex items-center bg-gray-100 rounded-full px-4 relative">
                        <div>
                            <button
                                onClick={() => setActiveTab("monthly")}
                                className={` cursor-pointer px-4 py-2 text-sm font-medium rounded-full ${activeTab === "monthly" ? "bg-white shadow text-black" : "text-gray-500"
                                    }`}
                            >
                                Monthly
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setActiveTab("yearly")}
                                className={` cursor-pointer px-4 py-2 text-sm font-medium rounded-full relative ${activeTab === "yearly" ? "bg-white shadow text-black" : "text-gray-500"
                                    }`}
                            >
                                Yearly
                                {activeTab === "yearly" && (
                                    <span className="absolute -top-6 right-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                                        2 MONTHS FREE
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>


                </div>
                {/* Content */}
                <div className="mt-10  ">
                    {activeTab === "monthly" ? <MonthlyPlans /> : <YearlyPlans />}
                </div>
            </div>
        </MaxWidth>
    );
}
