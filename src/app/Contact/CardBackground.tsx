import background from '../assets/CardBackground.svg'
import ContactInfo from './ContactInfo'

import Form from './Form'
export default function CardBackground() {
return(
    <div style={{ backgroundImage: `url(${background.src})`,  backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} 
    className="picSize md:flex justify-between 2xl:justify-around rounded-lg shadow-2xl mt-8 w-full md:w-full lg:w-10/12 md:pr-6"> {/* This w controls the size of the card */}
 
      <div className='flex flex-col justify-around lg:justify-between md:ml-3 lg:ml-10 2xl:ml-0 pt-5 md:pt-8 md:pl-5 lg:pt-12 '>
           <div>
            <h1 className='text-center text-3xl md:text-left sm:text-3xl lg:text-4xl font-bold pl-2 '>Get Same Day <br/> Response!</h1>
            </div>
            <div  className='hidden md:block lg:pb-10 md:pt-40 lg:p-0 '>
            <ContactInfo/>
            </div>
      </div>
            <div className='w-full  flex flex-col justify-center items-center md:items-end'>
            <Form /> 
            </div>
            
       
    </div>
  
    )
}