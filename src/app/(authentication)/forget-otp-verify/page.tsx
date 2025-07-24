"use client"
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import {useSearchParams} from 'next/navigation';
import {useRegisterOtpVerifyMutation, useResendOtpMutation} from "@/redux/api/authApi/authApi";
import Swal from "sweetalert2";

const OtpVerifyPage: React.FC = () => {
    const [resendOtp,] = useResendOtpMutation();
    const [registerOtpVerify, {isLoading}] = useRegisterOtpVerifyMutation();
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const router = useRouter()


    const searchParams = useSearchParams();
    const email = searchParams.get('email');


    const handleChange = (element: HTMLInputElement, index: number) => {
        if (!/^[0-9]?$/.test(element.value)) return; // only digits allowed

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input if current is filled
        if (element.value && element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prev = e.currentTarget.previousSibling as HTMLInputElement;
            prev?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = e.clipboardData.getData("text").slice(0, 6);
        if (!/^\d+$/.test(paste)) return;

        const newOtp = paste.split("").slice(0, 6);
        setOtp([...newOtp, ...new Array(6 - newOtp.length).fill("")].slice(0, 6));
    };

    const payload = {
        email,
        otp: otp.join(''),
    };


    console.log("payload is ", payload)

    // send Otp again
    const sendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            console.warn("Email is null or undefined. Cannot send OTP.");
            return;
        }



        try {
            const res = await resendOtp(email).unwrap();
            console.log("OTP resent response:", res);

            if (res.success) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error: unknown) {
            console.error("Resending OTP failed:", error);

            let errorMessage = "Login failed.";

            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message: string }).message);
            }

            Swal.fire({
                position: "top-center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const res = await registerOtpVerify(payload).unwrap();
            if (res.success) {
                router.push("/set-new-password");
                localStorage.setItem("forget-token", res.data.token);

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            return setOtp(["", "", "", "", "", ""]);
        } catch (error: unknown) {

            let errorMessage = "Otp verify fail.";

            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message: string }).message);
            }

            Swal.fire({
                position: "top-center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 2000,
            });
        }


    };


    return (
        <div className='min-h-screen'>
            <MaxWidth>
                <div
                    className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-[7%] space-y-6 md:space-y-0 md:space-x-6 lg:space-x-6 md:px-0">
                    <div
                        className="w-full md:w-auto lg:w-[484px] p-6 rounded-3xl bg-white shadow-md ">
                        <div>
                            <h1
                                className="headerColor font-semibold lg:text-[40px] text-center text-2xl md:text-3xl">
                                Verify OTP
                            </h1>
                            <p className="text-center mt-2 textColor font-thin text-sm md:text-base">
                                We have sent 6 digit code in mark***@gmail.com
                            </p>
                        </div>
                        <form>
                            <div className="flex justify-between items-center mt-[10%] space-x-1 md:space-x-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onPaste={handlePaste}
                                        className="w-10 h-12 rounded-2xl text-center border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-end mt-2">
                                <button onClick={sendOtp} className="headerColor cursor-pointer text-sm font-semibold">
                                    Send again
                                </button>
                            </div>
                            {/* Submit */}
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                disabled={isLoading}
                                className="w-full cursor-pointer font-bold flex justify-center items-center gap-2 text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl transition hover:opacity-90 disabled:opacity-60"
                            >
                                {isLoading ? (
                                    <span>
                                        Loading...
                                    </span>
                                ) : (
                                    "Verify Otp"
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-auto lg:w-[717px] lg:h-[478px] flex justify-center items-center">
                        <Image
                            src="/images/home-page/otpVerifyImg.png"
                            width={717}
                            height={478}
                            alt="..."
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default OtpVerifyPage
