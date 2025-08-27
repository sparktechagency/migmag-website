// src/app/(website)/singer-profile/[id]/page.tsx

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import SingerDetails from "../SingerDetails";

// Page receives props from Next.js


// Keep actual page logic in a separate async component if needed
const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  return (
    <div>
      <Navbar />
      <SingerDetails id={id} />
      <UpdateFooter />
    </div>
  );
};

export default Page;
