"use client";


import {useEffect} from 'react';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import {useFollowListQuery} from "@/redux/api/authApi/authApi";
import {imgUrl} from "@/utility/img/imgUrl";


const FollowingPage: React.FC = () => {


    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login"); // Redirect if no token
        }


    }, [router]);

    const {data} = useFollowListQuery();




    const artistList = data?.data?.data || [];
    console.log(artistList)

    return (

        <main>
            <div>
                <h1 className=' text-[#FFFFFF] text-lg font-medium mb-5 '>Artists your following <span
                    className=' text-[#818080] '>({artistList.length})</span></h1>

            </div>

            <div
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
                {artistList.map((song, index) => (
                    <div
                        key={index}
                        className="bg-[#333333]   p-4 rounded-md"
                    >
                        <div className="flex items-center  gap-x-5">
                            <div>
                                <Image
                                    src={`${imgUrl}/${song.artist?.profile}`}
                                    alt={song?.artist?.name}
                                    width={93}
                                    height={91}
                                    className="object-cover w-[93px] h-[95px] rounded-md"
                                />
                            </div>
                            <div>
                                <p className="text-[#818080] text-sm leading-6">{song?.artist.name}</p>
                                <h1 className="text-[#FFFFFF] font-bold">{song?.artist?.singer}</h1>
                                <h1 className="text-[#FFFFFF] font-bold">{song?.artist?.gender}</h1>
                                <h1 className="text-[#FFFFFF] font-bold">{song?.artist?.location}</h1>
                                <div className="flex items-center gap-x-3.5 mt-2">
                                    {/*<button*/}
                                    {/*    className="cursor-pointer w-9 h-9 rounded-full bg-[#E7F056] flex justify-center items-center">*/}
                                    {/*    <svg*/}
                                    {/*        width="15"*/}
                                    {/*        height="18"*/}
                                    {/*        viewBox="0 0 15 18"*/}
                                    {/*        fill="none"*/}
                                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    >*/}
                                    {/*        <g clipPath="url(#clip0_1_515)">*/}
                                    {/*            <path*/}
                                    {/*                d="M0.519546 1.98098V16.019C0.51843 16.2516 0.579713 16.4802 0.696956 16.6809C0.8142 16.8815 0.983082 17.0468 1.18589 17.1593C1.3887 17.2719 1.61796 17.3275 1.84961 17.3205C2.08125 17.3135 2.30675 17.2441 2.50244 17.1195L13.995 9.27769C14.1802 9.16111 14.3329 8.99922 14.4388 8.8072C14.5447 8.61517 14.6002 8.3993 14.6002 8.17984C14.6002 7.96038 14.5447 7.74454 14.4388 7.55251C14.3329 7.36049 14.1802 7.19857 13.995 7.08198L2.50244 0.8857C2.30712 0.761336 2.08209 0.691929 1.85089 0.684709C1.61969 0.677489 1.3908 0.732713 1.18816 0.844648C0.98551 0.956584 0.816543 1.12112 0.698927 1.32101C0.58131 1.52091 0.519352 1.74884 0.519546 1.98098Z"*/}
                                    {/*                fill="#222222"*/}
                                    {/*            />*/}
                                    {/*        </g>*/}
                                    {/*        <defs>*/}
                                    {/*            <clipPath id="clip0_1_515">*/}
                                    {/*                <rect*/}
                                    {/*                    width="14.08"*/}
                                    {/*                    height="16.64"*/}
                                    {/*                    fill="white"*/}
                                    {/*                    transform="translate(0.519531 0.679932)"*/}
                                    {/*                />*/}
                                    {/*            </clipPath>*/}
                                    {/*        </defs>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* player  */}


        </main>
    );
}
export default FollowingPage