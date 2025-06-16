'use client'


import React from 'react'


import ArtistLibraryBanner from './ArtistLibraryBanner'
import BrowseArtist from './BrowseArtist'


import BrowseVocalNavbar from "@/app/(website)/browse-vocal/BrowseVocalNavbar";

import BrowseVocalFooter from "@/app/(website)/browse-vocal/BrowseVocalFooter";

const Page: React.FC = () => {

    return (
        <div className={` w-full `}>
            <div className=' bg-[#000000] '>
                <div>
                    {/* navbar  */}

                    <BrowseVocalNavbar></BrowseVocalNavbar>

                    {/* website content  */}

                    <div className={``}>
                        <ArtistLibraryBanner></ArtistLibraryBanner>
                    </div>
                    <BrowseArtist/>


                    {/* footer  */}
                    <BrowseVocalFooter></BrowseVocalFooter>
                </div>
            </div>
        </div>
    )
}

export default Page
