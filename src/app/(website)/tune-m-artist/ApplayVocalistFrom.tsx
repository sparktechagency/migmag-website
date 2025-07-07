import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";


const ApplayVocalistFrom: React.FC = () => {
    const genres = [
        'POP',
        'DANCE POP',
        'HOUSE',
        'FUTURE HOUSE',
        'DEEP HOUSE',
        'COVERS',
        'OTHER'
    ];

    return (
        <div className=' bg-black '>
            <MaxWidth>
                <div  className=' max-w-[1366px] mx-auto py-8 lg:py-[60px] px-4 '>
                    <div className=' flex lg:flex-row flex-col items-start gap-y-8 lg:gap-y-0 relative lg:gap-5 '>

                        {/* left side  */}
                        <div className=' w-full '>


                            <div className=' max-w-[572px] mt-9 '>
                                <p className=' lg:text-3xl text-xl  text-[#E7F056] font-semibold '>Apply to Become a
                                    Vocalist at TuneM</p>
                                <p className={`text-white`}>
                                    We’re looking for dedicated vocalists who are passionate about music and ready to
                                    work
                                    professionally with a growing network of producers. If you have talent, drive, and a
                                    strong work ethic — TuneM could be the perfect platform for you.
                                </p>
                                <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>What We’re Looking
                                    For</h1>
                            </div>
                            <div className=' max-w-[572px] mt-8'>
                                <div className='  '>
                                    <div className=''>
                                        <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>Vocal
                                            Talent &
                                            Recording Setup</h1>
                                        <p className={`text-white`}>Strong singing ability with access to a home or
                                            studio
                                            setup. Must be able to deliver clean vocal stems</p>
                                    </div>

                                </div>
                                <div className='  my-8 '>
                                    <div className='  '>
                                        <div className=''>
                                            <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>Work
                                                Ethic & Drive</h1>
                                            <p className={`text-white`}>We value vocalists who are committed,
                                                consistent, and passionate about building a career in music.</p>
                                        </div>

                                    </div>
                                </div>




                            </div>

                        </div>
                        {/* right side  */}
                        <div className='  w-full '>

                            <form>
                                {/* name  */}
                                <div className=' flex flex-col '>
                                    <label className=' text-white text-lg font-bold leading-6  '
                                           htmlFor="name">Name</label>
                                    <input id='name'
                                           className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium '
                                           type="text"/>
                                </div>

                                {/* email  */}

                                <div className=' flex flex-col mt-5 text-lg font-bold leading-6  '>
                                    <label className=' text-white  ' htmlFor="email">Email</label>
                                    <input id='email'
                                           className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium '
                                           type="email"/>
                                </div>

                                {/* Social link(optional) */}

                                <div className=' flex flex-col mt-5  '>
                                    <label className=' text-white text-lg font-bold leading-6  ' htmlFor="stageName">Social
                                        link </label>
                                    <input id='stageName' placeholder={"Instagram Or Tiktok"}
                                           className='hover:outline-0  focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium '
                                           type="text"/>
                                </div>


                                {/* Tell us about you */}

                                <div className='flex flex-col mt-5'>
                                    <label className='text-white text-lg font-bold leading-6' htmlFor="aboutUs">
                                        Tell us about you
                                    </label>
                                    <textarea
                                        id='aboutUs'
                                        placeholder='What makes you a great fit for TUNEM?'
                                        className='hover:outline-0 focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                        rows={4} // You can adjust the number of rows if needed
                                    />
                                </div>

                                {/* genre  */}

                                <div className='bg-black mt-5 text-white max-w-5xl mx-auto'>
                                    <h3 className='text-lg font-bold mb-4'>
                                        What genre do you work with the most? (multiple choice)
                                    </h3>
                                    <div className='flex flex-wrap gap-6  '>
                                        {genres.map((genre, index) => (
                                            <div key={index} className='flex items-center gap-2 cursor-pointer '>
                                                <input
                                                    type='checkbox'
                                                    id={genre}
                                                    name='genre'
                                                    className='appearance-none cursor-pointer w-6 h-6 rounded-full border-2 border-white checked:bg-yellow-400 checked:border-yellow-400'
                                                />
                                                <label htmlFor={genre} className='text-white cursor-pointer'>
                                                    {genre}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* other genre  */}
                                <div className='flex flex-col mt-5'>
                                    <label className='text-white text-lg font-bold leading-6' htmlFor="otherGenre">
                                        If you choose other, which genre?
                                    </label>
                                    <textarea
                                        id='otherGenre'
                                        
                                        className='hover:outline-0 placeholder:text-[#818080] placeholder:text-lg placeholder:leading-6 focus:outline-0 hover:ring-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                        rows={4} // You can adjust the number of rows if needed
                                    />
                                </div>


                                {/* upload file  */}
                                <div className='flex flex-col mt-5'>
                                    <label
                                        className='text-white text-lg font-bold leading-6'
                                        htmlFor='fileUpload'
                                    >
                                        Upload Your File
                                    </label>
                                    <div>
                                        <input
                                            id='fileUpload'
                                            type='file'
                                            className='hover:outline-0 focus:outline-0 hover:ring-0 mt-5 border border-[#818080] px-10 rounded-2xl w-full lg:w-[45%] bg-black text-white py-2 text-lg font-medium cursor-pointer'
                                        />
                                    </div>
                                </div>


                                <div className=' mt-9 '>
                                    <button
                                        className=' cursor-pointer text-center text-lg font-medium bg-[#D9D9D9] w-full py-1.5 rounded-2xl   '>SEND
                                        NOW
                                    </button>
                                </div>


                            </form>


                        </div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default ApplayVocalistFrom; 
