import React, { useState } from 'react'
import useData from '../hooks/useData'
import { useParams } from 'react-router';

export default function UserRepos() {
    const {username} = useParams()

    const { response } = useData(`https://api.github.com/users/${username || "GitHub"}/repos`)
    console.log(response)
    const [showAll, setShowAll] = useState(false);
    const reposToShow = showAll ? response : response?.slice(0, 4);

    return (
        <div className=" w-[85%] lg:w-[80%] mx-auto mt-4  h-full flex flex-col md:flex-wrap md:flex-row  gap-5">
            {reposToShow?.map((repos) => {
                 const date = new Date(repos.updated_at)
                 const oldDate = date.getTime()
                 const actualDate = Date.now()   
                 const updateDate = Math.round((actualDate - oldDate) / (86400000))
                return (

                    <div className="bg-gradient-to-r from-[#111729] to-[#1d1b48] rounded-lg min-h-[10%] md:w-[48%] py-3 tracking-tight cursor-pointer hover:transform hover:-translate-y-1 hover:scale-101 transition-all duration-400" key={repos.id}>
                        <a href={repos.html_url} target="_blank" rel="noopener noreferrer">
                            <h2 className="text-[#CDD5E0] font-semibold lg:text-xl  w-[90%] mx-auto mb-2">{repos.name}</h2>
                            <p className="text-[#97A3B6] text-xs lg:text-sm font-semibold w-[90%] mx-auto">{repos.description}</p>

                            <div className="w-[90%] mx-auto mt-3 mb-1 flex flex-wrap items-center gap-2 ">
                                <div className={`w-11 flex items-center justify-between mr-1.5 ${repos.license === null && "hidden"}`}>
                                    <img className="size-5" src="/Chield_alt.svg" alt="" />
                                    <p className="text-[#97A3B6] font-semibold text-xs">MIT</p>
                                </div>
                                <div className="w-12 flex items-center  mr-1">
                                    <img className="size-5 mr-1" src="/Nesting.svg" alt="" />
                                    <p className="text-[#97A3B6] font-semibold text-xs">{repos.forks}</p>
                                </div>
                                <div className="w-12 flex items-center mr-4">
                                    <img className="size-5 mr-1" src="/Star.svg" alt="" />
                                    <p className="text-[#97A3B6] font-semibold text-xs">{repos.stargazers_count}</p>
                                </div>
                                <p className="text-[#97A3B6] text-[9.5px] font-semibold w-20">updated {updateDate} days ago</p>

                            </div>
                        </a>
                    </div>

                )
            })}

            <p
                className="w-full flex justify-center text-[#CDD5E0] text-sm font-semibold tracking-tight mb-6 hover:border-white hover:border-b-1 hover:text-gray-100 cursor-pointer"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show less" : "View all repositories"}
            </p>

        </div>
    )
}
