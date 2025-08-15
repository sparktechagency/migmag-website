// components/VocalPublishLogo.tsx

'use client';

import React from 'react';
import Image from "next/image";
import MaxWidth from "@/components/max-width/MaxWidth";

const VocalPublishLogo: React.FC = () => {
    return (
        <MaxWidth>
            <div className=" ">
                <h1 className="text-center headerColor lg:text-4xl text-2xl font-semibold">
                    {/*TuneM Vocals Featured In*/}
                </h1>
                <div className="flex md:flex-row flex-col   justify-between items-center gap-4 mx-auto mt-4">
                    <div>
                        <Image
                            src="/update-image/sponser-logo/logo-1.png"
                            alt="logo"
                            width={130}
                            height={30}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-1.png"
                            alt="logo"
                            width={200}
                            height={90}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-2.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-3.png"
                            alt="logo"
                            width={175}
                            height={85}
                            className="object-cover w-36 "
                        />
                    </div>
                    <div>
                        <Image
                            src="/update-image/sponser-logo/sponser-4.png"
                            alt="logo"
                            width={120}
                            height={70}
                            className="object-cover w-24 "
                        />
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
};

export default VocalPublishLogo;
