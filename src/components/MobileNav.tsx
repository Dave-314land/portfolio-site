import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { MobileNavLinks } from './MobileNavLinks'

export const MobileNav = () => {
    const [toggle, setIsToggled] = useState(false);
    const closeMenu = () => setIsToggled(false);

  return (
        <div className="lg:hidden pt-2 pr-2 md:pr-4">
            <button onClick={() => setIsToggled(!toggle)}>{toggle ? <X /> : <Menu />}</button>
            { toggle && <MobileNavLinks isClicked={true} closeMenu={closeMenu}/>}
        </div>
  )
}
