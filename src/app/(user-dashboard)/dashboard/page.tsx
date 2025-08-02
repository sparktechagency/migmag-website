"use client"
import UserDashboard from '@/pages/user-dashboard/UserDashboard'
import React, {useEffect} from 'react'
import {useRouter} from "next/navigation";

const Page: React.FC = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);
    return (
        <div>
            <UserDashboard></UserDashboard>
            
        </div>
    )
}

export default Page
