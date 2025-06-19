"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
import MusickPlayer from '@/components/musick-player/MusickPlayer';
import MaxWidth from "@/components/max-width/MaxWidth";


type VocalItem = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    gender: string;
    license: string;
    price: string;
    type: string;
    image: string;
};

type FilterType = {
    genre: string;
    bpm: string;
    key: string;
    gender: string;
    license: string;
    type: string;
    latest: string
};

const BrowseAllVocal = () => {
    const genreRef = useRef<HTMLDivElement>(null);
    const bpmRef = useRef<HTMLDivElement>(null);
    const keyRef = useRef<HTMLDivElement>(null);
    const genderRef = useRef<HTMLDivElement>(null);
    const licenseRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);
    const latestRef = useRef<HTMLDivElement>(null);


    // Genre 

    const genres: string[] = ["Rock", "Pop", "Jazz", "Classical"];

    const [open, setOpen] = useState<boolean>(false);
    const [selectGenre, setSelectGenre] = useState<string[]>([]);

    function toggleGenre(genre: string): void {
        let newselectGenre: string[];
        if (selectGenre.includes(genre)) {
            newselectGenre = selectGenre.filter((g) => g !== genre);
        } else {
            newselectGenre = [...selectGenre, genre];
        }
        setSelectGenre(newselectGenre);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // BPM  start


    const bpm: number[] | string[] = [60, 80, 100, 120, 140, 160];


    const [selectedBPM, setSelectedBPM] = useState<string[]>([]);
    const [openBPM, setOpenBPM] = useState<boolean>(false);


    function toggleBPM(bpm: string): void {
        let newBPM: string[];
        if (selectedBPM.includes(bpm)) {
            newBPM = selectedBPM.filter((g) => g !== bpm);
        } else {
            newBPM = [...selectedBPM, bpm];
        }
        setSelectedBPM(newBPM);
        setOpenBPM(false);  // dropdown close korar jonno
    }


    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (bpmRef.current && !bpmRef.current.contains(event.target as Node)) {
                setOpenBPM(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const minBPM = Math.min(...bpm);
    const maxBPM = Math.max(...bpm);

    const [minValue, setMinValue] = useState(minBPM);
    const [maxValue, setMaxValue] = useState(maxBPM);

    const rangeWidth = 100; // in percent

    const getPercent = (value) =>
        ((value - minBPM) / (maxBPM - minBPM)) * rangeWidth;

    const getTrackBackground = () => {
        const minPercent = getPercent(minValue);
        const maxPercent = getPercent(maxValue);
        return `linear-gradient(to right, white 0%, white ${minPercent}%, yellow ${minPercent}%, yellow ${maxPercent}%, white ${maxPercent}%, white 100%)`;
    };


    // BPM  end


    // Key  start
    const keys: string[] = ["60", "80", "100", "120", "140", "160"];
    const [selectedKey, setSelectedKey] = useState<string[]>([]);
    const [openKey, setOpenKey] = useState<boolean>(false);

    function toggleKey(keyValue: string, genderValue?: string): void {
        // Update selected keys
        const newKey = selectedKey.includes(keyValue)
            ? selectedKey.filter((g) => g !== keyValue)
            : [...selectedKey, keyValue];

        setSelectedKey(newKey);
        setOpenKey(false); // Close dropdown

        // Update selected gender if `genderValue` is provided
        if (genderValue) {
            setSelectedGender((prev) =>
                prev.includes(genderValue)
                    ? prev.filter((i) => i !== genderValue)
                    : [...prev, genderValue]
            );
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (keyRef.current && !keyRef.current.contains(event.target as Node)) {
                setOpenKey(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Key end


    // Gender  start
    const gender: string[] = ["male", "female"];
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [openGender, setOpenGender] = useState<boolean>(false);

    function toggleGender(genderValue: string): void {
        const newGender = selectedGender.includes(genderValue)
            ? selectedGender.filter((g) => g !== genderValue)
            : [...selectedGender, genderValue];

        setSelectedGender((prev) =>
            prev.includes(genderValue) ? prev.filter((i) => i !== genderValue) : [...prev, genderValue]
        );


        setSelectedGender(newGender);
        setOpenGender(false); // Close dropdown

    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genderRef.current && !genderRef.current.contains(event.target as Node)) {
                setOpenGender(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // Gender end


    // License  start
    const License: string[] = [
        "Creative Commons",
        "Royalty Free",
        "Public Domain",
        "All Rights Reserved",
    ];

    const [selectedLicense, setSelectedLicense] = useState<string[]>([]);
    const [openLicense, setOpenLicense] = useState<boolean>(false);

    function toggleLicense(licenseValue: string): void {
        let newLicense: string[];
        if (selectedLicense.includes(licenseValue)) {
            newLicense = selectedLicense.filter((g) => g !== licenseValue);
            setSelectedLicense((prev) =>
                prev.includes(licenseValue) ? prev.filter((i) => i !== licenseValue) : [...prev, licenseValue]
            );
        } else {
            newLicense = [...selectedLicense, licenseValue];
        }
        setSelectedLicense(newLicense); // ✅ Corrected here
        setOpenLicense(false); // dropdown close
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (licenseRef.current && !licenseRef.current.contains(event.target as Node)) {
                setOpenLicense(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // License end


    // Type  start
    const type: string[] = [
        "Rock",
        "Pop",
        "Jazz",
        "Classical",
        "Hip Hop",
        "Electronic",
        "Country",
        "Reggae",
        "Blues",
        "Folk",
    ];

    const [selectedType, setSelectedType] = useState<string[]>([]);
    const [openType, setOpenType] = useState<boolean>(false);

    function toggleType(type: string): void {
        let newType: string[];
        if (selectedType.includes(type)) {
            newType = selectedType.filter((g) => g !== type);
        } else {
            newType = [...selectedType, type];
        }
        setSelectedType((prev) =>
            prev.includes(type) ? prev.filter((i) => i !== type) : [...prev, type]
        );
        setSelectedType(newType); // ✅ Corrected here
        setOpenType(false); // dropdown close
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
                setOpenType(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // Type end


    // Latest  start
    const latest: string[] = ["60", "80", "100", "120", "140", "160"];


    const [selectLatest, setselectLatest] = useState<string[]>([]);
    const [openLatest, setOpenLatest] = useState<boolean>(false);

    function toggleLatest(latestValue: string): void {
        const newLatest = selectLatest.includes(latestValue)
            ? selectLatest.filter((g) => g !== latestValue)
            : [...selectLatest, latestValue];

        setselectLatest((prev) =>
            prev.includes(latestValue) ? prev.filter((i) => i !== latestValue) : [...prev, latestValue]
        );

        setselectLatest(newLatest);
        setOpenLatest(false)
        setOpenKey(false); // Close dropdown
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (latestRef.current && !latestRef.current.contains(event.target as Node)) {
                setOpenLatest(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Latest end


    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<FilterType>({
        genre: '',
        bpm: '',
        key: '',
        gender: '',
        license: '',
        type: '',
        latest: "",
    });
    const [data, setData] = useState<VocalItem[]>([]);

    useEffect(() => {
        setData([
            {
                id: 1,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-1.png",
            },
            {
                id: 2,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-2.png",
            },
            {
                id: 3,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-3.png",
            },
            {
                id: 4,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-4.png",
            },
            {
                id: 5,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-5.png",
            },
            {
                id: 6,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-6.png",
            },
            {
                id: 7,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-7.png",
            },
            {
                id: 8,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-8.png",
            },
            {
                id: 9,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-9.png",
            },
            {
                id: 10,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-10.png",
            },
            {
                id: 11,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-5.png",
            },


        ]);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (key: keyof FilterType, value: string) => {
        setFilter((prev) => ({ ...prev, [key]: value }));
    };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter.genre ? item.genre === filter.genre : true) &&
        (filter.bpm ? item.bpm === filter.bpm : true) &&
        (filter.key ? item.key === filter.key : true) &&
        (filter.gender ? item.gender === filter.gender : true) &&
        (filter.license ? item.license === filter.license : true) &&
        (filter.type ? item.type === filter.type : true)
    );

    const [visibleData, setVisibleData] = useState(10)

    const clearSearch = () => {
        setFilter("")
        setSearchTerm("")
    }


    const addToCard = (id: number) => {
        toast.success('Added to cart successfully');
        console.log(id)
    }


    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const nextTrack = () => {
        if (currentIndex !== null) {
            const nextIndex = (currentIndex + 1) % data.length;
            setCurrentIndex(nextIndex);
        }
    };

    const prevTrack = () => {
        if (currentIndex !== null) {
            const prevIndex = (currentIndex - 1 + data.length) % data.length;
            setCurrentIndex(prevIndex);
        }
    };

    const [playingId, setPlayingId] = useState(null);

    const handlePlayPause = (id) => {
        if (playingId === id) {
            // Pause current track
            setPlayingId(null);
            // pauseAudio()
        } else {
            // Play selected track
            setPlayingId(id);
            // playAudio(id)
        }
    };


    return (
        <>
            <MaxWidth>
                <div style={{ fontFamily: 'Favorit' }} className=" mx-auto  ">
                    <div className=' mt-12 mb-6 '>
                        <div className=' border border-white '></div>
                    </div>
                    <div className=' flex md:flex-row lg:flex-row flex-col justify-between items-center mb-11  '>
                        <div className='flex-1'>
                            <h1 className=' lg:text-3xl md:text-2xl font-bold leading-9 text-white '>Browse <span
                                className=' text-[#818080] '>Vocals</span></h1>
                        </div>

                        <div className='  flex-1 lg:flex flex-col md:flex-row gap-14 relative   '>
                            <div className='   '>
                                <button onClick={clearSearch}
                                    className='  border-none text-[#FFFFFF] text-lg underline mt-4  cursor-pointer   '>Clear
                                    filters
                                </button>
                            </div>

                        </div>
                    </div>


                    <div
                        className=" hidden lg:grid items-center lg:grid-cols-6 gap-x-10  justify-between mb-6 ">
                        <div
                            className="  text-[#E7F056] text-[10px] md:text-[16px]">
                            <div className="relative md:mt-0 mt-10 ">
                                <input
                                    className="border border-white focus:outline-0 w-full  py-2.5 px-3 rounded-2xl text-white  bg-transparent placeholder-gray-400 placeholder:text-[16px] placeholder:ml-3.5  "
                                    placeholder="SEARCH"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* latest  */}
                        <div className="relative  " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center  flex-wrap gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    {selectLatest.length > 0 ? <>Selected {selectLatest.length}</> : "Latest"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLatest && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-hidden border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {
                                            latest.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedType.includes(item)}
                                                        onChange={(e) => {
                                                            toggleLatest(item);
                                                            handleFilterChange('latest', e.target.checked ? item : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{item}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/*gender*/}

                        <div
                            className="    text-center  text-[#E7F056] text-[10px] md:text-[16px]">

                            {/* genre  */}

                            <div className="relative w-full  " ref={genreRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F] text-white md:px-5 px-3 py-3 rounded-2xl  w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpen(!open)}
                                >
                                    {/* Icon on RIGHT side */}
                                    {open ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    {/* Only show selected count */}
                                    <span className="w-28 text-white md:text-lg ">
                                        {selectGenre.length > 0 ? <>Selected {selectGenre.length}</> : "Genre"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full  overflow-hidden border border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                        >
                                            {genres.map((genre) => (
                                                <label
                                                    key={genre}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectGenre.includes(genre)}
                                                        onChange={(e) => {
                                                            toggleGenre(genre);
                                                            handleFilterChange('genre', e.target.checked ? genre : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg   ">{genre}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div
                            className=" text-center   text-[#E7F056] text-[10px] md:text-[16px]">

                            {/* Gender */}
                            <div className="relative " ref={genderRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenGender(!openGender)}
                                >
                                    {openGender ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg  ">
                                        {selectedGender.length > 0 ? <>Selected {selectedGender.length}</> : "Gender"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openGender && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {gender.map((gender) => (
                                                <label
                                                    key={gender}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedGender.includes(gender)}
                                                        onChange={(e) => {
                                                            toggleGender(gender);
                                                            handleFilterChange('gender', e.target.checked ? gender : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg ">{gender}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                        </div>


                        <div
                            className=" text-[#E7F056] text-[10px]  space-y-3 md:text-[16px]">
                            {/* License */}

                            <div className="relative  " ref={licenseRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenLicense(!openLicense)}
                                >
                                    {openLicense ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg   ">
                                        {selectedLicense.length > 0 ? <>Selected {selectedLicense.length}</> : "License"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openLicense && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full    border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {License.map((license) => (
                                                <label
                                                    key={license}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedLicense.includes(license)}
                                                        onChange={(e) => {
                                                            toggleLicense(license);
                                                            handleFilterChange('license', e.target.checked ? license : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{license}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>


                        <div
                            className=" text-[#E7F056] text-[10px] md:text-[16px]">
                            {/* Type  */}
                            <div className="relative " ref={typeRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenType(!openType)}
                                >
                                    {openType ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg   ">
                                        {selectedType.length > 0 ? <>Selected {selectedType.length}</> : "Type"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openType && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-y-scroll  border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {type.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedType.includes(item)}
                                                        onChange={(e) => {
                                                            toggleType(item); // ✅ Efficient toggle
                                                            handleFilterChange("type", e.target.checked ? item : "");
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{item}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                        </div>

                    </div>


                    <div className=" space-y-2 w-full lg:block hidden  ">
                        {filteredData.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item.id}
                                className={`cursor-pointer flex items-center  rounded-md ${i % 2 === 0 ? 'bg-[#201F1F]' : 'bg-[#000000]'
                                    }`}
                            >
                                {/* Artwork + play button */}
                                <div className="lg:py-4 py-1 flex-1 px-3 lg:px-6">
                                    <div className="relative w-18 h-18 ">
                                        <Link href={`/browse-vocal/${item?.id}`}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={18}
                                                height={18}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        </Link>

                                        <button
                                            onClick={() => handlePlayPause(item.id)}
                                            className="absolute top-1/2 -right-16 -translate-x-1/2 -translate-y-1/2
                 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                                        >
                                            {playingId === item.id ? (
                                                // Pause Icon
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black"
                                                    viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                                </svg>
                                            ) : (
                                                // Play Icon
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black"
                                                    viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="w-full  ml-3 lg:py-4 lg:px-6 px-3">
                                    <h3 className="text-white text-sm md:text-sm">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Artist */}
                                <div className="lg:py-4 w-full lg:px-6 px-3">
                                    <p className="text-white text-sm">
                                        {item.artist}
                                    </p>
                                </div>

                                {/* Genre */}
                                <div className="lg:py-4 w-full py-1 px-2 lg:px-6 text-center">
                                    <p className="text-white text-sm">
                                        {item.genre}
                                    </p>
                                </div>

                                {/* Gender */}
                                <div className="lg:py-4 py-1 w-full px-2 lg:px-6 text-center">
                                    <p className="text-white text-sm">
                                        {item.gender}
                                    </p>
                                </div>

                                {/* License badge */}
                                <div className="lg:py-4 w-full py-1 px-2 lg:px-6">
                                    <span
                                        className={`block text-center rounded-2xl py-1 px-3 text-sm
                                     ${item.license === 'EXCLUSIVE'
                                                ? 'bg-[#80BC02]'
                                                : item.license === 'NON-EXCLUSIVE'
                                                    ? 'bg-[#818080]'
                                                    : item.license === 'PREMIUM'
                                                        ? 'bg-[#00C2CE]'
                                                        : ''
                                            }`}
                                    >
                                        {item.license}
                                    </span>
                                </div>

                                {/* Cart icon */}
                                <div className="py-4 w-full px-4 text-center">
                                    <span onClick={() => addToCard(item.id)} className="inline-block">
                                        <svg width="22" height="28" viewBox="0 0 22 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 1.48486H2.78025C3.88523 1.48486 4.75488 2.65437 4.6628 3.99992L3.8136 16.5249C3.67036 18.5747 4.99019 20.3352 6.66812 20.3352H17.5644C19.0377 20.3352 20.3269 18.8514 20.4394 17.0531L20.9919 7.62161C21.1147 5.53411 19.8255 3.83644 18.1169 3.83644H4.90836"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M15.5797 26.6355C16.2861 26.6355 16.8586 25.9318 16.8586 25.0636C16.8586 24.1954 16.2861 23.4917 15.5797 23.4917C14.8733 23.4917 14.3008 24.1954 14.3008 25.0636C14.3008 25.9318 14.8733 26.6355 15.5797 26.6355Z"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M7.39463 26.6355C8.10096 26.6355 8.67354 25.9318 8.67354 25.0636C8.67354 24.1954 8.10096 23.4917 7.39463 23.4917C6.68831 23.4917 6.11572 24.1954 6.11572 25.0636C6.11572 25.9318 6.68831 26.6355 7.39463 26.6355Z"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M8.16187 9.03003H20.4394" stroke="#E7F056" strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>

                                    </span>
                                </div>

                                {/* Price */}
                                <div className="lg:py-4 py-1 px-3 lg:px-6">
                                    <span
                                        className="text-[#000000] font-bold text-[10px] lg:text-lg bg-[#E7F056] text-center rounded-2xl px-2">
                                        {item.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    {/*small device */}


                    <div
                        className=" grid grid-cols-3 gap-x-6 gap-y-5  items-center lg:hidden ">
                        <div
                            className="  text-[#E7F056] text-[10px] md:text-[16px]">
                            <div className="relative md:mt-0  ">
                                <input
                                    className="border border-white focus:outline-0 w-full  py-2.5 px-3 rounded-2xl text-white  bg-transparent placeholder-gray-400 placeholder:text-[16px] placeholder:ml-3.5  "
                                    placeholder="SEARCH"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* latest  */}
                        <div className="relative  " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center  flex-wrap gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    {selectLatest.length > 0 ? <>Selected {selectLatest.length}</> : "Latest"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLatest && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-hidden border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {
                                            latest.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedType.includes(item)}
                                                        onChange={(e) => {
                                                            toggleLatest(item);
                                                            handleFilterChange('latest', e.target.checked ? item : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{item}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/*gender*/}

                        <div
                            className="    text-center  text-[#E7F056] text-[10px] md:text-[16px]">

                            {/* genre  */}

                            <div className="relative w-full  " ref={genreRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F] text-white md:px-5 px-3 py-3 rounded-2xl  w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpen(!open)}
                                >
                                    {/* Icon on RIGHT side */}
                                    {open ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    {/* Only show selected count */}
                                    <span className="w-28 text-white md:text-lg ">
                                        {selectGenre.length > 0 ? <>Selected {selectGenre.length}</> : "Genre"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-hidden border border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                        >
                                            {genres.map((genre) => (
                                                <label
                                                    key={genre}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectGenre.includes(genre)}
                                                        onChange={(e) => {
                                                            toggleGenre(genre);
                                                            handleFilterChange('genre', e.target.checked ? genre : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg   ">{genre}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div
                            className=" text-center   text-[#E7F056] text-[10px] md:text-[16px]">

                            {/* Gender */}
                            <div className="relative " ref={genderRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenGender(!openGender)}
                                >
                                    {openGender ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg  ">
                                        {selectedGender.length > 0 ? <>Selected {selectedGender.length}</> : "Gender"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openGender && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {gender.map((gender) => (
                                                <label
                                                    key={gender}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedGender.includes(gender)}
                                                        onChange={(e) => {
                                                            toggleGender(gender);
                                                            handleFilterChange('gender', e.target.checked ? gender : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg ">{gender}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                        </div>


                        <div
                            className=" text-[#E7F056] text-[10px]  space-y-3 md:text-[16px]">
                            {/* License */}

                            <div className="relative  " ref={licenseRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenLicense(!openLicense)}
                                >
                                    {openLicense ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg   ">
                                        {selectedLicense.length > 0 ? <>Selected {selectedLicense.length}</> : "License"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openLicense && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full    border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {License.map((license) => (
                                                <label
                                                    key={license}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedLicense.includes(license)}
                                                        onChange={(e) => {
                                                            toggleLicense(license);
                                                            handleFilterChange('license', e.target.checked ? license : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{license}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>


                        <div
                            className=" text-[#E7F056] text-[10px] md:text-[16px]">
                            {/* Type  */}
                            <div className="relative " ref={typeRef}>
                                <button
                                    type="button"
                                    className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                    onClick={() => setOpenType(!openType)}
                                >
                                    {openType ? (
                                        <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    ) : (
                                        <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                    )}

                                    <span className="w-28 text-white md:text-lg   ">
                                        {selectedType.length > 0 ? <>Selected {selectedType.length}</> : "Type"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openType && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-y-scroll  border-gray-700 shadow-lg"
                                            style={{ top: "calc(100% + 0.5rem)" }}
                                        >
                                            {type.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedType.includes(item)}
                                                        onChange={(e) => {
                                                            toggleType(item); // ✅ Efficient toggle
                                                            handleFilterChange("type", e.target.checked ? item : "");
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{item}</span>
                                                </label>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                        </div>

                    </div>


                    <div style={{ fontFamily: 'Favorit' }} className=" space-y-2 w-full   lg:hidden my-8  ">
                        {filteredData.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item.id}
                                className={`cursor-pointer my-4  rounded-md ${i % 2 === 0 ? 'bg-[#201F1F] py-4 ' : 'bg-[#000000]'
                                    }`}
                            >
                                {/* Artwork + play button */}
                                <div className="lg:py-4 py-1 flex-1 px-3 lg:px-6">
                                    <div
                                        className="relative ">
                                        <Link href={`/browse-vocal/${item?.id}`}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={18}
                                                height={18}
                                                className="rounded-lg w-full contrast-75 object-cover"
                                            />
                                        </Link>
                                        <button
                                            onClick={() => handlePlayPause(item.id)}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                                        >
                                            {playingId === item.id ? (
                                                // Pause icon
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-black"
                                                    viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                                </svg>
                                            ) : (
                                                // Play icon
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-black"
                                                    viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="w-full lg:py-4 lg:px-6 px-3">
                                    <h3 className="text-white text-sm border  text-center my-3   ">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Artist */}
                                <div className="lg:py-4 w-full lg:px-6 px-3">
                                    <p className="text-white text-center">
                                        {item.artist}
                                    </p>
                                </div>

                                {/* Genre */}
                                <div className="lg:py-4 w-full py-1 px-2 lg:px-6 text-center">
                                    <p className="text-white text-center">
                                        {item.genre}
                                    </p>
                                </div>

                                {/* Gender */}
                                <div className="lg:py-4 py-1 w-full px-2 lg:px-6 text-center">
                                    <p className="text-white text-center">
                                        {item.gender}
                                    </p>
                                </div>

                                {/* License badge */}
                                <div className="lg:py-4 w-[60%] block mx-auto py-1 px-2">
                                    <span
                                        className={`block text-center rounded-2xl py-2 px-4 font-bold
                                     ${item.license === 'EXCLUSIVE'
                                                ? 'bg-[#80BC02]'
                                                : item.license === 'NON-EXCLUSIVE'
                                                    ? 'bg-[#818080]'
                                                    : item.license === 'PREMIUM'
                                                        ? 'bg-[#00C2CE]'
                                                        : ''
                                            }`}
                                    >
                                        {item.license}
                                    </span>
                                </div>

                                {/* Cart icon */}
                                <div className="py-4 px-4 text-center">
                                    <span onClick={() => addToCard(item.id)} className="inline-block">
                                        <svg width="22" height="28" viewBox="0 0 22 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 1.48486H2.78025C3.88523 1.48486 4.75488 2.65437 4.6628 3.99992L3.8136 16.5249C3.67036 18.5747 4.99019 20.3352 6.66812 20.3352H17.5644C19.0377 20.3352 20.3269 18.8514 20.4394 17.0531L20.9919 7.62161C21.1147 5.53411 19.8255 3.83644 18.1169 3.83644H4.90836"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M15.5797 26.6355C16.2861 26.6355 16.8586 25.9318 16.8586 25.0636C16.8586 24.1954 16.2861 23.4917 15.5797 23.4917C14.8733 23.4917 14.3008 24.1954 14.3008 25.0636C14.3008 25.9318 14.8733 26.6355 15.5797 26.6355Z"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path
                                                d="M7.39463 26.6355C8.10096 26.6355 8.67354 25.9318 8.67354 25.0636C8.67354 24.1954 8.10096 23.4917 7.39463 23.4917C6.68831 23.4917 6.11572 24.1954 6.11572 25.0636C6.11572 25.9318 6.68831 26.6355 7.39463 26.6355Z"
                                                stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M8.16187 9.03003H20.4394" stroke="#E7F056" strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>

                                    </span>
                                </div>

                                {/* Price */}
                                <div className=" block mx-auto w-[30%]  text-center mb-6  ">
                                    <span
                                        className="text-[#000000] px-4 py-2 rounded-2xl font-bold  bg-[#E7F056] ">
                                        {item.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className='  mt-14 mb-20 flex flex-row justify-center '>

                        <div style={{ fontFamily: "" }}>
                            {
                                visibleData < filteredData.length && (
                                    <button onClick={() => {
                                        setVisibleData(prev => prev + 10)
                                    }}
                                        className=' mt-4 lg:mt-0 rounded-2xl border border-white text-white px-6 py-2 text-sm cursor-pointer   '>LOAD
                                        MORE VOCALS</button>
                                )
                            }
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-5">
                        {/* Box 1 */}
                        <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="text-3xl font-bold leading-9">100% Royalty free</h1>
                            <p className="mt-6 text-lg leading-6">
                                Use your vocals anywhere. No limits. Cleared for release. Keep all royalties.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="text-3xl font-bold leading-9">Yours forever</h1>
                            <p className="mt-6 text-lg leading-6">
                                Dry vocal stems, Licence and Invoice emailed after purchase. Instrumental at an extra
                                cost.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-[#201F1F]  p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="text-3xl font-bold leading-9">Vocal love guarantee</h1>
                            <p className="mt-6 text-lg leading-6">
                                Don’t love your existing vocal? We’ll replace it with a new one!
                            </p>
                        </div>
                    </div>


                    <div
                        className='  flex lg:flex-row flex-col items-start justify-between relative gap-5 lg:mt-40 mt-8 '>
                        {/* left side  */}
                        <div>
                            <div className=' max-w-[411px] '>
                                <h1 className=' text-2xl lg:text-[35px] font-bold text-[#ffffff] leading-9 '>
                                    Vocals from the Industry’s Best
                                </h1>
                            </div>

                            <div className=' max-w-[478px] lg:mt-5 mt-3 '>
                                <h1 className=' lg:text-lg text-[#ffffff] leading-6 font-thin '>Get access to top
                                    featured
                                    artists and rising voices, professionally recorded in studio environments. All
                                    vocals
                                    come from credited singers behind major releases — trusted by producers and labels
                                    worldwide.</h1>
                            </div>


                            <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-5 space-y-2  ">
                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="text-[#ffffff] font-bold lg:text-xl mb-4">100% Royalty-Free</p>
                                        <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                            All vocals on TuneM are cleared for commercial use. You can release your
                                            music
                                            on any platform and keep 100% of the royalties — no licenses, no revenue
                                            splits,
                                            no restrictions.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="text-[#ffffff] font-bold lg:text-xl mb-4">Lifetime Use</p>
                                        <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                            Receive your dry vocal stems, invoice, and confirmation by email after
                                            purchase.
                                            MIDI files sold separately if required.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] '>

                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="text-[#ffffff] font-bold lg:text-xl mb-4">Trusted Agreements</p>
                                        <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                            Clear, professional, and built to protect you. Every vocal comes with a
                                            downloadable license — no hidden terms, no obstacles, release your music
                                            with no
                                            limits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* right side  */}
                        <div>
                            <Image src={"/images/home-page/coveredImg.png"}
                                className=' object-cover rounded-lg block mx-auto ' width={652} height={654}
                                alt='....' />
                        </div>
                    </div>


                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />

                </div>


                {showModal && currentIndex !== null && (
                    <MusickPlayer
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        currentTrack={data[currentIndex]}
                        nextTrack={nextTrack}
                        prevTrack={prevTrack}
                    />
                )}
            </MaxWidth>
            <div
                className="bg-[url('/images/home-page/tunemImg.png')] h-[503px] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                <div className="relative z-10 mt-20 ">
                    <h1 style={{ fontFamily: 'Favorit' }} className="text-center text-[#E7F056] font-bold lg:text-4xl text-lg ">
                        Become a TuneM Artist.
                    </h1>

                    <div style={{ fontFamily: 'Favorit' }} className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                        <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                            We work with talented singers and songwriters ready to take their voice further. Expand
                            your audience, get discovered, and join our global music network. </p>
                    </div>
                    <div>
                        <Link href={"/tune-m-artist"}>
                            <button style={{ fontFamily: 'Favorit' }}
                                className="cursor-pointer text-[#E7F056] text-sm  px-4 py-2 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                                GET STARTED
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BrowseAllVocal;

