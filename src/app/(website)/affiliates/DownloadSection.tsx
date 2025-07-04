"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import MaxWidth from "@/components/max-width/MaxWidth";

const DownloadSection = () => {
  return (
    <MaxWidth>
      <section className="lg:py-20 py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl headerColor font-bold mb-2">
            Downloads
          </h2>
          <p className="lg:text-xl text-lg textColor ">
            Use the logos in your videos, blog posts and social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Item 1 */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Vocalfy Logo Black</h3>

            <div className="w-full mb-6 pointer-events-none">
              <Image
                src="/images/affiliates/downloads/download-1.png"
                alt="Vocalfy Logo Black"
                width={600}
                height={120}
                className="rounded-md object-contain w-full select-none"
              />
            </div>

            <a
              href="/images/affiliates/downloads/download-1.png"
              download
              className="inline-flex items-center gap-2 text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              <FaArrowDown />
              Download
            </a>
          </div>

          {/* Item 2 */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Vocalfy Logo White</h3>

            <div className="w-full mb-6 pointer-events-none">
              <Image
                src="/images/affiliates/downloads/download-2.png"
                alt="Vocalfy Logo White"
                width={600}
                height={120}
                className="rounded-md object-contain w-full select-none"
              />
            </div>

            <a
              href="/images/affiliates/downloads/download-2.png"
              download
              className="inline-flex items-center gap-2 text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              <FaArrowDown />
              Download
            </a>
          </div>
        </div>
      </section>
    </MaxWidth>
  );
};

export default DownloadSection;
