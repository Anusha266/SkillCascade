import React from 'react'
import './../index.css'
import { MdOutlineMenuBook,MdNotifications } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className='bgcolor pt-4 pb-2 px-4 md:px-8 flex justify-between items-center'>
      <MdOutlineMenuBook className='text-2xl md:text-3xl text-white cursor-pointer hover:text-purple-300 opacity-90'/>
      <h1 className="text-2xl md:text-4xl font-bold transition duration-300 ease-in-out hover:scale-105 md:mb-1 text-white">
            Skill<span className='text-purple-300'>Cascade</span>
      </h1>
      <div className='flex gap-3 md:gap-5'>
        <div className='relative '>
            <MdNotifications className='text-2xl md:text-3xl text-white cursor-pointer hover:text-purple-300 opacity-90'/>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm font-semibold ">3</span>
        </div>
        <FaUserGraduate className='text-2xl md:text-3xl text-white cursor-pointer hover:text-purple-300 opacity-90'/>
      </div>
    </div>
  )
}

export default Navigation
