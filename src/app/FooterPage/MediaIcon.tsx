import Image from "next/image";

interface MediaIconProps {
    icon: string;
    url: string; // Adding a url prop
}

export default function MediaIcon({icon, url}: MediaIconProps) {
    return (
        <a href={url} className="" target="_blank" rel="noopener noreferrer">
            <Image src={icon} alt="" />
        </a>
    );
}
