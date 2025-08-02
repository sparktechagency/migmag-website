"use client"
import React from 'react';
import {useSupportMutation} from "@/redux/api/authApi/authApi";
import Swal from "sweetalert2";

const SupportForm: React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const [support, {isLoading}] = useSupportMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        const payload = {
            email,
            message,
        }

        e.preventDefault();

        try {
            const res = await support(payload);
            if (res) {
                setMessage("");
                setEmail("");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (e) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: e.response?.data?.message,
                showConfirmButton: false,
                timer: 1500
            });
        }

    };

    return (
        <div className='bg-white p-6 rounded-3xl'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='headerColor text-[16px] font-semibold' htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor'
                        placeholder='Enter your email...'
                        required
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='headerColor text-[16px] font-semibold' htmlFor="message">Support for</label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={7}
                        className='bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor'
                        placeholder='Description'
                        required
                    />
                </div>
                <div className='mt-16'>
                    <button
                        type="submit"
                        className='bg-[#E7F056] shadow w-full text-xl headerColor font-semibold py-2 rounded-xl cursor-pointer'
                    >
                        {
                            isLoading ? "Loading..." : <> Send </>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SupportForm;
