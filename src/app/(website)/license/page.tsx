import React from 'react'
import LicensesPage from './LicensesPage'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

const Page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className = "lg:my-28 my-16" >
                <LicensesPage></LicensesPage>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Page
