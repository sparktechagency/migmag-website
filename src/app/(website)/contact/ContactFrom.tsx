import React from 'react'

const ContactFrom : React.FC = () => {
    return (
        <div>
            <div className='bg-white p-6 rounded-3xl max-w-4xl mx-auto my-20 ' >
                <form style={{ fontFamily: 'Degular' }}   >
                    <div className=' flex flex-col ' >
                        <label className=' text-[#121212] text-[16px] font-semibold  ' htmlFor="email">Email</label>
                        <input type='email' className=' bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:text-[#3A3A3A] ' placeholder='Enter your email...' />
                    </div>
                    <div className=' flex flex-col mt-2 ' >
                        <label className=' text-[#121212] text-[16px] font-semibold  ' htmlFor="email">Support for</label>
                        <textarea rows={7} className=' bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:text-[#3A3A3A] ' placeholder='Description' />
                    </div>
                    <div className='mt-16' >
                        <button className=' bg-[#E7F056] shadow w-full text-xl text-[#3A3A3A] font-semibold py-2 rounded-xl cursor-pointer   ' >Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactFrom
