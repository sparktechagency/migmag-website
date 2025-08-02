import React from 'react';
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import MusickDetails from './MusickDetails';
import VocalInfoSection from './../VocalInfoSection';
import Folder from '../Folder';
import MusicReview from '../MusicReview';
import MoreVocals from '../MoreVocals';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log( typeof id);
    return (
        <div>
            <div className={'max-w-7xl mx-auto  '}>
                <Navbar></Navbar>
                <div className={' my-2 lg:my-12'} >
                    <MusickDetails id = {id} ></MusickDetails>
                    <VocalInfoSection></VocalInfoSection>
                    <Folder />
                    <MusicReview></MusicReview>
                    <MoreVocals id = {id} ></MoreVocals>
                </div>
                <UpdateFooter></UpdateFooter>

            </div>

        </div>
    );
};

export default Page;