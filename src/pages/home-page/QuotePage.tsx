import React from 'react'

const QuotePage: React.FC = () => {
    return (
        <div style={{fontFamily: 'Favorit'}}>
            <section className="bg-white lg:mt-20 mt-10 max-w-[1539px] mx-auto lg:px-0 px-4  ">
                <h1 style={{fontFamily: 'Favorit'}}
                    className={` lg:text-4xl text-2xl font-semibold  mb-3 `}>Quote</h1>
                {/* Quote */}
                <blockquote style={{fontFamily: 'Favorit'}} className=" lg:text-2xl text-xl  mb-12">
                    “Vocals that get played, signed, and remembered – backed by service that’s just as professional as
                    the sound.”
                    <br/>
                    <span className="not-italic font-semibold">
                        – Mantas&nbsp;Stinson (Lithuania HQ • Label Manager)
                     </span>
                </blockquote>

                {/* Intro */}
                <h2 className="text-3xl lg:text-4xl font-bold  mb-4">
                    We’ve got you covered – Tired of Overused Vocals?
                </h2>
                <p className="text-lg text-[#000000 ] mb-12">
                    Browse and purchase top-quality vocals created by the best singers in the music industry. Every
                    vocal on TuneM is
                    rare, limited, and our library is refreshed regularly—use them to create original music you can
                    release.
                </p>

                {/* Product tiers */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
                    {/* Exclusive */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold text-black mb-2">
                            Exclusive Vocals <span className="text-sm">(1 of 1)</span>
                        </h3>
                        <p className="text-[#000000] lg:text-xl text-sm mb-3">
                            The highest level of ownership – each vocal is sold only once and immediately removed after
                            purchase. You’re the sole owner, fully royalty-free, and it’s never resold.
                        </p>
                        <p className="text-sm  text-[#000000] ">
                            Includes: 3 vocal takes + professionally edited stems.
                        </p>
                    </div>

                    {/* Premium */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold text-black mb-2">
                            Premium Vocals <span className="text-sm">(5 Copies Only)</span>
                        </h3>
                        <p className="text-[#000000] lg:text-xl text-sm mb-3">
                            Truly rare, high-quality vocals available to a maximum of five producers. Once all copies
                            are
                            sold, it’s gone – perfect for standing out with limited competition.
                        </p>
                        <p className="text-sm  text-[#000000] ">
                            Includes: 3 vocal takes + professionally edited stems.
                        </p>
                    </div>

                    {/* Limited */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold text-black mb-2">
                            Limited Vocals <span className="text-sm">(20 Copies Only)</span>
                        </h3>
                        <p className="text-[#000000] lg:text-xl text-sm mb-3">
                            Affordable and unique – each vocal is capped at 20 total downloads. Ideal for keeping your
                            sound fresh without oversaturation.
                        </p>
                        <p className="text-sm  text-[#000000] ">
                            Includes: 3 vocal takes + professionally edited stems.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuotePage;
