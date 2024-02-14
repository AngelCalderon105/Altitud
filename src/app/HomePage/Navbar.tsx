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
    return (
        <nav className='bg-dark-blue md:bg-transparent fixed md:absolute top-0 left-0 w-full z-50 md:flex '>
            <div className='text-3xl flex justify-center items-center md:justify-start py-4 md:px-5 md:w-60'>
                <Logo textSize = "text-2xl md:text-3xl flex items-center" logoSize='w-9 md:w-14'/>
            </div>
            <div className='absolute top-3.5 left-3 w-8 md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        
            <div className='hidden md:flex md:justify-between md:w-full'>
                <ul className='flex items-center text-lg'>
                    {navbarList.map((item) => (
                        <li key={item.name}>
                            <Link href= {`/${item.path}`}>
                             <NavbarItem itemName = {item.name}/>
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
    )
}