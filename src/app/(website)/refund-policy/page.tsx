import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Refund from './Refund'

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Refund></Refund>
            <Footer></Footer>
        </div>
    )
}

export default page
