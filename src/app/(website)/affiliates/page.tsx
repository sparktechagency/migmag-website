import React from 'react';
import AffiliatesBanner from "@/app/(website)/affiliates/AffiliatesBanner";
import Navbar from "@/components/navbar/Navbar";
import AvatarSlider from "@/app/(website)/affiliates/AvatarSlider";
import Benefits from "@/app/(website)/affiliates/Benefits";
import VocalPartner from "@/app/(website)/affiliates/VocalPartner";
import DownloadSection from "@/app/(website)/affiliates/DownloadSection";
import AffiliateQuestions from "@/app/(website)/affiliates/AffiliateQuestions";
import AffiliateGuidelines from "@/app/(website)/affiliates/AffiliateGuidelines";
import UpdateFooter from "@/components/footer/UpdateFooter";

const Page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={` lg:my-14 my-8 `} >
                <AffiliatesBanner></AffiliatesBanner>
                <AvatarSlider></AvatarSlider>
                <Benefits></Benefits>
                <VocalPartner></VocalPartner>
                <DownloadSection></DownloadSection>
                <AffiliateGuidelines></AffiliateGuidelines>
                <AffiliateQuestions></AffiliateQuestions>
            </div>
            <UpdateFooter></UpdateFooter>
        </div>
    );
};

export default Page;