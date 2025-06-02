import React from 'react'
import TermPage from './TermPage';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const Page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TermPage></TermPage>
            <Footer></Footer>
        </div>
    )
}

export default Page;
