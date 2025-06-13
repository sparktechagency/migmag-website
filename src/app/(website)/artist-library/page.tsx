'use client'

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {usePathname} from 'next/navigation'
import ArtistLibraryBanner from './ArtistLibraryBanner'
import BrowseArtist from './BrowseArtist'
import {FaCcApplePay, FaFacebook, FaInstagramSquare} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {BsDiscord} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import BrowseVocalNavbar from "@/app/(website)/browse-vocal/BrowseVocalNavbar";
import {ArrowRight} from "lucide-react";
import BrowseVocalFooter from "@/app/(website)/browse-vocal/BrowseVocalFooter";

const Page: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const pathname = usePathname();

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
