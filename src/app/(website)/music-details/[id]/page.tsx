import React from 'react';
import MusickDetails from "@/app/(website)/music-details/[id]/MusickDetails";

const Page = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await  params;
    return (
        <div>
            <h1>Music details page </h1>
            <h1> Music id is {id} </h1>
            <MusickDetails></MusickDetails>
        </div>
    );
};

export default Page;