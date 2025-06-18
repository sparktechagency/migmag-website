import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import HomeBanner from './HomeBanner'
import MusickSlider from './MusickSlider'
import TopTenVocal from './TopTenVocal'
import ArtistList from './ArtistList'
import VocalPublish from './VocalPublish'
import Coverd from './Coverd'
import CookieConsent from '@/components/cookie/cookie-consent'
import UseSound from "@/pages/home-page/UseSound";
import UpdateFooter from "@/components/footer/UpdateFooter";
import VocalPublishLogo from "@/pages/home-page/VocalPublishLogo";

const HomePage: React.FC = () => {
    return (
        <div>
            <div className={``}>
                <Navbar></Navbar>
                <div className=''>
                    <HomeBanner></HomeBanner>
                </div>
                <div>
                    <VocalPublishLogo></VocalPublishLogo>
                </div>
                <MusickSlider></MusickSlider>
                <div className='  lg:mt-[69px] mt-6 '>
                    <TopTenVocal></TopTenVocal>
                </div>
                <div className='  '>
                    <ArtistList></ArtistList>
                </div>

                <div>
                    <VocalPublish></VocalPublish>
                </div>
                <UseSound></UseSound>
                <div>
                    <Coverd></Coverd>
                </div>


                <UpdateFooter></UpdateFooter>
                <CookieConsent/>
            </div>
        </div>
    )
}

export default HomePage
