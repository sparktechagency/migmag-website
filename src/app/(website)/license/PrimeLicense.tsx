import React from 'react';
import { motion } from 'framer-motion';

const PrimeLicense = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6 text-gray-800"
        >
            <h2 className="lg:text-4xl text-2xl font-bold">Prime License</h2>
            <p className="text-gray-600 text-lg">From $99</p>

            <h3 className="text-xl lg:text-2xl font-semibold">Full license:</h3>
            <p className=' text-sm lg:text-lg ' >
                This Agreement is made effective as of the date of the purchase between the purchaser (“You” “Licensee”) and Vocalfy LLC.
            </p>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">A. Delivery</h4>
                <ul className="list-disc text-sm lg:text-lg list-inside space-y-2">
                    <li>
                        After the payment is made, the Vocal will be delivered via e-mail as a download link. The licensee can also download the file(s) directly from their account page.
                    </li>
                    <li>
                        The licensee will receive 1x wet vocal (with effects and tuned) as 320kbps MP3 as well as high quality WAV file & 3x DRY Vocal takes without effects. Optional also the main stem files (e.g., piano, violins, drums) all as separated wav files & the Chord & Melody files as .midi type.
                    </li>
                </ul>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">B. Use of the vocal track</h4>
                <p className="text-sm lg:text-lg" >
                    Vocalfy grants the Licensee non-exclusive rights to use the vocal in one new song (different versions such as extended mix included). The Licensee can distribute, remix, adapt, and build upon the work, even commercially.
                </p>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">C. General terms</h4>
                <ul className="list-disc text-sm lg:text-lg list-inside space-y-2">
                    <li>The license cannot be transferred to someone else and is for the sole purpose of creating a song. The license nor the files cannot be resold.</li>
                    <li>The vocal may already have been sold to multiple parties. Therefore, it is prohibited from registering the vocal or the song with any content identification system.</li>
                    <li>The licensee agrees that the agreement is non-exclusive and acknowledges that the vocal can be resold under the same or different terms to someone else.</li>
                    <li>Vocalfy will still be the owner of the vocal track and the ownership won’t be transferred.</li>
                    <li>You may credit the Vocalist/Vocalfy on your new song, but you don’t need to.</li>
                    <li>Vocalfy LLC guarantees a limited number of available vocals and the vocal will become unavailable after the set amount of purchases is reached.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">D. Usage Rights</h4>
                <ul className="list-disc text-sm lg:text-lg list-inside space-y-2">
                    <li>The licensee may upload the new song onto streaming and video services such as Spotify, Apple Music, YouTube etc.) and is allowed to have a total number of streams/views/plays across platforms of unlimited.</li>
                    <li>The licensee may offer free and paid downloads which can be downloaded unlimited times.</li>
                    <li>The song can be played across unlimited radio stations.</li>
                    <li>The song can be publicly performed.</li>
                    <li>The licensee may not sell or offer a free download of the vocal track itself.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">E. Royalties</h4>
                <ul className="list-disc text-sm lg:text-lg list-inside space-y-2">
                    <li>All royalties collected go to the licensee/buyer.</li>
                    <li>The publishing and the writer’s share will not be split between the parties. 100% of the earnings are for the licensee/buyer.</li>
                </ul>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">F. Stem Files & Midi Files</h4>
                <p className = {"text-sm lg:text-lg"} >
                    These terms also apply to the stem and midi files. Stem files however may only be used to create a new song and may not be used to publish the arrangement of the stems in its original placement. So you can use the stems commercially and implement them into your song but it should always differ at least a bit from the original song made by Vocalfy.
                </p>
            </section>

            <section>
                <h4 className="text-lg lg:text-2xl font-bold mb-2">G. Violation of Agreement</h4>
                <p className = {"text-sm lg:text-lg"} >
                    Upon violation of any terms by the licensee, Vocalfy has the right to terminate the agreement after written notice to licensee after 30 days. Jurisdiction takes place in Germany.
                </p>
            </section>
        </motion.div>
    );
};

export default PrimeLicense;
