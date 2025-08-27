// "use client";

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useContactApiMutation } from "@/redux/api/home-api/homeApi";

// const ContactForm: React.FC = () => {
//     const [email, setEmail] = useState("");
//     const [title, setTitle] = useState("");
//     const [type, setType] = useState("");
//     const [description, setDescription] = useState("");

//     const payload = {
//         email,
//         title,
//         type,
//         description,
//     };

//     const [contactApi, { isLoading }] = useContactApiMutation();

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             const res = await contactApi(payload).unwrap();
//             if (res) {
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: res?.message,
//                     showConfirmButton: false,
//                     timer: 1500,
//                 });
//                 setEmail("");
//                 setTitle("");
//                 setType("");
//                 setDescription("");
//             }
//         } catch (e: unknown) {
//             console.error(e);
//             Swal.fire({
//                 position: "top-end",
//                 icon: "error",
//                 title: `Message send failed`,
//                 showConfirmButton: false,
//                 timer: 1500,
//             });
//         }
//     };

//     return (
//         <div>
//             <div className="bg-white p-6 rounded-3xl max-w-4xl mx-auto my-20">
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                     {/* Email */}
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-[#121212] text-[16px] font-semibold">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none focus:outline-0 placeholder:text-[#3A3A3A]"
//                             placeholder="Enter your email..."
//                             required
//                         />
//                     </div>

//                     {/* Title */}
//                     <div className="flex flex-col">
//                         <label htmlFor="title" className="text-[#121212] text-[16px] font-semibold">
//                             Title
//                         </label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none focus:outline-0 placeholder:text-[#3A3A3A]"
//                             placeholder="Enter title..."
//                             required
//                         />
//                     </div>

//                     {/* Type */}
//                     <div className="flex flex-col">
//                         <label htmlFor="type" className="text-[#121212] text-[16px] font-semibold">
//                             Type
//                         </label>
//                         <select
//                             id="type"
//                             name="type"
//                             value={type}
//                             onChange={(e) => setType(e.target.value)}
//                             className="bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none focus:outline-0 text-[#3A3A3A]"
//                             required
//                         >
//                             <option value="">Select a type...</option>
//                             <option value="Support">Support</option>
//                             <option value="HireArtists">Hire Artists</option>
//                             <option value="ApplyforRefund">Apply for Refund</option>
//                         </select>
//                     </div>

//                     {/* Description */}
//                     <div className="flex flex-col mt-2">
//                         <label htmlFor="description" className="text-[#121212] text-[16px] font-semibold">
//                             Description
//                         </label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             rows={7}
//                             className="bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none focus:outline-0 placeholder:text-[#3A3A3A]"
//                             placeholder="Description"
//                             required
//                         />
//                     </div>

//                     {/* Submit */}
//                     <div className="mt-16">
//                         <button
//                             type="submit"
//                             className="bg-[#E7F056] shadow w-full text-xl text-[#3A3A3A] font-semibold py-2 rounded-xl cursor-pointer"
//                         >
//                             {isLoading ? <>Loading...</> : <>Hire now</>}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;
import React from 'react'

const ContactFrom = () => {
  return (
    <div>ContactFrom</div>
  )
}

export default ContactFrom