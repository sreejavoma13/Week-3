import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function Home() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const navigate = useNavigate();
  const navigate2=useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if(debouncedQuery){
        navigate(`/search/${debouncedQuery}`)
    }else if(location.pathname.startsWith("/search/") && !location.pathname.includes("random")){
        navigate("/")
    }
  },[debouncedQuery,navigate,location.pathname])
  
  const handleclick=()=>{
    navigate('/search/random')
  }

  return (
    <>
      <h1 className='text-center text-4xl font-extrabold font-mono pt-6'>Welcome to <span className='text-rose-400'>Recipe Finder</span></h1>
      <p className='text-center text-2xl font-mono pt-7 px-26'>
      🌿 "Welcome to <span className='text-rose-400'>Recipe Finder</span> — your personal gateway to discovering delicious meals made simple. Whether you're a kitchen newbie or a seasoned cook, explore a world of flavorful recipes curated to match your cravings and ingredients. Search, save, and savor every bite — because every great dish starts with a little inspiration." 🍽️
      </p>
      <div className="w-full max-w-xs align-center mx-auto w-1/2 pt-9 flex">
          <input
            type="text"
            placeholder="Search Recipe..."
            className="w-full bg-slate-700 text-white px-4 py-2 mx-4 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='w-full bg-slate-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400' onClick={handleclick} >Try random !</button>
        </div>
        <button className='mx-[580px] mt-[20px] bg-slate-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400' onClick={()=>navigate2("/favorites")} >Your favorites !</button>
    </>
  )
}
