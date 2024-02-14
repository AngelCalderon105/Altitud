interface NavbarItemProps {
    itemName: string;
  }
  
  export default function NavbarItem({ itemName }: NavbarItemProps) {
    return (<p className="text-xl px-4">{itemName}</p>);
  }
//we should probably delete this, no longer in use