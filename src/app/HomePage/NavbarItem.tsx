interface NavbarItemProps {
    itemName: string;
  }
  
  export default function NavbarItem({ itemName }: NavbarItemProps) {
    return (<p className="text-3xl py-2 md:text-xl md:px-4">{itemName}</p>);
  }
//we should probably delete this, no longer in use