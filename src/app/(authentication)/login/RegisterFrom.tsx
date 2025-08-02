"use client";

import React, {useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {MdEmail, MdLock} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {useRegisterUserMutation} from "@/redux/api/authApi/authApi";
import {RegisterPayload} from "@/utility/api-type/auth-api-type";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState<RegisterPayload>({
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [registerUser, {isLoading, reset}] = useRegisterUserMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const {
        full_name,
        email,
        password,
        password_confirmation,
    } = formData;

    console.log(`formData is ${formData}`)


    const payload = {
        full_name,
        email,
        password,
        password_confirmation,
    }

    console.log(payload)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        if (password !== password_confirmation) {
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Passwords do not match",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }


        try {
            const res = await registerUser(payload).unwrap();
            console.log(res)

            if (res.success) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                router.push(`/otp-verify?email=${encodeURIComponent(email)}`);
                setFormData({
                    full_name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                })
            }

        } catch (error: unknown) {


            console.error("Registration failed:", error);

            let errorMessage = "Registration failed. Try again.";

            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message: string }).message);
            }

            Swal.fire({
                position: "top-center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="max-w-[584px] mx-auto p-6 rounded-3xl shadow-md bg-[#1a1a1a] text-white  ">
            <div className="text-center">
                <h1 className="text-2xl lg:text-[40px] font-semibold">Welcome!</h1>
                <p className="mt-2 text-sm">Please register with valid information to create an account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 mt-7">
                {/* Name */}
                <div className="relative">
                    <label htmlFor="name" className="block mb-2 font-semibold text-[16px]">
                        Name
                    </label>
                    <span className="absolute left-3 top-11">
            <FaUser className="text-white text-[17px]"/>
          </span>
                    <input
                        type="text"
                        name="full_name"
                        id="name"
                        required
                        placeholder="Enter your full name..."
                        value={full_name}
                        onChange={handleChange}
                        className="w-full py-3 px-10 rounded-lg border border-white placeholder:text-white placeholder:text-[16px] bg-transparent focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <label htmlFor="email" className="block mb-2 font-semibold text-[16px]">
                        Email
                    </label>
                    <span className="absolute left-3 top-11">
            <MdEmail className="text-white text-xl"/>
          </span>
                    <input
                        type="email"
                        name="email"
                        required
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={handleChange}
                        className="w-full py-3 px-10 rounded-lg border border-white placeholder:text-white placeholder:text-[16px] bg-transparent focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <label htmlFor="password" className="block mb-2 font-semibold text-[16px]">
                        Password
                    </label>
                    <span className="absolute left-3 top-11">
            <MdLock className="text-white text-xl"/>
          </span>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        className="w-full py-3 px-10 rounded-lg border border-white placeholder:text-white placeholder:text-[16px] bg-transparent focus:outline-none"
                    />
                    <div
                        className="absolute right-3 top-[52px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible className="text-white text-lg"/>
                        ) : (
                            <AiOutlineEye className="text-white text-lg"/>
                        )}
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                    <label htmlFor="confirmPassword" className="block mb-2 font-semibold text-[16px]">
                        Confirm Password
                    </label>
                    <span className="absolute left-3 top-11">
            <MdLock className="text-white text-xl"/>
          </span>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={password_confirmation}
                        required
                        onChange={handleChange}
                        className="w-full py-3 px-10 rounded-lg border border-white placeholder:text-white placeholder:text-[16px] bg-transparent focus:outline-none"
                    />
                    <div
                        className="absolute right-3 top-[52px] cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? (
                            <AiOutlineEyeInvisible className="text-white text-lg"/>
                        ) : (
                            <AiOutlineEye className="text-white text-lg"/>
                        )}
                    </div>
                </div>

                {/* Terms */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="terms"
                        // checked={terms}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm font-thin">
            By creating this account, you agree to our{" "}
                        <span className="font-bold underline cursor-pointer">terms of use</span> &{" "}
                        <span className="font-bold underline cursor-pointer">privacy policy</span>.
          </span>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer font-bold flex justify-center items-center gap-2 text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl transition hover:opacity-90 disabled:opacity-60"
                >
                    {isLoading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                            />
                        </svg>
                    ) : (
                        "Register"
                    )}
                </button>
            </form>


        </div>
    );
};

export default RegisterForm;
