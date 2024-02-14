interface SubHeaderProps {
    text:string;
}
export default function SubHeader({text}:SubHeaderProps) {
    return (
        <>
        <h1 className="text-xl md:text-lg text-center lg:text-xl md:text-left">{text}</h1>
        </>
    )
}