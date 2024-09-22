import React from 'react'
import { SiPuma } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";

const Nav = () => {
  return (
      <div className='fixed z-20 p-7 bg-black font-semibold w-[100vw] text-white flex justify-between list-none '>
        <div className="left flex gap-8">
          <li className='logo text-3xl'><SiPuma /></li>
          <li>New</li>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Motorsport</li>
          <li>Collaboraion</li>
          <li>Sports</li>
          <li>Outlet</li>
        </div>
        <div className="right flex gap-8">
          <li className='text-3xl'><IoSearch /></li>
          <li className='text-3xl'><FaRegHeart /></li>
          <li className='text-3xl'><FaCartShopping /></li>
          <li className='text-3xl'><MdOutlinePersonOutline /></li>
        </div>
      </div>
  )
}

export default Nav
