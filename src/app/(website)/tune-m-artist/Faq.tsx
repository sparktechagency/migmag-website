type FaqType = {
  question: string,
  answer: string
}
const faqs: FaqType[] = [
  {
    question: "Can I use TuneM vocals commercially?",
    answer:
      "Yes. All vocals come with commercial licensing. You can distribute your songs on platforms like Spotify, Apple Music, YouTube, etc., and generate unlimited streams and earnings.",
  },
  {
    question: "Are the vocals royalty-free?",
    answer:
      "Yes. Once purchased, they are royalty-free. You keep 100% of earnings from your release..",
  },
  {
    question: "Is there an email address I can send my CV to?",
    answer:
      "No, crediting is not required unless explicitly mentioned on the product page",
  },
  {
    question: "Do I need to credit the singer or TuneM?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "Can I use instrumental stems royalty-free?",
    answer: "Yes, but your final song must be creatively different from the original track",
  },

  {
    question: "Where can I release my track?",
    answer: "Anywhere — Spotify, Apple Music, SoundCloud, Bandcamp, YouTube, with a label, or independently.",
  },
  {
    question: "What are wet vocals?",
    answer: "Wet vocals are processed (e.g., with effects like reverb/delay). Ready to use",
  },
  {
    question: "What are dry vocals?",
    answer: " Dry vocals are raw and unprocessed, allowing for custom mixing and FX."
  },
  {
    question: "Are these vocals exclusive to TuneM?",
    answer: "Yes. All vocals are produced for and sold only via TuneM"
  },
  {
    question: "How many vocal takes are included?",
    answer: "You’ll receive a minimum of 3 lead vocal takes. Harmonies and ad-libs may also be included."
  },
  {
    question: "Do I fully own my track even with a non-exclusive vocal?",
    answer: "Yes. You own your final track and collect 100% of earnings. TuneM retains ownership of the original vocal recording."
  },
  {
    question: "Can I register my track with a publishing rights organisation?",
    answer: "Yes, and no credit to TuneM or the singer is required."
  },
  {
    question: "What does 'not overused' mean?",
    answer: "We limit sales and monitor usage to ensure our vocals are not saturated in the market. Limited and Premium vocals are capped at 10 and 5 copies respectively. Exclusives are sold only once."
  },
  {
    question: "Can I re-record the vocal with another singer?",
    answer: "Yes. Re-recording is allowed under all license types."
  },
  {
    question: "What if a label/distributor asks who wrote the lyrics?",
    answer: "You may list “Alek Jenssen” as the lyricist if no other writer is specified."
  },
  {
    question: "Can I ghost produce with a TuneM vocal?",
    answer: " Yes. You can sell the track to a client under the condition that TuneM’s license terms are respected."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied. Contact support for help."
  },
  {
    question: "How do I contact TuneM support?",
    answer: " Message us directly via our Contact Page or email. We respond within 1–24 hours on business days."
  },
];

const Faq = () => {
  return (
    <section style={{ fontFamily: 'Favorit' }} className="px-4 max-w-[1539px] mx-auto py-5   ">
      <h1 className={" text-[#000000] lg:text-3xl text-xl leading-9 font-bold text-center mb-10 lg:mb-20 mt-10 "} >TuneM Vocals – Frequently Asked Questions (FAQ)</h1>
      <div className="">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-bold lg:text-2xl text-xl leading-6  text-black mb-3 lg:mb-4">{faq.question}</h3>
            <p className="lg:text-lg text-[#000000] leading-6 lg:mb-4 mb-2  ">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div >
        <h3 className="font-bold lg:text-2xl text-lg leading-6  text-black mb-3 mt-4 lg:mb-3">What are the differences between your vocal packages?</h3>
        <ul className="list-disc  space-y-1">
          <li className="font-bold text-lg leading-6 flex flex-row items-center list-disc ">
            Limited Vocal (30 copies only):
            <span className="block font-normal text-[#000000] text-lg leading-6">
              Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not exclusive, but strictly limited to 30 total purchases.
            </span>
          </li>
          <li className="font-bold text-lg leading-6 flex flex-row items-center  ">
            Premium Vocal (5 copies only):
            <span className="block font-normal text-[#000000] text-lg leading-6">
              Includes everything in the Limited Vocal package plus bonus materials (harmonies, MIDI, and stems if available). Only 5 total licenses available.
            </span>
          </li>
          <li className="font-bold text-lg leading-6 flex flex-row items-center  ">
            Exclusive Vocal (1 copy only):
            <span className="block font-normal text-[#000000] text-lg leading-6">
              Sold only once. Includes wet & dry takes, harmonies, stems, MIDI files (if available), and full buyout rights. Total master ownership.
            </span>
          </li>
        </ul>
      </div>
      <div >
        <h3 className="font-bold lg:text-2xl text-lg leading-6  text-black mb-3 mt-2 lg:mt-4 lg:mb-5">What are the license limitations?</h3>
        <ul className="list-disc  space-y-1">
          < li className="block font-normal text-[#000000] text-lg leading-6">
            Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not exclusive, but strictly limited to 30 total purchases.
          </li>

          <li className=" lg:text-lg leading-6 flex flex-row items-center  ">
            Use vocals to create sample packs You can use vocals for client work or ghost productions. Exclusive licenses have no limitations.
          </li>

        </ul>
      </div>
    </section>
  );
}


export default Faq