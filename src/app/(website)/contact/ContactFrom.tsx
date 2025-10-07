import MaxWidth from '@/components/max-width/MaxWidth'
import Image from 'next/image'
import React from 'react'
import { FaArrowUp, FaHeadphonesAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactFrom = () => {
  return (
    <div className=' my-7 '  >
      <div className=' bg-[#F9F9F9] w-full py-3 ' >
        <MaxWidth>
          <div className=' flex gap-x-8  ' >
            <div>
              <Image src={"/update-image/mor-singer/1.webp"} width={100} height={100} className=' rounded-full ' alt='' />
            </div>
            <div>
              <div className=' flex flex-row items-center ' >
                <span>
                  <FaHeadphonesAlt />
                </span>
                <h1>Vocalfy Support</h1>  </div>
              <div>
                {/* image  */}
                <span>Status: Available</span>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth>
        <div className="my-6 flex flex-col lg:flex-row  space-y-5   " >
          <div className='  md:w-[50%] w-full  ' >
            {/* email  */}
            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

              <p>
                TUNEM STUDIOS</p>
            </div>
            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>
                Head Office - Malta
              </p>

              <span>
                <FaArrowUp className=' rotate-45 ' />
              </span>


            </div>
            <div className=' h-0.5 w-[40%] bg-black ' />


            {/* Business Inquiries to Paulo */}


            <div className=' my-6 ' >
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <p>TuneM Headquarters</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <p>📍Tigne Point Sliema - Malta SLM3190</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <span>
                  <MdEmail />
                </span>
                <p>support@tunem.com</p>
              </div>
              {/* <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <span>
                  <FaArrowUp className=' rotate-45 ' />
                </span>


              </div> */}
              <div className=' h-0.5 w-[44%] bg-black ' />
            </div>

            {/* Artist Inquiries to Ben */}



            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>TuneM Production & Creative Division</p>
            </div>










            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>
                📍8 Sienna Grobla - Gdańsk 80-760 Poland
              </p>
            </div>

            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <span>
                <MdEmail />
              </span>
              <p>support@tunem.com</p>
            </div>


            <div className=' h-0.5 w-[43%] bg-black ' />


            {/* Instagram Support */}


            {/* <div className="my-6" >
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <span>
                  <FaInstagramSquare />
                </span>
                <p>Artist Inquiries to Ben</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <p>
                  support@vocalfy.com
                </p>

                <span>
                  <FaArrowUp className=' rotate-45 ' />
                </span>


              </div>
              <div className=' h-0.5 w-[22%] bg-black ' />
            </div> */}
            <div className=' mt-6 ' >
              Our dedicated team will help you as soon as possible with your inquiry. Get a reply within 24 hours.
            </div>
          </div>
          <div className=' md:w-[50%]  w-full   '  >
            <Image src={"/images/contact/contact-img.webp"} width={700} height={7000} alt='' className='' />
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default ContactFrom 