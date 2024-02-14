import Image from 'next/image'
import cloudLogo from '../assets/cloud-logo.svg'

interface LogoProps {
    logoSize:string;
    textSize:string;
}
export default function Logo({logoSize, textSize}:LogoProps) {
    return (
        <div className = 'flex jusitfy-center items-center gap-2  max-w-max'>
            <Image src = {cloudLogo} className={logoSize} alt='logo'/>
            <h1 className={textSize}>Altitud</h1>
        </div>
    )
}