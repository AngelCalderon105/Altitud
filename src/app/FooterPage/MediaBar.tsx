import LinkedInSvg from '../assets/LinkedIn.svg';
import TiktokSvg from '../assets/Tiktok.svg';
import TwitterSvg from '../assets/Twitter.svg';
import InstagramSvg from '../assets/Instagram.svg';
import MediaIcon from './MediaIcon';

export default function MediaBar() {
    return (
        <div className='flex items-center gap-x-2 lg:gap-x-4'>
            <MediaIcon icon={LinkedInSvg} url="https://www.linkedin.com/company/altitud-initiative" />
            <MediaIcon icon={TiktokSvg} url="https://www.tiktok.com/@altitud.official" />
            <MediaIcon icon={TwitterSvg} url="https://twitter.com/AltitudOfficial" />
            <MediaIcon icon={InstagramSvg} url="https://www.instagram.com/altitud.official/" />
        </div>   
    );
}
