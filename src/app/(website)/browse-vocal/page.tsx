'use client'

import React from 'react'
import BrowseVocalBanner from './BrowseVocalBanner'
import BrowseVocalMarque from './BrowseVocalMarque'
import BrowseMusickVocalSlider from './BrowseMusickVocalSlider';
import BrowseAllVocal from './BrowseAllVocal'
import BrowseVocalNavbar from "@/app/(website)/browse-vocal/BrowseVocalNavbar";
import BrowseVocalFooter from "@/app/(website)/browse-vocal/BrowseVocalFooter";

const Page: React.FC = () => {


    return (
        <div style={{fontFamily: 'Favorit'}} className='  bg-[#000000] '>
            {/* navbar  */}
            <>
                <BrowseVocalNavbar></BrowseVocalNavbar>
            </>


            <div className={``} >
                {/* browse vocal content  */}
                <div className=' mt-8    '>
                    <BrowseVocalBanner/>
                </div>
                <div>
                    <BrowseVocalMarque/>
                </div>

                <div>
                    <BrowseMusickVocalSlider/>
                </div>
                <div className=' pb-12 '>
                    <BrowseAllVocal/>
                </div>
            </div>


            {/* footer  */}

            <BrowseVocalFooter/>

        </div>
    )
}

export default Page 
