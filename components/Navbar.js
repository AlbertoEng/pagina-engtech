import React from 'react';
import Link  from 'next/link';


const Navbar = () => {
    return (  
        <nav className='navbar'>
            <Link href='/'>
                <div className='divLogo'>
                    <img className='logoEngtech' src="assets/logoEngtech.svg" alt="" />
                </div>
            </Link>
            <ul className='MenuPpal'>
                <Link href='/'>
                    <li className='itemNavbar'>
                        Paneles Solares
                    </li>
                </Link>
                <Link href='/camaras'>
                    <li className='itemNavbar'>
                        Camaras de CCTV
                    </li>
                </Link>
                <Link href='automatizacion'>
                    <li className='itemNavbar'>
                        Control
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
 
export default Navbar;