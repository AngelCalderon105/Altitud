import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../app/HomePage/Navbar'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Altitud',
  description: 'Building Brighter Futures, Software that Uplifts Communities',
  openGraph: {
    images: 'https://altitud.io/altitud/src/app/assets/MetaImage.webp', // Replace with the actual path to your image
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