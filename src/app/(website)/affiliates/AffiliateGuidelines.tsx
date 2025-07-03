import React from 'react';
import {CheckCircle, XCircle} from 'lucide-react';
import MaxWidth from "@/components/max-width/MaxWidth";

const doList = [
    'Promote Vocalfy on social media',
    'Write about Vocalfy in blogs and articles',
    'Create educational content where you use our products',
    "Use Vocalfy's Logo and present the website",
    'Share Vocalfy with your email subscribers',
];

const dontList = [
    "Don't use your affiliate link in any misleading manner",
    "Don't change our logos or trademarks",
    "Don't offer unofficial discounts",
    "Don't falsely advertise Vocalfy in any manner",
    "Don't use your affiliate link for your own purchases",
];

const AffiliateGuidelines: React.FC = () => {
    return (
        <MaxWidth>
            <section className="bg-gray-50 lg:py-20 py-7 px-4">
                <div className="max-w-6xl mx-auto text-center mb-4 lg:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold headerColor  inline-block px-4 py-1 rounded">
                        Guidelines
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10">
                    {/* ✅ DO List */}
                    <ul className="space-y-4 text-left">
                        {doList.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 ">
                                <CheckCircle className="text-green-500 w-5 h-5 mt-1"/>
                                <span className={` lg:text-xl text-lg textColor `} >{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* ❌ DON'T List */}
                    <ul className="space-y-4 text-left">
                        {dontList.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-800">
                                <XCircle className="text-red-600 w-5 h-5 mt-1"/>
                                <span className={`lg:text-xl text-lg textColor `} >{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </MaxWidth>
    );
};

export default AffiliateGuidelines;
