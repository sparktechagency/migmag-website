'use client';

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import MaxWidth from "@/components/max-width/MaxWidth";
import { useEffect, useState } from 'react';
import axios from "axios";
import { imgUrl } from '@/utility/img/imgUrl';
import { useRouter } from 'next/navigation';

interface Track {
    id: number;
    title: string;
    name: string;
    genre: string;
    bpm: string;
    key: string;
    gender: 'Male' | 'Female';
    license: 'PREMIUM' | 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    price: number; // make sure price is number
    image: string;
    audioUrl: string;
}

const licenseColors: Record<Track['license'], string> = {
    PREMIUM: 'bg-[#00C2CE] text-white',
    EXCLUSIVE: 'bg-[#80BC02] text-white',
    'NON-EXCLUSIVE': 'bg-[#818080] text-white',
};

const CartPage = () => {
    const [cart, setCart] = useState<Track[]>([]);
    

    // ✅ Load cart from localStorage once
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsedCart: Track[] = JSON.parse(cartData).map((item: any) => ({
                    ...item,
                    price: Number(item.price), // ensure price is number
                }));
                setCart(parsedCart);
            } catch (error) {
                console.error("Failed to parse cart:", error);
            }
        }
    }, []);

    // ✅ Checkout Price Calculation
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal;

    // 🛒 Checkout API

    const router = useRouter()
   


        const handleCheckout = () => {
        if (cart.length === 0) return alert("Cart is empty!");

        // Pass total as a query parameter
        router.push(`/cart-payment?total=${total}`);
    };




    return (
        <div className="bg-[#f5fff8] min-h-screen">
            <MaxWidth>
                <div className="max-w-[1539px] mx-auto pt-10">
                    <h1 className="text-[#121212] text-3xl font-bold">My cart</h1>
                    <p className="text-[#3A3A3A] font-medium mt-2 text-[16px]">
                        List of songs that you selected for the cart section.
                    </p>

                    <div className="mt-10">
                        {/* Cart Items */}
                        {cart.length === 0 && <p className="text-gray-500">Cart is empty</p>}
                        {cart.map((track) => (
                            <div
                                key={track.id}
                                className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-black text-white p-4 rounded-md mb-4 shadow hover:bg-[#1a1a1a]"
                            >
                                {/* Image + Title */}
                                <div className="flex items-start gap-4 w-full lg:w-auto">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image width={93} height={91} src={`${imgUrl}/${track?.image}`} alt="cover"
                                            className="w-full h-full object-cover rounded-md" />
                                        {/* <FaPlay className="absolute inset-0 m-auto text-yellow-400 w-6 h-6" /> */}
                                    </div>
                                    <div>
                                        <div className="font-bold text-base">{track.title}</div>
                                        <div className="text-sm text-gray-300">{track.name}</div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 text-sm text-gray-200 mt-4 lg:mt-0 w-full lg:w-1/2 text-left sm:text-center">
                                    <span>{track.genre}</span>
                                    <span>{track.bpm}</span>
                                    <span>{track.key}</span>
                                    <span>{track.gender}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${licenseColors[track.license]}`}>
                                        {track.license}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-4 mt-4 lg:mt-0 lg:justify-end w-full lg:w-auto">
                                    <span className="bg-yellow-300 text-black font-bold px-4 py-1 rounded-full">
                                        €{track.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 🛒 Checkout Summary */}
                    {cart.length > 0 && (
                        <div className="mt-10 bg-white shadow p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Checkout Summary</h2>
                            <ul className="mb-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex justify-between py-1">
                                        <span>{item.title}</span>
                                        <span>€{item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>€{total.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="mt-4 cursor-pointer bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg w-full"
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </MaxWidth>
        </div>
    );
};

export default CartPage;
