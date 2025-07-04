import React from 'react'
import ContactFrom from './ContactFrom'
import Navbar from '@/components/navbar/Navbar'
import UpdateFooter from '@/components/footer/UpdateFooter'


const page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' max-w-[1539px] mx-auto ' >
                <ContactFrom></ContactFrom>
            </div>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default page
