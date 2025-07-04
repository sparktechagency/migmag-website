import React from 'react'
import SingerDetails from '../../artist-library/[id]/SingerDetails';
import Navbar from '@/components/navbar/Navbar';
import UpdateFooter from '@/components/footer/UpdateFooter';

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    console.log(id);

    return (
        <div>
            <Navbar></Navbar>
            <SingerDetails></SingerDetails>
            <UpdateFooter></UpdateFooter>
        </div>
    )
}

export default Page;
