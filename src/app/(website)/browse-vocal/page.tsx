'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import BrowseVocalBanner from './BrowseVocalBanner'
import BrowseVocalMarque from './BrowseVocalMarque'
import BrowseMusickVocalSlider from './BrowseMusickVocalSlider';
import BrowseAllVocal from './BrowseAllVocal'
import { FaCcApplePay, FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
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
        <div style={{ fontFamily: 'Favorit' }} className=' bg-[#000000] ' >
            {/* navbar  */}
            <>
                <div className=" max-w-[1539px] mx-auto    bg-opacity-90 ">
                    <div className='flex items-center justify-between h-16 max-w-[1549px] pt-12 mx-auto px-4'>
                        {/* Logo */}
                        <Link className='  ' href="/">
                            <svg width="174" height="22" viewBox="0 0 174 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_1601)">
                                    <path d="M76.7524 9.06699H68.8924V21.7685H64.7478V9.06699H56.8997V5.5719H76.7524V9.06699Z" fill="white" />
                                    <path d="M88.8754 22.0029C81.7704 22.0029 78.7181 19.297 78.7181 13.6509V5.5719H82.8628V13.648C82.8628 15.9147 83.4845 18.5049 88.8636 18.5049C94.2427 18.5049 94.8673 15.891 94.8673 13.648V5.5719H99.012V13.648C99.0357 19.2704 95.9627 22.0029 88.8754 22.0029Z" fill="white" />
                                    <path d="M122.053 5.5719V21.7685H116.399L105.386 9.62181V21.7685H101.241V5.5719H106.866L117.903 17.7364V5.5719H122.053Z" fill="white" />
                                    <path d="M128.522 8.88007V12.1674H141.45V15.1789H128.522V18.4663H141.45V21.7745H124.365V5.5719H141.45V8.88007H128.522Z" fill="white" />
                                    <path d="M168.162 21.7685H164.017V10.6632L157.3 21.7685H154.298L147.581 10.6632V21.7685H143.436V5.5719H149.061L155.826 17.0006L162.59 5.5719H168.215L168.162 21.7685Z" fill="white" />
                                    <path d="M51.6005 5.03789V21.9496H37.5118V8.55373C37.5118 8.55373 32.8491 8.77923 32.8491 16.7781V22.003H18.7278V16.3301C18.4317 8.77922 14.0651 8.55373 14.0651 8.55373V21.9466H0V5.03492H14.0651C14.0651 5.03492 17.2239 5.03491 18.7278 9.12635V0H32.8343V9.16789C34.2997 5.03789 37.497 5.03789 37.497 5.03789H51.6005Z" fill="white" />
                                    <path d="M173.988 7.38475C173.987 7.74199 173.88 8.09087 173.681 8.38729C173.482 8.68371 173.2 8.91437 172.87 9.05013C172.541 9.18589 172.178 9.22067 171.829 9.15004C171.479 9.07941 171.159 8.90656 170.907 8.65333C170.656 8.4001 170.485 8.07786 170.416 7.72733C170.347 7.3768 170.384 7.0137 170.521 6.68393C170.658 6.35417 170.89 6.07254 171.186 5.87461C171.483 5.67669 171.832 5.57135 172.188 5.57194C172.426 5.56872 172.662 5.61348 172.883 5.70355C173.103 5.79363 173.303 5.92718 173.471 6.09628C173.639 6.26538 173.771 6.46658 173.86 6.68792C173.949 6.90926 173.993 7.14623 173.988 7.38475ZM170.732 7.38475C170.738 7.67315 170.829 7.95326 170.994 8.18996C171.158 8.42666 171.389 8.60942 171.657 8.71537C171.924 8.82132 172.217 8.84573 172.499 8.78554C172.78 8.72536 173.038 8.58326 173.239 8.37704C173.44 8.17082 173.577 7.90965 173.63 7.62627C173.684 7.34288 173.653 7.04987 173.542 6.78395C173.43 6.51803 173.243 6.29101 173.003 6.13136C172.763 5.97171 172.482 5.88651 172.194 5.88644C171.999 5.88391 171.805 5.92119 171.624 5.99601C171.443 6.07084 171.279 6.18163 171.143 6.32172C171.006 6.46181 170.899 6.62826 170.828 6.81099C170.758 6.99371 170.725 7.1889 170.732 7.38475ZM173.15 7.08805H172.662C172.661 7.03053 172.649 6.97375 172.626 6.92105C172.603 6.86835 172.569 6.82081 172.528 6.78125C172.486 6.74169 172.437 6.71092 172.383 6.69074C172.329 6.67056 172.272 6.66139 172.215 6.66378C171.889 6.66378 171.723 6.93971 171.723 7.36992C171.723 7.80013 171.916 8.08496 172.221 8.08496C172.334 8.08433 172.442 8.04027 172.524 7.96188C172.605 7.88349 172.654 7.77674 172.659 7.66364H173.144C173.115 7.89198 172.998 8.09991 172.819 8.24376C172.639 8.38761 172.411 8.45618 172.182 8.43506C172.047 8.4374 171.913 8.411 171.788 8.35761C171.664 8.30422 171.552 8.22504 171.46 8.12527C171.369 8.02551 171.299 7.90741 171.256 7.77876C171.213 7.65011 171.198 7.51382 171.211 7.37883C171.198 7.23981 171.215 7.09957 171.26 6.96755C171.306 6.83554 171.379 6.71482 171.475 6.61358C171.571 6.51234 171.687 6.43291 171.816 6.38066C171.946 6.32841 172.085 6.30456 172.224 6.31071C172.45 6.29791 172.673 6.37257 172.847 6.51934C173.02 6.66611 173.131 6.87387 173.156 7.09993L173.15 7.08805Z" fill="white" />
                                    <path d="M130.89 7.69629C130.888 8.05268 130.781 8.40057 130.582 8.69604C130.384 8.99152 130.102 9.22134 129.773 9.35651C129.444 9.49168 129.082 9.52614 128.734 9.45553C128.385 9.38492 128.065 9.21243 127.814 8.9598C127.563 8.70717 127.393 8.38573 127.324 8.03605C127.255 7.68637 127.292 7.32411 127.428 6.995C127.565 6.6659 127.795 6.3847 128.091 6.18688C128.387 5.98905 128.734 5.88347 129.09 5.88346C129.328 5.88024 129.564 5.925 129.785 6.01508C130.005 6.10515 130.205 6.2387 130.373 6.40781C130.541 6.57691 130.673 6.77812 130.762 6.99946C130.851 7.2208 130.894 7.45777 130.89 7.69629ZM127.634 7.69629C127.641 7.98382 127.733 8.26274 127.898 8.49815C128.063 8.73356 128.293 8.91501 128.561 9.01983C128.828 9.12465 129.12 9.14817 129.401 9.08745C129.681 9.02673 129.938 8.88448 130.138 8.67846C130.338 8.47244 130.473 8.21182 130.527 7.92919C130.58 7.64655 130.549 7.35444 130.437 7.08941C130.326 6.82437 130.139 6.59816 129.9 6.43908C129.661 6.28 129.38 6.19509 129.093 6.19499C128.897 6.19244 128.703 6.22982 128.522 6.30482C128.341 6.37982 128.177 6.4909 128.041 6.63131C127.904 6.77171 127.797 6.93853 127.726 7.1216C127.656 7.30468 127.623 7.5002 127.631 7.69629H127.634ZM130.052 7.39959H129.564C129.563 7.34219 129.55 7.28557 129.527 7.23306C129.504 7.18055 129.47 7.13319 129.429 7.09372C129.387 7.05424 129.338 7.02342 129.285 7.0031C129.231 6.98277 129.174 6.97332 129.117 6.9753C128.791 6.9753 128.625 7.2542 128.625 7.68144C128.625 8.10868 128.818 8.39649 129.123 8.39649C129.235 8.39585 129.343 8.3521 129.423 8.27427C129.504 8.19644 129.553 8.09045 129.558 7.97814H130.046C130.017 8.20647 129.9 8.41441 129.72 8.55825C129.541 8.7021 129.313 8.77067 129.084 8.74956C128.949 8.75194 128.814 8.72547 128.689 8.6719C128.565 8.61834 128.453 8.53889 128.361 8.43879C128.269 8.33869 128.2 8.22022 128.157 8.09121C128.114 7.96219 128.099 7.82557 128.113 7.69035C128.1 7.55157 128.117 7.41165 128.163 7.28C128.209 7.14835 128.282 7.02802 128.378 6.92711C128.474 6.8262 128.59 6.74705 128.719 6.69498C128.848 6.6429 128.987 6.6191 129.126 6.6252C129.35 6.61461 129.57 6.68951 129.741 6.83483C129.912 6.98015 130.023 7.18511 130.049 7.40848L130.052 7.39959Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1601">
                                        <rect width="174" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button onClick={toggleDrawer}>
                                <FiMenu size={23} className='text-white' />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex flex-row items-center gap-x-12">
                            <ul className="flex items-center gap-x-8 text-lg">
                                <li>
                                    <Link
                                        href="/ai-data-sets"
                                        className={` ${pathname === "/ai-data-sets" ? "text-[#E7F056]  " : "text-white"}`}
                                    >
                                        Ai Data Sets
                                    </Link>
                                </li>
                                <li>

                                    <Link
                                        href="/browse-vocal"
                                        className={` ${pathname === "/browse-vocal" ? "text-[#E7F056]  " : "text-white"}`}
                                    >
                                        Browse Vocals
                                    </Link>
                                </li>
                                <li><Link className={` ${pathname === "/artist-library" ? "text-[#E7F056]  " : "text-white"}`} href="/artist-library">Artist Library</Link></li>
                                <li><Link className={` ${pathname === "/hire" ? "text-[#E7F056]  " : "text-white"}`} href="/hire">Hire</Link></li>
                            </ul>

                            <div className="relative">
                                <Link href="/cart">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center" >
                                        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.41724H2.4242C3.30818 1.41724 4.0039 2.35284 3.93024 3.42928L3.25088 13.4493C3.13629 15.0891 4.19215 16.4975 5.53449 16.4975H14.2515C15.4302 16.4975 16.4615 15.3104 16.5515 13.8718L16.9935 6.32663C17.0917 4.65663 16.0604 3.2985 14.6935 3.2985H4.12669" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.6638 21.5378C13.2288 21.5378 13.6869 20.9748 13.6869 20.2802C13.6869 19.5857 13.2288 19.0227 12.6638 19.0227C12.0987 19.0227 11.6406 19.5857 11.6406 20.2802C11.6406 20.9748 12.0987 21.5378 12.6638 21.5378Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.11566 21.5378C6.68072 21.5378 7.13878 20.9748 7.13878 20.2802C7.13878 19.5857 6.68072 19.0227 6.11566 19.0227C5.5506 19.0227 5.09253 19.5857 5.09253 20.2802C5.09253 20.9748 5.5506 21.5378 6.11566 21.5378Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.72949 7.45337H16.5515" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <span className="absolute -top-1 -right-1 bg-lime-300 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                                    </div>


                                </Link>
                            </div>

                            <button className="bg-black text-white px-6 py-2 cursor-pointer rounded-full font-medium hover:bg-gray-900">
                                <Link href={"/login"}>Log in</Link>
                            </button>
                        </nav>
                    </div>

                    {/* Backdrop for Drawer */}
                    {drawerOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={toggleDrawer}></div>
                    )}

                    {/* Mobile Drawer */}
                    <div className={`fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="p-4 flex justify-between items-center border-b">
                            <span className="text-lg font-bold">
                                <Link href="/">
                                    <svg width="174" height="22" viewBox="0 0 174 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_5_567)">
                                            <path d="M76.7524 9.06705H68.8925V21.7686H64.7479V9.06705H56.8997V5.57196H76.7524V9.06705Z" fill="black" />
                                            <path d="M88.8754 22.003C81.7704 22.003 78.7181 19.2971 78.7181 13.651V5.57196H82.8628V13.648C82.8628 15.9148 83.4845 18.5049 88.8636 18.5049C94.2427 18.5049 94.8673 15.8911 94.8673 13.648V5.57196H99.012V13.648C99.0357 19.2704 95.9627 22.003 88.8754 22.003Z" fill="black" />
                                            <path d="M122.053 5.57196V21.7686H116.399L105.386 9.62187V21.7686H101.241V5.57196H106.866L117.903 17.7365V5.57196H122.053Z" fill="black" />
                                            <path d="M128.522 8.88013V12.1675H141.45V15.179H128.522V18.4664H141.45V21.7745H124.365V5.57196H141.45V8.88013H128.522Z" fill="black" />
                                            <path d="M168.162 21.7686H164.017V10.6633L157.3 21.7686H154.298L147.581 10.6633V21.7686H143.436V5.57196H149.061L155.826 17.0007L162.59 5.57196H168.215L168.162 21.7686Z" fill="black" />
                                            <path d="M51.6005 5.03792V21.9496H37.5118V8.55376C37.5118 8.55376 32.8491 8.77926 32.8491 16.7782V22.003H18.7278V16.3302C18.4317 8.77925 14.0651 8.55376 14.0651 8.55376V21.9466H0V5.03495H14.0651C14.0651 5.03495 17.2239 5.03494 18.7278 9.12638V3.05176e-05H32.8343V9.16792C34.2997 5.03792 37.497 5.03792 37.497 5.03792H51.6005Z" fill="black" />
                                            <path d="M173.988 7.38475C173.987 7.74199 173.88 8.09087 173.681 8.38729C173.482 8.68371 173.2 8.91437 172.87 9.05013C172.541 9.18589 172.178 9.22067 171.829 9.15004C171.479 9.07941 171.159 8.90656 170.907 8.65333C170.656 8.4001 170.485 8.07786 170.416 7.72733C170.347 7.3768 170.384 7.0137 170.521 6.68393C170.658 6.35417 170.89 6.07254 171.186 5.87461C171.483 5.67669 171.832 5.57135 172.188 5.57194C172.426 5.56872 172.662 5.61348 172.883 5.70355C173.103 5.79363 173.303 5.92718 173.471 6.09628C173.639 6.26538 173.771 6.46658 173.86 6.68792C173.949 6.90926 173.993 7.14623 173.988 7.38475ZM170.732 7.38475C170.738 7.67315 170.829 7.95326 170.994 8.18996C171.158 8.42666 171.389 8.60942 171.657 8.71537C171.924 8.82132 172.217 8.84573 172.499 8.78554C172.78 8.72536 173.038 8.58326 173.239 8.37704C173.44 8.17082 173.577 7.90965 173.63 7.62627C173.684 7.34288 173.653 7.04987 173.542 6.78395C173.43 6.51803 173.243 6.29101 173.003 6.13136C172.763 5.97171 172.482 5.88651 172.194 5.88644C171.999 5.88391 171.805 5.92119 171.624 5.99601C171.443 6.07084 171.279 6.18163 171.143 6.32172C171.006 6.46181 170.899 6.62826 170.828 6.81099C170.758 6.99371 170.725 7.1889 170.732 7.38475ZM173.15 7.08805H172.662C172.661 7.03053 172.649 6.97375 172.626 6.92105C172.603 6.86835 172.569 6.82081 172.528 6.78125C172.486 6.74169 172.437 6.71092 172.383 6.69074C172.329 6.67056 172.272 6.66139 172.215 6.66378C171.889 6.66378 171.723 6.93971 171.723 7.36992C171.723 7.80013 171.916 8.08496 172.221 8.08496C172.334 8.08433 172.442 8.04027 172.524 7.96188C172.605 7.88349 172.654 7.77674 172.659 7.66364H173.144C173.115 7.89198 172.998 8.09991 172.819 8.24376C172.639 8.38761 172.411 8.45618 172.182 8.43506C172.047 8.4374 171.913 8.411 171.788 8.35761C171.664 8.30422 171.552 8.22504 171.46 8.12527C171.369 8.02551 171.299 7.90741 171.256 7.77876C171.213 7.65011 171.198 7.51382 171.211 7.37883C171.198 7.23981 171.215 7.09957 171.26 6.96755C171.306 6.83554 171.379 6.71482 171.475 6.61358C171.571 6.51234 171.687 6.43291 171.816 6.38066C171.946 6.32841 172.085 6.30456 172.224 6.31071C172.45 6.29791 172.673 6.37257 172.847 6.51934C173.02 6.66611 173.131 6.87387 173.156 7.09993L173.15 7.08805Z" fill="black" />
                                            <path d="M130.89 7.69629C130.888 8.05268 130.781 8.40057 130.582 8.69604C130.384 8.99152 130.102 9.22134 129.773 9.35651C129.444 9.49168 129.082 9.52614 128.734 9.45553C128.385 9.38492 128.065 9.21243 127.814 8.9598C127.563 8.70717 127.393 8.38573 127.324 8.03605C127.255 7.68637 127.292 7.32411 127.428 6.995C127.565 6.6659 127.795 6.3847 128.091 6.18688C128.387 5.98905 128.734 5.88347 129.09 5.88346C129.328 5.88024 129.564 5.925 129.785 6.01508C130.005 6.10515 130.205 6.2387 130.373 6.40781C130.541 6.57691 130.673 6.77812 130.762 6.99946C130.851 7.2208 130.894 7.45777 130.89 7.69629ZM127.634 7.69629C127.641 7.98382 127.733 8.26274 127.898 8.49815C128.063 8.73356 128.293 8.91501 128.561 9.01983C128.828 9.12465 129.12 9.14817 129.401 9.08745C129.681 9.02673 129.938 8.88448 130.138 8.67846C130.338 8.47244 130.473 8.21182 130.527 7.92919C130.58 7.64655 130.549 7.35444 130.437 7.08941C130.326 6.82437 130.139 6.59816 129.9 6.43908C129.661 6.28 129.38 6.19509 129.093 6.19499C128.897 6.19244 128.703 6.22982 128.522 6.30482C128.341 6.37982 128.177 6.4909 128.041 6.63131C127.904 6.77171 127.797 6.93853 127.726 7.1216C127.656 7.30468 127.623 7.5002 127.631 7.69629H127.634ZM130.052 7.39959H129.564C129.563 7.34219 129.55 7.28557 129.527 7.23306C129.504 7.18055 129.47 7.13319 129.429 7.09372C129.387 7.05424 129.338 7.02342 129.285 7.0031C129.231 6.98277 129.174 6.97332 129.117 6.9753C128.791 6.9753 128.625 7.2542 128.625 7.68144C128.625 8.10868 128.818 8.39649 129.123 8.39649C129.235 8.39585 129.343 8.3521 129.423 8.27427C129.504 8.19644 129.553 8.09045 129.558 7.97814H130.046C130.017 8.20647 129.9 8.41441 129.72 8.55825C129.541 8.7021 129.313 8.77067 129.084 8.74956C128.949 8.75194 128.814 8.72547 128.689 8.6719C128.565 8.61834 128.453 8.53889 128.361 8.43879C128.269 8.33869 128.2 8.22022 128.157 8.09121C128.114 7.96219 128.099 7.82557 128.113 7.69035C128.1 7.55157 128.117 7.41165 128.163 7.28C128.209 7.14835 128.282 7.02802 128.378 6.92711C128.474 6.8262 128.59 6.74705 128.719 6.69498C128.848 6.6429 128.987 6.6191 129.126 6.6252C129.35 6.61461 129.57 6.68951 129.741 6.83483C129.912 6.98015 130.023 7.18511 130.049 7.40848L130.052 7.39959Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5_567">
                                                <rect width="174" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </Link>
                            </span>
                            <button onClick={toggleDrawer}>
                                <FiX size={24} className='text-white' />
                            </button>
                        </div>
                        <ul className="flex flex-col p-4 gap-4">
                            <li>
                                <Link
                                    href="/ai-data-sets"
                                    className={` ${pathname === "/ai-data-sets" ? "text-[#E7F056]  " : "text-white"}`}
                                >
                                    Ai Data Sets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/browse-vocal"
                                    className={` ${pathname === "/browse-vocal" ? "text-[#E7F056]  " : "text-white"}`}
                                >
                                    Browse Vocals
                                </Link>
                            </li>
                            <li><Link className={` ${pathname === "/artist-library" ? "text-[#E7F056]  " : "text-white"}`} href="/artist-library">Artist Library</Link></li>
                            <li><Link className={` ${pathname === "/hire" ? "text-[#E7F056]  " : "text-white"}`} href="/hire">Hire</Link></li>
                            <li><Link className=' text-white ' href="/cart">Cart (0)</Link></li>
                            <li>
                                <button className="bg-white text-black px-6 py-2 rounded-full w-full">
                                    <Link href={"/login"}>Log in</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </>















            {/* browse vocal content  */}
            <div className='max-w-[1549px] mx-auto px-4 ' >
                <BrowseVocalBanner />
            </div>
            <div>
                <BrowseVocalMarque />
            </div>

            <div>
                <BrowseMusickVocalSlider />
            </div>
            <div className=' pb-12 ' >
                <BrowseAllVocal />
            </div>





            {/* footer  */}

            <div className='max-w-[1549px] mx-auto px-4' >
                <div className="max-w-[1539px] mx-auto">
                    {/* Logo */}
                    <div className="mx-auto flex justify-center">
                        <span>
                            <svg width="96" height="41" viewBox="0 0 96 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_2039)">
                                    <path d="M95.9945 9.38879V40.906H69.7846V15.941C69.7846 15.941 61.1104 16.3613 61.1104 31.2684V41.0055H34.84V30.4334C34.2893 16.3613 26.1658 15.941 26.1658 15.941V40.9005H0V9.38326H26.1658C26.1658 9.38326 32.0422 9.38325 34.84 17.0082V0H61.0829V17.0856C63.8091 9.38879 69.7571 9.38879 69.7571 9.38879H95.9945Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2039">
                                        <rect width="96" height="41" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                    </div>

                    {/* Divider */}
                    <div className="text-black border border-[#fff] "></div>

                    {/* Newsletter and Description */}
                    <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
                        <div>
                            <h1 className="font-bold text-3xl lg:text-[35px] leading-9 text-[#FFFFFF]">Sign-up to our newsletter</h1>
                            <div className="max-w-[478px] mt-4">
                                <p className="text-lg leading-6 text-[#FFFFFF]">
                                    Our newsletter is published every month and contains lots of inspiration and updates from music life at TUNEM.
                                </p>
                            </div>
                            <div className="mt-6">
                                <Link href="/register">
                                    <button className="w-[194px] rounded-2xl border border-[##FFFFFF]  text-[#FFFFFF] text-lg py-1.5 cursor-pointer ">
                                        REGISTER
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="  ">
                            <div className="max-w-[478px]">
                                <p className=" text-[#FFFFFF] text-end text-lg leading-6">
                                    Vocalfy boosts your career with the best vocals. We have unique and special singers, top song-writers, producers and professional recording studios to ensure you get the vocal you’ve been looking for.
                                </p>
                            </div>
                            <div className="mt-12 lg:mt-24 flex justify-end">
                                <h1 className=" text-[#FFFFFF] text-lg font-bold leading-9">FOLLOW US</h1>
                            </div>
                            <div className="flex gap-x-5 justify-end mt-4 text-white ">
                                <div className="  rounded-full">
                                    <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en" ><FaInstagramSquare className={'text-white'} size={25} /></a>
                                </div>
                                <div className="  rounded-full">
                                    <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en" ><FaTiktok className={'text-white'} size={25} /></a>
                                </div>
                                <div className="  rounded-full">
                                    <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en" ><BsDiscord className={'text-white'} size={25} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border border-[#FFFFFF] mt-12"></div>

                    {/* Payment Methods and Links */}
                    <div className="mt-7 pb-20 flex flex-col md:flex-row justify-between gap-10">
                        <div>
                            <h1 className='text-white text-lg leading-9 font-bold ' >Payment methods</h1>
                            <div className="flex items-center  mt-2 gap-4">
                                <div className=" rounded-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9861 6.91069C19.0396 4.12819 16.7436 1.99219 13.5866 1.99219H7.05757C6.90538 1.99224 6.7582 2.0466 6.64252 2.14551C6.52685 2.24441 6.45027 2.38135 6.42657 2.53169L3.81007 18.8797C3.79837 18.9538 3.80285 19.0295 3.82323 19.1017C3.8436 19.1738 3.87937 19.2407 3.92808 19.2978C3.97678 19.3548 4.03727 19.4006 4.10537 19.432C4.17348 19.4634 4.24758 19.4797 4.32257 19.4797H8.19107L7.58607 23.2657C7.57436 23.3398 7.57886 23.4156 7.59926 23.4878C7.61966 23.56 7.65548 23.6269 7.70424 23.684C7.753 23.741 7.81355 23.7868 7.88172 23.8181C7.94988 23.8495 8.02403 23.8657 8.09907 23.8657H11.2501C11.4026 23.8657 11.5381 23.8107 11.6536 23.7122C11.7691 23.6132 11.7881 23.4767 11.8116 23.3262L12.7366 17.8837C12.7601 17.7337 12.8366 17.5387 12.9526 17.4397C13.0681 17.3407 13.1691 17.2867 13.3211 17.2862H15.2501C18.3416 17.2862 20.9651 15.0892 21.4446 12.0327C21.7836 9.86269 20.8531 7.88919 18.9861 6.91069Z" fill="#001C64" />
                                        <path d="M9.02798 13.4502L8.06448 19.5602L7.45948 23.3922C7.44777 23.4663 7.45227 23.542 7.47267 23.6143C7.49308 23.6865 7.52889 23.7534 7.57765 23.8104C7.62642 23.8675 7.68697 23.9132 7.75513 23.9446C7.82329 23.976 7.89745 23.9922 7.97248 23.9922H11.3075C11.4596 23.992 11.6066 23.9376 11.7222 23.8387C11.8378 23.7398 11.9143 23.6029 11.938 23.4527L12.817 17.8827C12.8407 17.7325 12.9172 17.5956 13.0328 17.4968C13.1484 17.398 13.2954 17.3437 13.4475 17.3437H15.411C18.5025 17.3437 21.1255 15.0887 21.605 12.0322C21.945 9.86266 20.853 7.88916 18.986 6.91016C18.981 7.14116 18.961 7.37166 18.9255 7.60016C18.446 10.6562 15.8225 12.9117 12.731 12.9117H9.65848C9.5065 12.9117 9.3595 12.9659 9.24393 13.0646C9.12836 13.1633 9.05179 13.3 9.02798 13.4502Z" fill="#0070E0" />
                                        <path d="M8.06398 19.5601H4.18398C4.10896 19.5601 4.03482 19.5439 3.96668 19.5125C3.89853 19.4812 3.83801 19.4354 3.78929 19.3783C3.74056 19.3213 3.70479 19.2544 3.68446 19.1821C3.66412 19.1099 3.65969 19.0342 3.67148 18.9601L6.28748 2.36908C6.31119 2.21879 6.38779 2.08191 6.50348 1.98309C6.61917 1.88427 6.76634 1.83001 6.91848 1.83008H13.587C16.7435 1.83008 19.0395 4.12758 18.986 6.91008C18.2005 6.49808 17.2775 6.26258 16.266 6.26258H10.7065C10.5545 6.26273 10.4075 6.31708 10.2919 6.41587C10.1763 6.51466 10.0998 6.65142 10.076 6.80158L9.02848 13.4501L8.06398 19.5601Z" fill="#003087" />
                                    </svg>

                                </div>
                                <div className="  rounded-full">
                                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z" fill="#252525" />
                                        <path d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z" fill="#EB001B" />
                                        <path d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z" fill="#F79E1B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 4C13.2144 4.91221 14 6.36455 14 8.00037C14 9.63618 13.2144 11.0885 12 12.0007C10.7856 11.0885 10 9.63618 10 8.00037C10 6.36455 10.7856 4.91221 12 4Z" fill="#FF5F00" />
                                    </svg>

                                </div>
                                <div className="  rounded-full">
                                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_181783_2033)">
                                            <path d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z" fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5" />
                                            <path d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z" fill="#171E6C" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_181783_2033">
                                                <rect width="24" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <div className="  rounded-full">
                                    <FaCcApplePay className={"text-white"} size={20} />

                                </div>
                                <div className="  rounded-full">
                                    <FcGoogle size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="flex flex-wrap gap-10">
                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-lg text-white font-bold leading-9">TUNEM</li>
                                    <li><Link className="text-lg text-white leading-9" href="/tune-m-artist">Hire a Singer</Link></li>

                                    <li><Link className="text-lg text-white leading-9" href="/https://tunemcollective.com/">Courses</Link></li>
                                </ul>
                            </div>

                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-lg text-white font-bold leading-9">CONTACT</li>
                                    <li><Link className="text-lg text-white leading-9" href="/contact">Contact Us</Link></li>
                                    <li><Link className="text-lg text-white leading-9" href="/refund-policy">Refund Policy</Link></li>
                                    <li><Link className="text-lg text-white leading-9" href="/faq">FAQ</Link></li>

                                    <li><Link className="text-lg text-white leading-9" href="/term&condiction">Term & Condiction</Link></li>
                                    <li><Link className="text-lg text-white leading-9" href="/privacy-policy">Privacy Policy</Link></li>

                                    <li><Link className="text-lg text-[#fff] leading-9" href="/license">License</Link></li>
                                </ul>
                            </div>

                            <div>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-lg text-white font-bold leading-9">WORK WITH US</li>
                                    <li><Link className="text-lg text-white leading-9" href="/tune-m-artist">TUNEM for Artists</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page 
