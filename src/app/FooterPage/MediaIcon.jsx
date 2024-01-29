import Image from "next/image"
export default function MediaIcon({icon}) {

    return (
        <>
        <a href="/" className="">
            <Image src={icon} alt="" />
        </a>
        </>
    )
}