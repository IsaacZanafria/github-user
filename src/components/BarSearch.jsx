import React, { useState } from 'react'
import useData from "../hooks/useData"
import { Link } from 'react-router'


export default function BarSearch({ close, closeBox, openBox }) {
    const [input, setInput] = useState("")
    const [search, setSearch] = useState("")
    const { response, loading } = useData(`https://api.github.com/users/${search}`)
    console.log(response)

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setSearch(input);
        }
    }

    return (
        <nav className=" flex justify-center" >
            <img className="h-60 object-cover w-full" src="/hero-image-github-profile.jpg" alt="" />
            <div className=" absolute top-6 w-[85%] max-w-120 h-35">
                <div className="bg-[#20293A] w-full h-14 rounded-xl flex items-center hover:bg-[#151b26] focus:bg-[#151b26]">
                    <img className="w-13 size-5.5" src="/Search.svg" alt="" onClick={closeBox} />
                    <input className="w-[80%] mb-0.5 text-white font-semibold tracking-tight border-0 outline-0 cursor-pointer " type="text" placeholder="username"
                        value={input}
                        onKeyDown={handleKeyDown}
                        onClick={openBox}
                        onChange={(e) => setInput(e.target.value)} />
                </div>

                {loading &&
                    <div className="justify-center bg-[#111729] mt-1.5 w-full h-20 rounded-lg flex items-center cursor-pointer hover:bg-[#100f1c] absolute">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>

                }
                {close &&
                    <>
                        {response &&
                            <Link to={`/${response.login}`}>
                                <div className="bg-[#111729] mt-1.5 w-full h-20 rounded-lg flex items-center cursor-pointer hover:bg-[#100f1c]" key={response.id} onClick={() => {
                                    setInput("")
                                    closeBox()
                                }}>
                                    <img className="w-16 mx-2 h-[80%] rounded-lg " src={response.avatar_url} alt="" />
                                    <div className="w-[70%] ml-1">
                                        <h2 className="text-[#CDD5E0] font-semibold text-sm">{response.login}</h2>
                                        <p className="text-[#97A3B6] text-[10px] md:text-xs tracking-tight">{response.bio}</p>
                                    </div>
                                </div>
                            </Link>
                        }
                    </>
                }


            </div>
        </nav>
    )
}
