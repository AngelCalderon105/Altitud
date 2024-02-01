import Image from 'next/image'
import background from '../assets/CardBackgroundd.svg'
import ContactInfo from './ContactInfo'
import Form from './Form'
export default function CardBackground() {
return(
    <div  style={{ backgroundImage: `url(${background.src})`,  backgroundPosition: 'center', backgroundSize: '125%', backgroundRepeat: 'no-repeat' }} className="flex  rounded-lg shadow-2xl mt-8 w-full">
      <div className='flex flex-col justify-between p-10 '>
           <div className="">
            <h1 className='text-3xl font-bold'>Get Same Day Response!</h1>
            </div>
            <div className='items-end'>
            <ContactInfo/>
            </div>
      </div>
            <div className='w-full flex justify-end'>
            <Form />
            </div>
        
    </div>
  
    )
}