interface MenuLinkProps {
    directoryLink:string;
}

export default function MenuLink({directoryLink}:MenuLinkProps) {
    
    return (
        <> 
        <a href="/" className="text-light-blue text-xs sm:text-base lg:text-lg">
            {directoryLink}
        </a>
        </>
    )
}