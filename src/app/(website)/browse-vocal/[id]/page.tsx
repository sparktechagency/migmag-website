import React from 'react';
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import MusicDetails from "@/app/(website)/browse-vocal/[id]/MusicDetails";
import MaxWidth from "@/components/max-width/MaxWidth";

const Page : React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MaxWidth>
                <MusicDetails></MusicDetails>
            </MaxWidth>
            <UpdateFooter></UpdateFooter>
        </div>
    );
};

export default Page;