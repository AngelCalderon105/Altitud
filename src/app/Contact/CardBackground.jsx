import Image from 'next/image'
import background from '../assets/CardBackgroundd.svg'
import ContactInfo from './ContactInfo'
import Form from './Form'
export default function CardBackground() {
return(
    <div  style={{ backgroundImage: `url(${background.src})`,  backgroundPosition: 'center', backgroundSize: '180%', backgroundRepeat: 'no-repeat' }} 
    className="flex justify-between h-card-height rounded-lg shadow-2xl mt-8 w-full "> {/* This w controls the size of the card */}
 
      <div className='flex flex-col justify-between pl-10 pt-10'>
           <div>
            <h1 className=' lg:text-4xl xl:text-3xl 2xl:text-4xl font-bold pl-2'>Get Same Day <br/> Response!</h1>
            </div>
            <div className=' pb-10'>
            <ContactInfo/>
            </div>
      </div>
            <div className='lg:w-7/12 2xl:w-1/2 flex justify-center lg:justify-end '>
            <Form />
            </div>
       
    </div>
  
    )
}