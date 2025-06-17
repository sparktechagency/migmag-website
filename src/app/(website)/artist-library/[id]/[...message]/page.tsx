import React from 'react';
import Inbox from "@/app/(website)/artist-library/[id]/[...message]/Inbox";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Page = () => {
    return (
        <div>
           <Navbar />
            <Inbox></Inbox>
            <Footer></Footer>
        </div>
    );
};

export default Page;