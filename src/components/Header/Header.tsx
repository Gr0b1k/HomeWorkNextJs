"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa6'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

const Header = () => {

  const [ openNav, setOpenNav] = useState(false);

  return (
    <header className=' w-full h-[70px]  border-b border-blue-600 bg-blue-700/85  '>
      <div className="container relative mx-auto flex items-center h-full">
        <div className="w-full h-full relative flex items-center justify-between ">
          <Link href="/" className=' w-[100px] h-[50px]  '>
            <Image className='w-full h-full rounded-md ' src='/assets/image/logo.svg' width={200} height={50} alt='Логотип сайта'  />
          </Link>
          <NavbarMobile containerStyle={` ${openNav ? 'max-h-max border-b border-blue-950 p-[15px] ' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'} fixed w-[250px] h-full text-center right-0 top-[69px] transition-all duration-400 bg-blue-950 md:hidden`}/>
          <Navbar  containerStyle='hidden md:flex' />
          <div className="">
            <ul className="flex items-center gap-4">
              <li className=" inline-flex ">
                <Link href="" className=' uppercase text-black/70 py-[10px] px-[25px] hover:text-black hover:scale-[1.1] transition-all duration-300 bg-white hidden md:flex '>Login</Link> 
              </li>
            </ul>
            <button onClick={ () => setOpenNav(!openNav)} className=' absolute right-[-78px] top-0 text-white  text-xl w-[90px] h-[70px] flex items-center justify-center bg-blue-950 md:hidden'>
              <FaBars/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
