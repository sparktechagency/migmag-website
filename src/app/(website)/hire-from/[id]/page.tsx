import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Footer from '@/components/footer/Footer'
import HireFrom from './HireFrom'


const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;

    return (
        <div>
            <Navbar />
            <HireFrom id={id} />
            <Footer />
        </div>
    );
};

export default Page;
