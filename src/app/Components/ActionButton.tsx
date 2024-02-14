interface ActionButtonProps {
    text:string;
}

export default function ActionButton({text}:ActionButtonProps) {
return (
    <>
    <button className="text-lg  rounded-3xl px-9 py-1 bg-primary-purple whitespace-nowrap">{text}</button>
    </>
)

}