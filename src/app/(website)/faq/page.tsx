import React from 'react'
import Faq from '../tune-m-artist/Faq'
import Navbar from '@/components/navbar/Navbar'
import UpdateFooter from "@/components/footer/UpdateFooter";

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div  ><Faq></Faq></div>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default page
