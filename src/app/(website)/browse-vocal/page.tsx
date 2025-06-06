'use client'

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {usePathname} from 'next/navigation'
import BrowseVocalBanner from './BrowseVocalBanner'
import BrowseVocalMarque from './BrowseVocalMarque'
import BrowseMusickVocalSlider from './BrowseMusickVocalSlider';
import BrowseAllVocal from './BrowseAllVocal'
import {FaCartArrowDown, FaCcApplePay, FaInstagramSquare} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {BsDiscord} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import BrowseVocalNavbar from "@/app/(website)/browse-vocal/BrowseVocalNavbar";
import BrowseVocalFooter from "@/app/(website)/browse-vocal/BrowseVocalFooter";

const Page: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const pathname = usePathname();
    console.log(pathname)

    const toggleDrawer = () => setDrawerOpen(!drawerOpen)

    // Auto-close drawer on screen resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDrawerOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Auto-close drawer on route change
    useEffect(() => {
        setDrawerOpen(false)
    }, [pathname])

    return (
        <div style={{fontFamily: 'Favorit'}} className=' bg-[#000000] '>
            {/* navbar  */}
            <>
                <BrowseVocalNavbar></BrowseVocalNavbar>
            </>


            <div className={``} >
                {/* browse vocal content  */}
                <div className='max-w-[1549px] mx-auto px-4 mt-8   '>
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
