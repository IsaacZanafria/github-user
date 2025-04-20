import React from 'react'
import UserRepos from './UserRepos'
import useData from "../hooks/useData"
import { useParams } from 'react-router'


export default function User({closeBox}) {
    const {username} = useParams()
    const { response } = useData(`https://api.github.com/users/${username || "GitHub"}`)
    console.log(response)
    return (
        <>

            {response &&
                < >
                    <main className="bg-[#20293A] w-full  flex flex-col md:flex-row md:h-16 lg:h-22" onClick={closeBox}>
                        <div className="bg-[#20293A] w-24 lg:w-28 h-24 lg:h-28 pt-1.5 rounded-lg  relative bottom-8 left-6 md:left-[9%] lg:left-[12%] xl:left-[12%]">
                            <img className="w-21 lg:w-25 mx-auto h-20 lg:h-24 rounded-lg " src={response.avatar_url} alt="" />
                        </div>

                        <div className=" w-[85%] md:w-130 lg:w-150  md:h-14 lg:h-17 mx-auto md:mx-0 lg:mx-auto flex flex-wrap gap-2 md:items-center md:ml-[11%] lg:ml-[14%] xl:ml-[14%]">
                            <div className=" bg-[#111729] w-36 lg:w-42 h-9 lg:h-11 rounded-lg text-[#CDD5E0] flex text-xs lg:text-sm items-center justify-evenly tracking-tight font-semibold">
                                <p className="border-[#a5a6a796] h-6 border-r-1 w-[45%] flex items-center">Followers</p>
                                <p className="w-[35%] flex justify-center">{response.followers}</p>
                            </div>
                            <div className=" bg-[#111729] w-32 lg:w-38 h-9 lg:h-11 rounded-lg text-[#CDD5E0] flex text-xs lg:text-sm items-center justify-evenly tracking-tight font-semibold">
                                <p className="border-[#a5a6a796] h-6 border-r-1 w-[50%] flex items-center">Following</p>
                                <p className="w-[25%] flex justify-center">{response.following}</p>
                            </div>
                            <div className=" bg-[#111729] w-52 lg:w-58  h-9 lg:h-11 rounded-lg text-[#CDD5E0] flex text-xs lg:text-sm items-center justify-evenly tracking-tight font-semibold">
                                <p className="border-[#a5a6a796] h-6 border-r-1 w-[30%] flex items-center">Location</p>
                                <p className="w-[55%] flex justify-center">{response.location}</p>
                            </div>
                        </div>



                    </main>
                    <section className="bg-[#20293A] w-full">
                        <div className="w-[85%] lg:w-[80%] mx-auto pt-4 text-[#CDD5E0] tracking-tight">
                            <h1 className="font-semibold text-2xl lg:text-3xl">{response.name}</h1>
                            <p className="text-[#97A3B6] text-sm lg:text-base font-semibold">{response.bio}</p>
                        </div>

                        <UserRepos />

                    </section>
                </>
            }
        </>
    )
}
