'use client'
import { useState} from 'react'
import Logo from '../Components/Logo'
import ActionButton from '../Components/ActionButton'
import Link from 'next/link'
import NavbarItem from './NavbarItem'

interface NavbarItem {
    name:string;
    path:string;
}

interface NavbarItemProps {
    navbarList:NavbarItem[];
}



export default function NavBar({navbarList}:NavbarItemProps) {

    const[isOpen,setIsOpen] = useState<boolean>(false);
   
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    
    return (
<nav className={`bg-dark-blue md:bg-transparent fixed group md:absolute top-0 left-0 w-full z-50 md:flex ${isOpen ? 'nav-open' : 'nav-closed'}`}>
    
     <div className='absolute w-full m-14 '>
        <ul className=' items-center text-lg'>
                    {navbarList.map((item) => (
                        <li key={item.name} onClick={toggleNav}>
                            <Link href={`/${item.path}`}>
                                <NavbarItem itemName={item.name} />
                            </Link>
                        </li>
                    ))}
                </ul>
     </div>
     
            <div className= {`text-3xl  flex justify-center items-end md:justify-start py-4 md:px-5 md:w-60 h-full`}>
                <Logo textSize="text-2xl md:text-3xl flex items-center" logoSize='w-9 md:w-14' />
            </div>
            <div className='absolute top-3.5 left-3 w-8 md:hidden' onClick={toggleNav}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="" stroke="currentColor" className="hamburger">
                   <path className="top-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5" />
                  <path className="middle-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
                  <path className="bottom-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75h16.5" />
                 </svg>
            </div>


            <div className={`hidden md:flex md:justify-between md:w-full ${isOpen ? 'flex' : ''}`}>
                <ul className='flex items-center text-lg'>
                    {navbarList.map((item) => (
                        <li key={item.name}>
                            <Link href={`/${item.path}`}>
                                <NavbarItem itemName={item.name} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='px-4 md:flex md:items-center'>
                    <Link href={"/#contact-section"}>
                        <ActionButton text="Let's Connect" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}