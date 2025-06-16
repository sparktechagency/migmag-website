import React from 'react'
import TermPage from './TermPage';
import Navbar from '@/components/navbar/Navbar';
import UpdateFooter from "@/components/footer/UpdateFooter";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TermPage></TermPage>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default Page;
