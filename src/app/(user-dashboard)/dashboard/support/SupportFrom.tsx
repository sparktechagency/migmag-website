import React from 'react'

const SupportFrom: React.FC = () => {
    return (
        <>
            <div className='bg-white p-6 rounded-3xl ' >
                <form style={{ fontFamily: 'Degular' }} >
                    <div className=' flex flex-col ' >
                        <label className=' headerColor text-[16px] font-semibold  ' htmlFor="email">Email</label>
                        <input type='email' className=' bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor ' placeholder='Enter your email...' />
                    </div>
                    <div className=' flex flex-col mt-2 ' >
                        <label className=' headerColor text-[16px] font-semibold  ' htmlFor="email">Support for</label>
                        <textarea rows={7} className=' bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor ' placeholder='Description' />
                    </div>
                    <div className='mt-16' >
                        <button className=' bg-[#E7F056] shadow w-full text-xl headerColor font-semibold py-2 rounded-xl cursor-pointer   ' >Send</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default SupportFrom
