import React from 'react';
import AffiliatesBanner from "@/app/(website)/affiliates/AffiliatesBanner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AvatarSlider from "@/app/(website)/affiliates/AvatarSlider";
import Benefits from "@/app/(website)/affiliates/Benefits";

const Page : React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AffiliatesBanner></AffiliatesBanner>
            <AvatarSlider></AvatarSlider>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    );
};

export default Page ;