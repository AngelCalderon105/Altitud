import background from '../assets/CardBackgroundd.svg'
import ContactInfo from './ContactInfo'
import Form from './Form'
export default function CardBackground() {
return(
    <div style={{ backgroundImage: `url(${background.src})`,  backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} 
    className="picSize md:flex justify-between 2xl:justify-around h-mobile-card md:h-card-height rounded-lg shadow-2xl mt-8 w-full "> {/* This w controls the size of the card */}
 
      <div className='flex flex-col justify-between md:ml-3 lg:ml-10 pt-10'>
           <div>
            <h1 className='text-center text-3xl md:text-left sm:text-5xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-bold pl-2'>Get Same Day <br/> Response!</h1>
            </div>
            <div className='hidden md:block pb-10'>
            <ContactInfo/>
            </div>
      </div>
            <div className='w-full sm:w-11/12 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-6/12 flex flex-col justify-center items-center sm:items-end'>
            <Form /> 
            </div>
            <div className='md:hidden flex justify-center text-2xl'>
            <ContactInfo/>
            </div>
       
    </div>
  
    )
}