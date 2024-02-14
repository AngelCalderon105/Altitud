import MenuLink from "./MenuLink"
import MenuTitle from "./MenuTitle"

interface MenuSectionProps {
    menuList:string[];
}

export default function MenuSection({menuList}: MenuSectionProps) {

    return (
        <ul>
            {menuList.map((item,index) => (
                <li key = {index} className="py-1 ">
                    {index === 0 ? <MenuTitle sectionTitle = {item}/> :
                   <MenuLink directoryLink = {item}/>}
                   
                </li>
            ))}
        </ul>
        )
}