interface FormButtonProps {
    text:string;
}
export default function FormButton({text}:FormButtonProps) {
    return(
        <p className="text-lg  bg-white whitespace-nowrap text-black px-7 py-1 ">{text}</p>
    )

}