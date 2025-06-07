import React from 'react'
import { motion } from 'framer-motion';

const LimitedLicense: React.FC = () => {
    return (
        <div style={{ fontFamily: "Favorit" }} >
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-gray-800"
            >
                <h2 className="lg:text-4xl text-2xl font-bold">30 copies only available.</h2>
                <p className="text-gray-600  lg:text-2xl text-lg">Effective Date: Upon purchase</p>
                <p className="text-gray-700 lg:text-2xl text-lg ">Parties: This agreement is between TuneM (“Licensor”) and you, the purchaser (“Licensee”).</p>

                <section>
                    <h4 className="lg:text-2xl text-lg font-bold mb-2">A. Delivery</h4>
                    <ul className="list-disc lg:text-lg text-sm list-inside space-y-2">
                        <li>1x Wet Vocal (tuned & processed) as MP3 + WAV</li>
                        <li>3x Dry Vocal Takes (unprocessed) as WAV</li>
                        <li>(Optional) Instrumental stem files and MIDI files if provided</li>
                        <li>Downloads will be accessible via email or your TuneM account.</li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">B. License Scope</h4>
                    <ul className="list-disc lg:text-lg text-sm  list-inside space-y-2">
                        <li>Use the vocal in one (1) new song (including remixes or extended mixes)</li>
                        <li>Distribute your new song commercially</li>
                        <li>Upload to streaming platforms (Spotify, YouTube, etc.)</li>
                        <li>Perform the song live or on radio</li>
                        <li>Offer paid or free downloads</li>
                        <li>Monetize across platforms with unlimited streams and downloads</li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">C. Ownership & Usage Limits</h4>
                    <ul className="list-disc lg:text-lg text-sm list-inside space-y-2">
                        <li>Non-exclusive license, limited to 30 licenses sold globally per vocal</li>
                        <li>TuneM retains full ownership of the vocal</li>
                        <li>No reselling, sublicensing, or registering with content ID systems (e.g., YouTube Content ID)</li>
                        <li>Do not distribute or share raw vocal files</li>
                        <li>License is non-transferable and applies only to you</li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">D. Royalties</h4>
                    <p className='lg:text-lg text-sm' >You keep 100% of all royalties earned. No publishing or writer splits with TuneM or the vocalist apply.</p>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">E. Stems & MIDI Files</h4>
                    <p className='lg:text-lg text-sm' >Stems and MIDI files (if provided) can only be used to make your own version. Do not publish the original arrangement as-is.</p>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">F. Violations</h4>
                    <p className="lg:text-lg text-sm" >Violating any part of this agreement allows TuneM to terminate your license with 30 days written notice.</p>
                </section>

                <section>
                    <h4 className="text-lg lg:text-2xl font-bold mb-2">G. Jurisdiction & VAT</h4>
                    <p className="lg:text-lg text-sm" >This agreement is governed by the laws of Malta. All purchases are subject to 18% VAT under Maltese regulations.</p>
                </section>
            </motion.div>
        </div>
    )
}

export default LimitedLicense
