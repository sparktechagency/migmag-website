import Image from "next/image";
import React from "react";
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner: React.FC = () => {
  return (
    <MaxWidth>
      <div className="lg:py-10">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Side */}
          <div className="text-white w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight lg:leading-[4.5rem] mb-6">
              Cover Songs
            </h1>
            <p className="text-lg lg:text-xl font-medium leading-relaxed text-white/90 mb-8 max-w-lg">
              Pro cover vocals, ready to use. Secure your license and release
              with confidence.
            </p>

            {/* Logos Row */}
            <div className="flex items-center -ml-2 ">
              <Image
                src="/update-image/cover-vocal/banner/logo-3.png"
                width={200}
                height={200}
                alt="Logo 3"
                className="bg-contain w-40 h-40 "
              />
              <Image
                src="/update-image/cover-vocal/banner/logo-2.png"
                width={200}
                height={200}
                alt="Logo 2"
                className="bg-contain w-40 h-40 "
              />

              <Image
                src="/update-image/cover-vocal/banner/logo-1.png"
                width={200}
                height={200}
                alt="Logo 1"
                className="bg-contain w-40 h-40  "
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/update-image/cover-vocal/banner/vocalBanner.png"
              alt="Main Banner"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default BrowseVocalBanner;
