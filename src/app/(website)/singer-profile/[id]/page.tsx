// src/app/(website)/singer-profile/[id]/page.tsx

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import UpdateFooter from '@/components/footer/UpdateFooter';
import SingerDetails from '../SingerDetails';

type Props = {
    params: {
        id: string;
    };
};

const Page = async ({ params }: Props) => {
    const { id } = params;

    console.log('Singer ID:', id);

    if (typeof id !== 'string') {
        throw new Error('Invalid ID: expected a string');
    }

    return (
        <div>
            <Navbar />
            <SingerDetails id={id} />
            <UpdateFooter />
        </div>
    );
};

export default Page;
