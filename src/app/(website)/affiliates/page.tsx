import React from 'react';
import AffiliatesBanner from "@/app/(website)/affiliates/AffiliatesBanner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AvatarSlider from "@/app/(website)/affiliates/AvatarSlider";

const Page : React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AffiliatesBanner></AffiliatesBanner>
            <AvatarSlider></AvatarSlider>
            <Footer></Footer>
        </div>
    );
};

export default Page ;