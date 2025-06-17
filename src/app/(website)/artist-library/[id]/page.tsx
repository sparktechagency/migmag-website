import React from 'react'
import SingerDetails from './SingerDetails'
import Navbar from '@/components/navbar/Navbar'
import UpdateFooter from "@/components/footer/UpdateFooter";

interface PageProps {
    params: {
        id: string;
    };
}

const page = ({ params }: PageProps) => {
    const { id } = params;
    console.log(id);

    return (
        <div>
            <Navbar />
            <SingerDetails artistId = {id} />
            <div style={{ fontFamily: 'Favorit' }} className='px-4'>
                <UpdateFooter />
            </div>
        </div>
    );
};

export default page;
