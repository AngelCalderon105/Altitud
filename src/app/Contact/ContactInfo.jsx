import Image from 'next/image'
import home from '../assets/Home.svg'
import mail from '../assets/Mail.svg'
import phone from '../assets/Phone.svg'
export default function ContactInfo() {

   return (

    <ul className='flex flex-col'>
<li className='flex items-center'>
  <Image src={home} alt="" className='h-5 m-2 w-1/12' /> ContactAltitud@gmail.com
</li>
<li className='flex items-center'>
<Image src={mail} alt="" className='h-3 m-2 w-1/12'/> 714-489-3285
</li>
<li className='flex items-center'>
<Image src={phone} alt="" className='h-5 m-2 w-1/12' /> Orange County,CA
</li>
        </ul>
    
   )
}