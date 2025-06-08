import React from 'react'
import CartPage from './CartPage'
import Navbar from '@/components/navbar/Navbar'

const page: React.FC = () => {
    return (
        <div>
            <div className=' bg-[#f5fff8] py-16 ' >
                <Navbar></Navbar>
                <CartPage></CartPage>
            </div>
        </div>
    )
}

export default page
