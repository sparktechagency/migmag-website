"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import MusickPlayer from '@/components/musick-player/MusickPlayer';
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
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


    // const addToCard = (id: number) => {
    //     toast.success('Added to cart successfully');
    //     console.log(id)
    // }


    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [playingId, setPlayingId] = useState(null);

    const handleOpenModal = (index: number) => {
        if (currentIndex === index && showModal) {
            // Pause if already playing
            setShowModal(false);
            setCurrentIndex(null);
        } else {
            // Play the selected item
            setCurrentIndex(index);
            setShowModal(true);
        }
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

    // const [playingId, setPlayingId] = useState(null);

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
                <div style={{ fontFamily: 'Favorit' }} className="  mx-auto   ">
                    <div className=' mt-12 mb-6 '>
                        <div className=' border border-white '></div>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mb-11 gap-14'>
                        {/* Title Section */}
                        <div className='flex-1 w-full'>
                            <h1 className='lg:text-3xl md:text-2xl text-xl font-bold leading-9 text-white'>
                                Browse <span className='text-[#818080]'>Vocals</span>
                            </h1>
                        </div>

                        {/* Clear Filters Button */}
                        <div className='w-full md:w-auto text-center mt-6 md:text-right'>
                            <button
                                onClick={clearSearch}
                                className='text-white text-lg underline mt-12 md:mt-0 cursor-pointer'
                            >
                                Clear filters
                            </button>
                        </div>

                        {/* Search Input Section */}
                        <div className="relative w-full md:w-[300px] lg:w-[400px]">
                            <input
                                className="w-full border border-white focus:outline-0 py-2.5 rounded-2xl text-white pl-10 pr-6 bg-transparent placeholder-gray-400 placeholder:text-[16px]"
                                placeholder="SEARCH"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            {/* Search Icon */}
                            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white w-5 h-5" />
                        </div>


                    </div>


                    <div
                        className=" hidden lg:grid lg:gap-4 lg:grid-cols-4  xl:flex  2xl:flex items-center justify-between gap-x-4   max-w-[1539px]  mx-auto   mb-6  ">


                        {/* BPM */}

                        <div className="relative w-full  " ref={bpmRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenBPM(!openBPM)}
                            >
                                {openBPM ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    BPM
                                </span>
                            </button>

                            <AnimatePresence>
                                {openBPM && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
                                    >
                                        <div
                                            ref={bpmRef}
                                            className="bg-[#201F1F] rounded-2xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-auto"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-white text-xl font-semibold">Filter By BPM</h2>
                                                <button onClick={() => setOpenBPM(false)}
                                                    className="cursor-pointer text-white text-2xl">×
                                                </button>
                                            </div>

                                            <div className="flex flex-col   gap-6">


                                                <div className="flex flex-col items-center gap-4">
                                                    {/* Selected BPM and Range Input */}
                                                    <div className="relative w-full pt-8">
                                                        {/* Number Labels */}
                                                        <div
                                                            className="absolute  -top-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(minValue)}% - 20px)` }}
                                                        >
                                                            {minValue.toFixed(2)}
                                                        </div>
                                                        <div
                                                            className="absolute  -top-4  -ml-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(maxValue)}% - 20px)` }}
                                                        >
                                                            {maxValue.toFixed(2)}
                                                        </div>

                                                        {/* Track */}
                                                        <div
                                                            className="w-full h-2 rounded-full"
                                                            style={{ background: getTrackBackground() }}
                                                        />

                                                        {/* Left Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={minValue}
                                                            onChange={(e) => {
                                                                const val = Math.min(Number(e.target.value), maxValue - 1);
                                                                setMinValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />

                                                        {/* Right Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={maxValue}
                                                            onChange={(e) => {
                                                                const val = Math.max(Number(e.target.value), minValue + 1);
                                                                setMaxValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="flex justify-center items-center gap-4 w-full">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBPM(0); // or default value
                                                                handleFilterChange("bpm", "");
                                                                setOpenBPM(false)
                                                            }}
                                                            className="bg-gray-700 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition"
                                                        >
                                                            Reset
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                handleFilterChange("bpm", [minValue, maxValue]); // ⬅ send the selected range
                                                                setSelectedBPM([minValue, maxValue]);           // ⬅ store the selection
                                                                setOpenBPM(false);                              // ⬅ close the modal
                                                            }}
                                                            className="bg-[#E7F056] cursor-pointer text-black px-4 py-1 font-semibold rounded-lg transition"
                                                        >
                                                            Filter
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/*key start */}


                        <div className="relative w-full " ref={keyRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenKey(!openKey)}
                            >
                                {/* Icon on RIGHT side */}
                                {openKey ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectGenre.length > 0 ? <>Selected {selectedKey.length}</> : "Key"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openKey && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {keys.map((key) => (
                                            <label
                                                key={key}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectGenre.includes(key)}
                                                    onChange={(e) => {
                                                        toggleGenre(key);
                                                        handleFilterChange('key', e.target.checked ? key : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg   ">{key}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        <div className="relative w-full " ref={genreRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpen(!open)}
                            >
                                {/* Icon on RIGHT side */}
                                {open ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* Gender */}

                        <div className="relative w-full " ref={genderRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenGender(!openGender)}
                            >
                                {openGender ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                        {/* License */}

                        <div className="relative w-full " ref={licenseRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLicense(!openLicense)}
                            >
                                {openLicense ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* Type  */}


                        <div className="relative w-full " ref={typeRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenType(!openType)}
                            >
                                {openType ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* latest  */}


                        <div className="relative w-full " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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

                        {/*key */}


                    </div>


                    {/* wrapper — keeps the old horizontal-scroll safety net */}
                    <div className=" lg:block hidden space-y-4">
                        {filteredData.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item.id}
                                className={`cursor-pointer rounded-md p-4
        ${i % 2 === 0 ? 'bg-[#201F1F]' : 'bg-[#000000]'}
        flex flex-col lg:flex-row lg:items-center gap-4`}
                            >
                                {/* ─────────── Image + Play/Pause (side-by-side) ─────────── */}
                                <div className="flex items-center gap-3">
                                    {/* Image */}
                                    <div className="relative w-20 h-20 flex-shrink-0">
                                        <Link href={`/music-details/${item.id}`}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        </Link>
                                    </div>

                                    {/* Play / Pause button — now to the right of image */}
                                    <button
                                        onClick={() => handleOpenModal(item.id)}
                                        aria-label="Play or pause"
                                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur"
                                    >
                                        {playingId === item.id ? (
                                            <FaPause className="text-white text-2xl" />
                                        ) : (
                                            <FaPlay className="text-white text-2xl" />
                                        )}
                                    </button>
                                </div>

                                {/* ─────────── Info Row ─────────── */}
                                <div className="grid md:grid-cols-3 lg:grid-cols-6 justify-between  w-full gap-x-10 items-center">
                                    {/* Title */}
                                    <h3 className="text-white text-sm    truncate">
                                        {item.title}
                                    </h3>

                                    {/* Artist */}
                                    <Link
                                        href={`/singer-profile/${item.id}`}
                                        className="text-white hover:underline font-medium text-sm truncate"
                                    >
                                        {item.artist}
                                    </Link>

                                    {/* Genre */}
                                    <p className="text-white text-sm truncate">
                                        {item.genre}
                                    </p>

                                    {/* Gender */}
                                    <p className="text-white text-sm truncate">
                                        {item.gender}
                                    </p>

                                    {/* License Badge */}
                                    <span
                                        className={`inline-block rounded-2xl text-center font-bold px-3 py-1  text-xs
            ${item.license === 'EXCLUSIVE'
                                                ? 'bg-[#80BC02]'
                                                : item.license === 'NON-EXCLUSIVE'
                                                    ? 'bg-[#818080]'
                                                    : item.license === 'PREMIUM'
                                                        ? 'bg-[#00C2CE]'
                                                        : 'bg-gray-600'}`}
                                    >
                                        {item.license}
                                    </span>

                                    {/* Price + Cart */}
                                    <div className="flex items-center gap-x-12">


                                        {/* Price */}
                                        <span
                                            className="bg-[#E7F056] text-black font-bold rounded-2xl text-xs md:text-sm lg:text-base px-2">
                                            <Link href={"/checkout"}>
                                                {item.price}
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/*small device */}


                    <div
                        className=" lg:hidden  grid grid-cols-3 gap-6  max-w-[1539px]  mx-auto   mb-6  ">


                        {/* genre  */}

                        {/*key start */}


                        <div className="relative w-full " ref={keyRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenKey(!openKey)}
                            >
                                {/* Icon on RIGHT side */}
                                {openKey ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectGenre.length > 0 ? <>Selected {selectedKey.length}</> : "Key"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openKey && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {keys.map((key) => (
                                            <label
                                                key={key}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectGenre.includes(key)}
                                                    onChange={(e) => {
                                                        toggleGenre(key);
                                                        handleFilterChange('key', e.target.checked ? key : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg   ">{key}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* BPM */}

                        <div className="relative w-full " ref={bpmRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenBPM(!openBPM)}
                            >
                                {openBPM ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white  text-sm   ">
                                    BPM
                                </span>
                            </button>

                            <AnimatePresence>
                                {openBPM && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
                                    >
                                        <div
                                            ref={bpmRef}
                                            className="bg-[#201F1F] rounded-2xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-auto"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-white text-xl font-semibold">Filter By BPM</h2>
                                                <button onClick={() => setOpenBPM(false)}
                                                    className="cursor-pointer text-white text-2xl">×
                                                </button>
                                            </div>

                                            <div className="flex flex-col   gap-6">


                                                <div className="flex flex-col items-center gap-4">
                                                    {/* Selected BPM and Range Input */}
                                                    <div className="relative w-full pt-8">
                                                        {/* Number Labels */}
                                                        <div
                                                            className="absolute  -top-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(minValue)}% - 20px)` }}
                                                        >
                                                            {minValue.toFixed(2)}
                                                        </div>
                                                        <div
                                                            className="absolute  -top-4  -ml-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(maxValue)}% - 20px)` }}
                                                        >
                                                            {maxValue.toFixed(2)}
                                                        </div>

                                                        {/* Track */}
                                                        <div
                                                            className="w-full h-2 rounded-full"
                                                            style={{ background: getTrackBackground() }}
                                                        />

                                                        {/* Left Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={minValue}
                                                            onChange={(e) => {
                                                                const val = Math.min(Number(e.target.value), maxValue - 1);
                                                                setMinValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />

                                                        {/* Right Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={maxValue}
                                                            onChange={(e) => {
                                                                const val = Math.max(Number(e.target.value), minValue + 1);
                                                                setMaxValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="flex justify-center items-center gap-4 w-full">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBPM(0); // or default value
                                                                handleFilterChange("bpm", "");
                                                                setOpenBPM(false)
                                                            }}
                                                            className="bg-gray-700 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition"
                                                        >
                                                            Reset
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                handleFilterChange("bpm", [minValue, maxValue]); // ⬅ send the selected range
                                                                setSelectedBPM([minValue, maxValue]);           // ⬅ store the selection
                                                                setOpenBPM(false);                              // ⬅ close the modal
                                                            }}
                                                            className="bg-[#E7F056] cursor-pointer text-black px-4 py-1 font-semibold rounded-lg transition"
                                                        >
                                                            Filter
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        <div className="relative w-full " ref={genreRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpen(!open)}
                            >
                                {/* Icon on RIGHT side */}
                                {open ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* Gender */}

                        <div className="relative w-full " ref={genderRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenGender(!openGender)}
                            >
                                {openGender ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                        {/* License */}

                        <div className="relative w-full " ref={licenseRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLicense(!openLicense)}
                            >
                                {openLicense ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* Type  */}


                        <div className="relative w-full " ref={typeRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenType(!openType)}
                            >
                                {openType ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                        {/* latest  */}


                        <div className="relative w-full " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
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
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
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


                    </div>

                    <div className=" lg:hidden block space-y-4">
                        {filteredData.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item.id}
                                className={`cursor-pointer rounded-md p-4
        ${i % 2 === 0 ? 'bg-[#201F1F]' : 'bg-[#000000]'}
         flex-col `}
                            >
                                {/* ─────────── Image + Play/Pause (side-by-side) ─────────── */}
                                <div
                                    className="relative ">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={18}
                                        height={18}
                                        className="rounded-lg w-full my-4  object-cover"
                                    />
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

                                {/* ─────────── Info Row ─────────── */}
                                <div
                                    className="grid md:grid-cols-3 text-center lg:grid-cols-6 gap-x-12 w-full items-center">
                                    {/* Title */}
                                    <h3 className="text-white font-medium  lg:text-base truncate">
                                        {item.title}
                                    </h3>

                                    {/* Artist */}
                                    <Link
                                        href={`/artist-library/${item.id}`}
                                        className="text-white hover:underline font-medium  lg:text-base truncate"
                                    >
                                        {item.artist}
                                    </Link>

                                    {/* Genre */}
                                    <p className="text-white font-medium  lg:text-base truncate">
                                        {item.genre}
                                    </p>

                                    {/* Gender */}
                                    <p className="text-white font-medium  lg:text-base truncate">
                                        {item.gender}
                                    </p>

                                    {/* License Badge */}
                                    <span
                                        className={`inline-block rounded-2xl mt-3  text-center font-bold px-3 py-2
            ${item.license === 'EXCLUSIVE'
                                                ? 'bg-[#80BC02]'
                                                : item.license === 'NON-EXCLUSIVE'
                                                    ? 'bg-[#818080]'
                                                    : item.license === 'PREMIUM'
                                                        ? 'bg-[#00C2CE]'
                                                        : 'bg-gray-600'}`}
                                    >
                                        {item.license}
                                    </span>

                                    {/* Price + Cart */}
                                    <div className="flex items-center justify-center my-5 gap-x-12">
                                        {/* Cart Button */}


                                        {/* Price */}
                                        <span
                                            className="bg-[#E7F056] text-black font-bold rounded-2xl  lg:text-base px-2">
                                            <Link href={"/checkout"}>
                                                {item.price}
                                            </Link>
                                        </span>
                                    </div>
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
                                        className=' mt-4 lg:mt-0 rounded-2xl border border-white text-white px-6 py-3 text-lg cursor-pointer   '>LOAD
                                        MORE VOCALS</button>
                                )
                            }
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-5">
                        {/* Box 1 */}
                        <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="lg:text-3xl text-xl font-bold leading-9">100% Royalty free</h1>
                            <p className="mt-6 lg:text-lg leading-6">
                                Use your vocals anywhere. No limits. Cleared for release. Keep all royalties.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="lg:text-3xl text-xl font-bold leading-9">Yours forever</h1>
                            <p className="mt-6 lg:text-lg leading-6">
                                Dry vocal stems, Licence and Invoice emailed after purchase. Instrumental at an extra
                                cost.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-[#201F1F]  p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                            <h1 className="lg:text-3xl text-xl font-bold leading-9">Vocal love guarantee</h1>
                            <p className="mt-6 lg:text-lg leading-6">
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

                            <div className=' max-w-[478px] lg:mt-8 mt-3 '>
                                <h1 className=' lg:text-lg text-[#ffffff] leading-6 font-thin '>Get access to top
                                    featured
                                    artists and rising voices, professionally recorded in studio environments. All
                                    vocals
                                    come from credited singers behind major releases — trusted by producers and labels
                                    worldwide.</h1>
                            </div>


                            <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7 lg:space-y-12 space-y-3 ">
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
                className="bg-[url('/images/home-page/tunemImg.png')] lg:h-[503px] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                <div className="relative z-10 mt-8 lg:mt-20 ">
                    <h1 style={{ fontFamily: 'Favorit' }}
                        className="text-center text-[#E7F056] font-bold lg:text-3xl  text-lg">
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
    );
};

export default BrowseAllVocal;

