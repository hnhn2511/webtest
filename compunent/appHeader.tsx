'use client'

import { usePathname } from 'next/navigation';
import Headercontent from '../compunent/appHeaderContent';

function Header() {

    const pathname = usePathname();


    let color = '';

    if (pathname === '/') {
        color = '';
    }else{
       color = '#65676b'
    }

    return (
        <>
        <Headercontent itemsColor={color}/>
        </>
    )
}

export default Header;