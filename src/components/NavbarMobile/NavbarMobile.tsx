import Link from 'next/link'
import React from 'react'

// menuData
const menuLinks = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: '/projects' },
    { label: 'Videos', url: '/videos' },
    { label: 'Contact', url: '/contacts' },
]

const NavbarMobile = ( { containerStyle} : { containerStyle : string}) => {
  return (
    <nav className={`${containerStyle}`}>
       <menu className='w-full flex flex-col mt-[25px] gap-[30px] '>
            {menuLinks.map(( item, index) =>{
                return(
                    <>
                        <li key={index}>
                            <Link className=' text-white uppercase hover:text-accent transition-all duration-300' href={item.url}>{item.label}</Link>
                        </li>
                    </>
                )
            })}
            <li className="">
                <Link href="/login" className=' uppercase text-black/70 py-[10px] px-[25px] hover:text-black hover:scale-[1.1] transition-all duration-300 bg-white'>Login</Link> 
            </li>
        </menu>
    </nav>
  )
}

export default NavbarMobile
