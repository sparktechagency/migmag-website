
import React from 'react'


import HireVocal from './HireVocal'

import UpdateFooter from "@/components/footer/UpdateFooter";

import Navbar from "@/components/navbar/Navbar";
import HireBanner from "@/app/(website)/hire/HireBanner";


const Page: React.FC = () => {



    return (
        <>


                <Navbar></Navbar>

                <HireBanner></HireBanner>



            {/* content  */}

            <HireVocal></HireVocal>


            {/* footer */}
            <div>
                <UpdateFooter></UpdateFooter>
            </div>
        </>
    )
}

export default Page
