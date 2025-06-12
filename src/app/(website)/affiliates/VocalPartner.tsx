import React from 'react';
import {Check} from "lucide-react";

const VocalPartner: React.FC = () => {
    return (
        <div className={` mt-8 lg:mt-20 mb-4 lg:mb-8 `} style={{fontFamily:"Favorit"}} >
            <div  className="max-w-4xl  mx-auto " >
                <div>
                    <h1 className={`text-center lg:text-4xl text-2xl font-semibold  `} >Become a Vocalfy partner now</h1>
                </div>
                <div className=" mt-5">
                    <button
                        className={`block mx-auto lg:mt-14 mt-8 px-6 py-2 lg:text-lg text-[16px] font-semibold bg-[#000000] text-white rounded-md  `}>JOIN
                        NOW
                    </button>
                </div>
                <div className={`flex md:flex-row flex-col items-center gap-x-3 justify-center mt-7 `} >
                    <span className={`flex items-center gap-x-2 `} > <Check /> <h1 className={`lg:text-xl text-lg`} >Fast Payouts</h1> </span>
                    <span className={`flex items-center gap-x-2 `} > <Check /> <h1 className={`lg:text-xl text-lg`} >High Conversion Rates</h1> </span>
                    <span className={`flex items-center gap-x-2 `} > <Check /> <h1 className={`lg:text-xl text-lg`} >Trusted Brand</h1> </span>
                </div>
            </div>
        </div>
    );
};

export default VocalPartner;