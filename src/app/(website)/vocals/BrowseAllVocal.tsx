"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Play, Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
import MusickPlayer from '@/components/musick-player/MusickPlayer';
import MaxWidth from "@/components/max-width/MaxWidth";
import { FaPlay } from 'react-icons/fa';


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
                <div className=" mx-auto  ">
                    <div className=' mt-12 mb-6 '>
                        <div className=' border border-white '></div>
                    </div>
                    <div className=' flex md:flex-row lg:flex-row flex-col justify-between items-center mb-11  '>
                        <div className='flex-1'>
                            <h1 className=' lg:text-3xl md:text-2xl font-bold leading-9 text-white '>Browse <span
                                className=' text-[#818080] '>Covers</span></h1>
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
                    </div>


                    <div className=" space-y-2 w-full lg:block hidden  ">
                        {filteredData.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item.id}
                                className={`cursor-pointer flex  items-center  rounded-md ${i % 2 === 0 ? 'bg-[#201F1F]' : 'bg-[#000000]'
                                    }`}
                            >
                                <div className="flex items-center justify-between w-full bg-white px-4 py-3 rounded shadow-sm hover:bg-gray-50 transition-all">
                                    {/* Left: Cover and Play */}
                                    <div className="flex items-center gap-3 w-full max-w-[300px]">
                                        <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0">
                                            <Link href={`/music-details/${item?.id}`} >
                                                <Image
                                                    src="/images/browse-vocal/browse/browse-7.png" // 🔁 Replace with your image
                                                    alt="Do I Cross Your Mind"
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </Link>
                                        </div>
                                        <button className="w-6 h-6 flex items-center justify-center text-black hover:text-blue-500">
                                            <FaPlay onClick={() => handleOpenModal(item.id)} size={28} className="text-gray-800 cursor-pointer " />
                                        </button>
                                        <div className="flex flex-col">
                                            <h3 className="text-sm font-semibold text-black">Do I Cross Your Mind</h3>
                                            <p className="text-xs text-gray-500"><Link href={`/singer-profile/${item.id}`}>Evan</Link> ・ 128 BPM ・ A#min</p>
                                        </div>
                                    </div>

                                    {/* Center: Genre and License */}
                                    <div className="hidden md:flex items-center text-sm text-gray-500 gap-10">
                                        <p>Progressive House</p>
                                        <p>Non-Exclusive</p>
                                    </div>

                                    {/* Right: Price and Button */}
                                    <div className="flex items-center gap-4 min-w-[120px] justify-end">
                                        <Link href={`/checkout`}>
                                            <p className="text-sm font-semibold">$34</p>
                                        </Link>
                                        <button className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 text-sm font-medium rounded">
                                            Get Vocal
                                        </button>
                                    </div>
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




                    </div>


                    <div className=" space-y-2 w-full   lg:hidden my-8  ">
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
                                        <Link href={`/music-details/${item?.id}`}>
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
                                    <h3 className="text-white text-sm   text-center my-3   ">
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
                                        className={`block text-center rounded-2xl py-2 px-4 font-bold ${item.license === 'EXCLUSIVE'
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



                                {/* Price */}
                                <div className=" block mx-auto w-[30%]  text-center mb-6 mt-3  ">
                                    <Link href={`/checkout`}>
                                        <span
                                            className="text-[#000000] px-4 py-2 rounded-2xl font-bold  bg-[#E7F056] ">
                                            {item.price}
                                        </span>

                                    </Link>
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
                    <h1 className="text-center text-[#E7F056] font-bold lg:text-4xl text-lg ">
                        Become a TuneM Artist.
                    </h1>

                    <div className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                        <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                            We work with talented singers and songwriters ready to take their voice further. Expand
                            your audience, get discovered, and join our global music network. </p>
                    </div>
                    <div>
                        <Link href={"/tune-m-artist"}>
                            <button
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

