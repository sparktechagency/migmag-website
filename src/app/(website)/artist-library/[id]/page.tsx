import React from 'react'
import SingerDetails from './SingerDetails'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import UpdateFooter from "@/components/footer/UpdateFooter";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SingerDetails></SingerDetails>
      <div style={{ fontFamily: 'Favorit' }}  className='px-4' >
        <UpdateFooter></UpdateFooter>
      </div>
    </div>
  )
}

export default page
