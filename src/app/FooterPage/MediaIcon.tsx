import Image from "next/image"

interface MediaIconProps {
    icon:string;
}
export default function MediaIcon({icon}:MediaIconProps) {

    return (
        <>
        <a href="/" className="">
            <Image src={icon} alt="" />
        </a>
        </>
    )
}