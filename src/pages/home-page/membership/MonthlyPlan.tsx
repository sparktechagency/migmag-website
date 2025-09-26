"use client";
import React from "react";

export default function MonthlyPlans() {
    const plans = [
        { name: "Free", price: "$0", uses: 180, downloads: "Paid Vocals Only", wav: false, exclusive: false, stems: false },
        { name: "Basic", price: "$8.99", uses: 1200, downloads: 36, wav: true, exclusive: false, stems: false },
        { name: "Pro", price: "$14.99", uses: 2400, downloads: 72, wav: true, exclusive: true, stems: true },
        { name: "Studio", price: "$23.99", uses: "Unlimited", downloads: 108, wav: true, exclusive: true, stems: true },
    ];

    return (
        <div className=" mx-auto  py-12">


            {/* Table */}
            <div className="overflow-x-auto mt-6">
                <table className="w-full border-separate border-spacing-y-2 overflow-x-auto  ">
                    <thead>
                        <tr className="  " >
                            <th className="text-left   "></th>
                            {plans.map((plan) => (
                                <th key={plan.name} className="text-center text-2xl font-medium">
                                    {plan.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-center text-gray-700 mt-6  space-y-5    ">
                        <tr className="   " >
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Yearly Vocal Tool Uses</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.uses}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Yearly Vocals Downloads</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.downloads}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Monthly price</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Browse Full Vocals Library</td>
                            {plans.map(() => (
                                <td className=" border-b border-gray-400" key={Math.random()}>✓</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">High-Speed Processing</td>
                            {plans.map(() => (
                                <td className=" border-b border-gray-400" key={Math.random()}>✓</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Commercial Use</td>
                            {plans.map(() => (
                                <td className=" border-b border-gray-400" key={Math.random()}>✓</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Download in WAV Quality</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.wav ? "✓" : ""}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Pre-access to Exclusive Vocals</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.exclusive ? "✓" : ""}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Get Stems & MIDI for vocals</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.stems ? "✓" : ""}</td>
                            ))}
                        </tr>
                        <tr>
                            <td></td>
                            {plans.map((plan, idx) => (
                                <td key={plan.name} className=" space-x-6"  >
                                    <button
                                        className={` cursor-pointer px-4 mt-3 py-2 rounded-md font-medium ${idx === 0 ? "border border-black text-black" : "bg-black text-white"
                                            }`}
                                    >
                                        {idx === 0 ? "Start free" : "Continue"}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
