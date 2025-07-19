"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import MaxWidth from "@/components/max-width/MaxWidth";
import RegisterFrom from "@/app/(authentication)/login/RegisterFrom";
import LoginForm from "@/app/(authentication)/login/LoginFrom";


const LoginPage: React.FC = () => {
    const [activeForm, setActiveForm] = useState<"login" | "register">("login");

    return (
        <div className="bg-gradient-to-br from-[#0C1520] via-[#101A26] to-[#0C1520]  text-white  pb-10  ">
            <MaxWidth>
                <div className="flex lg:flex-row flex-col justify-between items-center pt-10 pb-10">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 text-center lg:text-left px-4"
                    >
                        <h1 className="text-5xl font-bold leading-tight">
                            Get <span className="text-yellow-400">Vocals</span>
                            <br />
                            That <span className="text-yellow-400">Stand</span> Out
                        </h1>
                        <p className="text-xl mt-6 text-gray-300">
                            Work With Elite Singers Across the World
                        </p>
                    </motion.div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full max-w-md px-4 mt-10 lg:mt-0"
                    >
                        {/* Toggle Buttons */}
                        <div className="flex justify-center mb-6 rounded-md overflow-hidden shadow-lg">
                            <button
                                onClick={() => setActiveForm("login")}
                                className={`w-1/2 py-2 font-semibold transition-all duration-300 ${
                                    activeForm === "login"
                                        ? "bg-yellow-400 text-black"
                                        : "bg-gray-800 text-white hover:bg-gray-700"
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setActiveForm("register")}
                                className={`w-1/2 py-2 font-semibold transition-all duration-300 ${
                                    activeForm === "register"
                                        ? "bg-yellow-400 text-black"
                                        : "bg-gray-800 text-white hover:bg-gray-700"
                                }`}
                            >
                                Register
                            </button>
                        </div>

                        {/* Form Animation */}
                        <div className="bg-[#13181E] rounded-xl p-6 shadow-xl">
                            <AnimatePresence mode="wait">
                                {activeForm === "login" ? (
                                    <motion.div
                                        key="login"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <LoginForm />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="register"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <RegisterFrom />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm mt-20 px-4">
                    <Link href="/refund-policy" className="text-white hover:text-yellow-400 transition">
                        Refund Policy
                    </Link>
                    <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition">
                        Privacy Policy
                    </Link>
                    <Link href="/term&condiction" className="text-white hover:text-yellow-400 transition">
                        Terms & Conditions
                    </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

export default LoginPage;
