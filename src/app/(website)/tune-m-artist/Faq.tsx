import MaxWidth from "@/components/max-width/MaxWidth";

type FaqType = {
    question: string,
    answer: string
}
const faqs: FaqType[] = [
    {
        question: "Can I use TuneM vocals commercially?",
        answer:
            "Yes. All vocals include a commercial license. You can distribute your songs on Spotify, Apple Music, YouTube, and more — generating unlimited streams and earnings.",
    },
    {
        question: "Are the vocals royalty-free?",
        answer:
            "Yes. Once purchased, they are royalty-free. You keep 100% of earnings from your release..",
    },

    {
        question: "Do I need to credit the singer or TuneM?",
        answer: "No credit is required unless explicitly mentioned on the product page.",
    },

    {
        question: "Can I register my track with a publishing rights organisation?",
        answer: "Yes. You can register your track without crediting TuneM or the singer."
    },

    {
        question: "Do I fully own my track even with a non-exclusive vocal?",
        answer: "Yes. You own your final track and keep 100% of earnings. TuneM retains ownership of the original vocal recording.",
    },

    {
        question: "Can I ghost produce with a TuneM vocal?",
        answer: "Yes. You may sell the track to a client as long as TuneM’s license terms are respected.",
    },




];




const Faq = () => {
    return (
        <MaxWidth>
            <section className=" mx-auto mb-10   ">
                <h1 className={" headerColor lg:text-3xl text-xl leading-9 font-bold text-center mb-10 lg:mb-20 mt-10 "}>TuneM FAQ</h1>
                <div>
                    <span className={"flex item-center gap-x-2  "} >
                        <h1 className={"lg:text-xl font-bold  "} >📧 Support Contact</h1> : <p className={" mt-0.5 "} >support@tunem.com</p>
                    </span>
                    <p>We reply within 1–24 hours on business days.</p>
                </div>



                <div className=" lg:mt-10 ">
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-4  " >
                        Licensing & Usage
                    </h1>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">{faq.question}</h3>
                            <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >What are the license limitations?</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>You cannot resell vocals as part of sample packs.</li>
                        <li>You may use vocals for your own releases, client work, or ghost productions.</li>
                        <li>Exclusive licenses have <span>no limitations</span> .</li>
                    </ul>
                </div>






                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        TuneM Vocals
                    </h1>
                </div>


                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Limited Vocal (20 copies max):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>1x wet vocal</li>
                        <li>3x dry vocal takes (untreated)</li>
                        <li>Full commercial license</li>
                        <li>Not exclusive, but capped at<span>30 total sales</span> .</li>
                    </ul>
                </div>



                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Premium Vocal (5 copies max):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Everything in Limited Vocal</li>
                        <li>Bonus harmonies, MIDI, and stems (if available)</li>
                        <li>Only<span>5 total licenses available</span> .</li>
                    </ul>
                </div>


                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Exclusive Vocal (1 copy only):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Sold only once</li>
                        <li>Wet & dry takes, harmonies, stems, MIDI (if available)</li>
                        <li>Full buyout rights + total master ownership</li>
                    </ul>
                </div>



                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-4  " >
                        Technical Details
                    </h1>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What are wet vocals?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Vocals processed with effects (e.g., reverb/delay). Ready to use.</p>
                </div>
                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What are dry vocals?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Raw, unprocessed vocals for your own mixing and FX.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">How many vocal takes are included?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">You’ll receive at least <span className={"font-bold"} >3 lead takes</span> . Harmonies and ad-libs may also be included.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Are these vocals exclusive to TuneM?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes. All vocals are produced for and sold only via TuneM.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What does &ldquo;not overused&ldquo; mean?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">We cap sales to prevent market saturation:</p>
                </div>


                <div>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Limited → 20 copies</li>
                        <li>Premium → 5 copies</li>
                        <li>Exclusive → 1 copy only</li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Can I re-record the vocal with another singer?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes, re-recording is allowed under all license types.</p>
                </div>




                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        Distribution & Releases
                    </h1>
                </div>



                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Where can I release my track?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Anywhere: Spotify, Apple Music, SoundCloud, Bandcamp, YouTube — with a label or independently.</p>
                </div>



                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Can I use instrumental stems royalty-free?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes, but your final song must be creatively different from the original.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What if a label/distributor asks who wrote the lyrics?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">You may credit <span className="font-bold" >“Alek Jenssen”</span> as the lyricist if no other writer is specified.</p>
                </div>


                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        Support & Policies
                    </h1>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Do you offer refunds?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes. We provide a <span className="font-bold" >30-day money-back guarantee</span>if you’re not satisfied. Contact support for assistance.</p>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">How do I contact TuneM support?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Email us at <span className="font-bold" >support@tunem.com</span>or use our Contact Page.</p>
                </div>
















                {/* <div>
                    <h3 className="font-bold lg:text-2xl text-lg leading-6  text-black mb-3 mt-4 lg:mb-3">What are the
                        differences between your vocal packages?</h3>
                    <ul className="list-disc  space-y-1">
                        <li className="font-bold headerColor text-lg leading-6 flex flex-row items-center list-disc ">
                            Limited Vocal (30 copies only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not exclusive, but strictly limited to 30 total purchases.
                            </span>
                        </li>
                        <li className="font-bold text-lg headerColor leading-6 flex flex-row items-center  ">
                            Premium Vocal (5 copies only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Includes everything in the Limited Vocal package plus bonus materials (harmonies, MIDI, and stems if available). Only 5 total licenses available.
                            </span>
                        </li>
                        <li className="font-bold headerColor text-lg leading-6 flex flex-row items-center  ">
                            Exclusive Vocal (1 copy only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Sold only once. Includes wet & dry takes, harmonies, stems, MIDI files (if available), and full buyout rights. Total master ownership.
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold lg:text-2xl text-lg leading-6  headerColor mb-3 mt-2 lg:mt-4 lg:mb-5">What
                        are the license limitations?</h3>
                    <ul className="list-disc  space-y-1">
                        < li className="block font-normal textColor text-lg leading-6">
                            Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not
                            exclusive, but strictly limited to 30 total purchases.
                        </li>

                        <li className=" textColor lg:text-lg leading-6 flex flex-row items-center  ">
                            Use vocals to create sample packs You can use vocals for client work or ghost productions.
                            Exclusive licenses have no limitations.
                        </li>

                    </ul>
                </div> */}





            </section>
        </MaxWidth>
    );
}


export default Faq