import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../app/HomePage/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Altitud',
  description: 'Community uplifting web developers',
}
 const navbarList = [
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