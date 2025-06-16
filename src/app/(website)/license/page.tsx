import React from 'react'
import LicensesPage from './LicensesPage'
import Navbar from '@/components/navbar/Navbar'
import UpdateFooter from "@/components/footer/UpdateFooter";

const Page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className = "lg:my-14 my-8" >
                <LicensesPage></LicensesPage>
            </div>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default Page
