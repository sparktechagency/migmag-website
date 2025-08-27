"use client"
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import PrivacyPage from './PrivacyPage'
import UpdateFooter from "@/components/footer/UpdateFooter";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PrivacyPage></PrivacyPage>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default Page
