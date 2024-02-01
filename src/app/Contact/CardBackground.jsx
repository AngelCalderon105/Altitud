import Image from 'next/image'
import background from '../assets/CardBackgroundd.svg'
import ContactInfo from './ContactInfo'
import Form from './Form'
export default function CardBackground() {
return(
    <div  style={{ backgroundImage: `url(${background.src})`,  backgroundPosition: 'center', backgroundSize: '130%', backgroundRepeat: 'no-repeat' }} className="flex justify-between rounded-lg shadow-2xl mt-8">
      <div className='flex flex-col justify-between p-5'>
           <div className="">
            <h1 className='text-3xl font-bold'>Get Same Day Response!</h1>
            </div>
            <div className='items-end'>
            <ContactInfo/>
            </div>
      </div>
            <div className=''>
            <Form />
            </div>
        
    </div>
  
    )
}