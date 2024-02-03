import SubHeader from '../Components/SubHeader'
import CardBackground from './CardBackground'
export default function CustomerInput() {

    return (
        <div className='flex flex-col items-center md:m-20 mb-52'>
           <div className='w-9/12 lg:w-10/12 xl:w-7/12 '>
           <h1 className='text-center text-4xl md:text-left sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl '>Let&apos;s Connect</h1>
            <SubHeader text = {"Let us know what you need and the timeline you are expecting in order to ensure your vision comes to life. We'll get back to you Same Day!"}/>
            </div>
            <div className='flex justify-center w-10/12 md:w-12/12 xl:w-9/12 2xl:w-8/12'>
                <CardBackground />
            </div>

        </div>
    )
}