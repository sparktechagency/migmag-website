import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Refund from './Refund'
import UpdateFooter from "@/components/footer/UpdateFooter";

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Refund></Refund>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default page
