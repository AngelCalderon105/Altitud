import SubHeader from '../Components/SubHeader'
import CardBackground from './CardBackground'
import ContactInfo from './ContactInfo'

interface CustomerInputProps {
    id: string;
}

export default function CustomerInput({id}:CustomerInputProps) {

    return (
        <div id={id} className='flex flex-col items-center md:m-20 mb-10'>
           <div className='w-9/12 md:w-full lg:w-10/12 xl:w-7/12 '>
           <h1 className='text-center text-4xl md:text-left sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl '>Let&apos;s Connect</h1>
            <SubHeader text = {"Let us know what you need and the timeline you are expecting in order to ensure your vision comes to life. We'll get back to you Same Day!"}/>
            </div>
            <div className='flex justify-center w-11/12 lg:w-full md:w-11/12 xl:w-10/12 2xl:w-8/12'>
                <CardBackground />
            </div>
            <div className='md:hidden flex justify-center  text-2xl mt-5'>
            <ContactInfo/>
            </div>

        </div>
    )
}