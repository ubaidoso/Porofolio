import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import logo from "../../public/logo.png"
import ToggleBar from "../../public/menu-bar.png"
import Close from "../../public/close.png"

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


    const [menuToggle, setMenuToggle] = useState(false);

    const handleToggleMenu = () => {
        setMenuToggle(!menuToggle);
    };
    
    const handleCloseMenu = () => {
        setMenuToggle(false);
    };


  return (
    <header className='py-4 border-b-2 border-gray-100 font-'>
        <div className="container px-4">
            <div className="flex justify-between gap-4 items-center"> 
                <div className="w-40">
                    <Image src={logo} alt={logo} />
                </div>
                <div className={`cst_menu lg:relative fixed top-0 right-0 lg:bg-transparent lg:w-auto lg:h-auto bg-lightblack w-72 h-screen z-10 p-6 ${menuToggle ? 'slide-in' : 'slide-out'}`}>
                        <button onClick={handleCloseMenu} className="lg:hidden block ml-auto mb-10">
                            <Image src={Close} width={20} height={20} alt={Close} />
                        </button>
                    <ul className='lg:inline-flex items-center gap-8 '>
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
                </div>
                <div className="lg:inline-block hidden">
                    <Button title={'Let`s Talk'} link={'tel:03161465059'} btnClass={'cst_fill'} />
                </div>
                <button className='lg:hidden' onClick={handleToggleMenu}>
                    <Image src={ToggleBar} width={30} height={30} alt={ToggleBar} />
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
