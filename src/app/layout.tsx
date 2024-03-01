import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../app/HomePage/Navbar'
import image from '../app/assets/MetaImage.webp'

export const metadata: Metadata = {
  title: 'Altitud',
  description: 'Building Brighter Futures, Software that Uplifts Communities',
  openGraph: {
    images: '/src/app/assets/MetaImage.webp', 
  },
}


interface NavbarItem {
  name:string;
  path:string;
}

 const navbarList:NavbarItem[] = [
    {name:"Home", path:"#home-section"},
    {name:"Contact Us", path:"#contact-section"},
 ];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className = 'text-white font-times'> 
      <Navbar navbarList = {navbarList}/>
        {children}
        </body>
    </html>
  )
}
//this is where you can apply site wide properties