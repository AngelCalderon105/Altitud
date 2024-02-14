interface MenuTitleProps {
    sectionTitle: string;
}

export default function MenuTitle({sectionTitle}:MenuTitleProps) {

    return ( 
        <> 
        <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{sectionTitle}</h1>
        </>
    )
}