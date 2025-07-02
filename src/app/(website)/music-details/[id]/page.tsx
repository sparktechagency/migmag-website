import React from 'react';
import MusickDetails from "@/app/(website)/music-details/[id]/MusickDetails";
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";

const Page = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    return (
        <div>
            <div className={'max-w-7xl mx-auto  '}>
                <Navbar></Navbar>
                <div className={'my-12'} >
                    <MusickDetails></MusickDetails>
                </div>
                <UpdateFooter></UpdateFooter>
            </div>

        </div>
    );
};

export default Page;