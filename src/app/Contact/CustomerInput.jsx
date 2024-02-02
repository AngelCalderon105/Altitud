import SubHeader from '../Components/SubHeader'
import CardBackground from './CardBackground'
export default function CustomerInput() {

    return (
        <div className='flex flex-col items-center m-20'>
           <div className='lg:w-10/12 xl:w-7/12'>
           <h1 className='lg:text-5xl xl:text-5xl '>Let&apos;s Connect</h1>
            <SubHeader text = {"Let us know what you need and the timeline you are expecting in order to ensure your vision comes to life. We'll get back to you Same Day!"}/>
            </div>
            <div className='flex justify-center md:w-9/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12'>
                <CardBackground />
            </div>

        </div>
    )
}