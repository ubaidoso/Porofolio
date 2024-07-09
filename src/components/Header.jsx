import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import logo from "../../public/logo.png"

const menu =  [
    {
        sectionTitle : "Home",
        sectionLink : "#",
    },
    {
        sectionTitle : "About",
        sectionLink : "#",
    },
    {
        sectionTitle : "Services",
        sectionLink : "#",
    },
    {
        sectionTitle : "Portfolio",
        sectionLink : "#",
    },
    {
        sectionTitle : "Contact Us",
        sectionLink : "#",
    },

]


const Header = () => {
  return (
    <header className='py-4 border-b-2 border-gray-100 font-'>
        <div className="container px-4">
            <div className="flex justify-between gap-4 items-center"> 
                <div className="w-40">
                    <Image src={logo} alt={logo} />
                </div>
                <ul className='inline-flex items-center gap-8'>
                    {
                        menu.map((menus,index) => (
                            <li key={index} className='relative'>
                                <Link href={menus.sectionLink} className='uppercase text-sm'>
                                    {menus.sectionTitle}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="inline-block">
                    <Button title={'Let`s Talk'} link={'tel:03161465059'} btnClass={'cst_fill'} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
