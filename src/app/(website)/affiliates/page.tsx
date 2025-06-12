import React from 'react';
import AffiliatesBanner from "@/app/(website)/affiliates/AffiliatesBanner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AvatarSlider from "@/app/(website)/affiliates/AvatarSlider";
import Benefits from "@/app/(website)/affiliates/Benefits";
import VocalPartner from "@/app/(website)/affiliates/VocalPartner";
import DownloadSection from "@/app/(website)/affiliates/DownloadSection";
import AffiliateQuestions from "@/app/(website)/affiliates/AffiliateQuestions";
import AffiliateGuidelines from "@/app/(website)/affiliates/AffiliateGuidelines";

const Page : React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AffiliatesBanner></AffiliatesBanner>
            <AvatarSlider></AvatarSlider>
            <Benefits></Benefits>
            <VocalPartner></VocalPartner>
            <DownloadSection></DownloadSection>
            <AffiliateGuidelines></AffiliateGuidelines>
            <AffiliateQuestions></AffiliateQuestions>
            <Footer></Footer>
        </div>
    );
};

export default Page ;