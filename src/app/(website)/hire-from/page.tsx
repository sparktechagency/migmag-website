import React from 'react'
import HireFrom from './HireFrom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';


const Page: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <HireFrom></HireFrom>
            <Footer></Footer>
        </div>
    )
}

export default Page 
