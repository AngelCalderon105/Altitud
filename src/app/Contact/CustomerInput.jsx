import SubHeader from '../Components/SubHeader'
import CardBackground from './CardBackground'
export default function CustomerInput() {

    return (
        <div className='flex flex-col items-center mb-20'>
           <div className='w-7/12 '>
           <h1 className='text-4xl text-left'>Let&apos;s Connect</h1>
            <SubHeader text = {"Let us know what you need and the timeline you are expecting in order to ensure your vision comes to life. We'll get back to you Same Day!"} />
            </div>
            <div className='flex justify-center w-7/12'>
                <CardBackground />
            </div>

        </div>
    )
}