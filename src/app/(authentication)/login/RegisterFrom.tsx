import React, {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import {MdEmail, MdLock} from "react-icons/md";
import {FaUser} from "react-icons/fa";

const RegisterFrom = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.terms) {
            alert("Please accept the Terms and Conditions.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        console.log("Form Data Submitted:", formData);
    };
    return (
        <div>
            <div className=' max-w-[584px]   rounded-3xl shadow-md '>
                <div>
                    <h1 className=' text-center  text-2xl lg:text-[40px] font-semibold '>Welcome!</h1>
                    <p className=' mt-2 text-white text-sm text-center '>Please register with valid information for
                        create account.</p>
                </div>
                <div className='lg:mt-7 mt-4 '>
                    <form onSubmit={handleSubmit} className='space-y-4  '>
                        {/* name  */}
                        <div className="relative">
                            <label htmlFor='name'
                                   className="mb-2  font-semibold text-[16px] block text-white ">Name</label>

                            <span className="absolute left-3 top-12">

                                    <FaUser className="text-white  text-[17px]  "/>
                                </span>
                            <input

                                type="text"
                                name="name"
                                id='name'
                                placeholder="Enter your full name..."
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-3 placeholder:text-white  border border-white placeholder:text-[16px] px-10 rounded-lg  focus:outline-none "
                            />
                        </div>
                        {/* email  */}
                        <div className="relative">
                            <label htmlFor='email'
                                   className="mb-2  font-semibold text-[16px] block ">Email</label>

                            <span className="absolute left-3 top-[44px] ">
                                    <MdEmail className="text-white mt-0.5 text-xl"/>

                                </span>

                            <input
                                type="email"
                                name="email"
                                id='email'
                                placeholder="Enter your email..."
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-3 placeholder:text-white  border placeholder:text-[16px] px-10 rounded-lg  focus:outline-none "
                            />
                        </div>


                        {/* password  */}

                        <div className="relative">
                            <label htmlFor='password'
                                   className="mb-2  font-semibold text-[16px] block ">Password</label>
                            <span className="absolute left-3 top-[43px] ">
                                    <MdLock className="text-white mt-1 text-xl"/>


                                </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full py-3 placeholder:text-white  border placeholder:text-[16px] px-10 rounded-lg  focus:outline-none"
                            />
                            <div
                                className="absolute right-3 top-[58%] cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible className='  text-lg text-white '/> :
                                    <AiOutlineEye className='  text-lg '/>}
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor='confirmPassword'
                                   className="mb-2  font-semibold text-[16px] block ">Confirm
                                Password</label>
                            <span className="absolute left-3 top-[43px] ">
                                    <MdLock className="text-white mt-1 text-xl"/>


                                </span>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full py-3 placeholder:text-white   placeholder:text-[16px] px-10 rounded-lg border border-white  focus:outline-none"
                            />
                            <div
                                className="absolute right-3 top-[58%] cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible className='  text-lg '/> :
                                    <AiOutlineEye className=' text-lg '/>}
                            </div>
                        </div>


                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="w-4 h-4 cursor-pointer"
                            />
                            <span className=' text-white   text-sm font-thin '>By creating this account, you are agree to our <span
                                className=' font-bold  '>terms of use</span> &  <span
                                className=' font-bold  '> privacy policy.</span></span>
                        </div>
                        <button
                            type="submit"
                            className="w-full cursor-pointer font-bold text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl transition mt-4 lg:mt-16 "
                        >
                            Register
                        </button>
                    </form>
                    <div>
                        <p className=' text-center mt-6 text-white   text-sm '>Have an account? <Link
                            className=' font-bold underline  ' href={"/login"}>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterFrom;