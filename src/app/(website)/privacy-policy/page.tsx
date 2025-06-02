import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import PrivacyPage from './PrivacyPage'

const Page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PrivacyPage></PrivacyPage>
            <Footer></Footer>
        </div>
    )
}

export default Page
