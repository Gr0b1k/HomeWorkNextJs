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

const Navbar = ( { containerStyle} : {containerStyle: string} ) => {
  return (
    <nav className={`${containerStyle}`}>
        <menu className='w-full flex items-center justify-center gap-4 '>
            {menuLinks.map(( item, index) =>{
                return(
                    <>
                        <li key={index}>
                            <Link className=' text-white uppercase hover:text-accent transition-all duration-300' href={item.url}>{item.label}</Link>
                        </li>
                    </>
                )
            })}
        </menu>
    </nav>
  )
}

export default Navbar
