import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, name:'Home', link:'https:www.google.com'},
        {id: 2, name:'SHOP', link:'https:www.google.com'},
        {id: 3, name:'GALLARY', link:'https:www.google.com'},
        {id: 4, name:'SUPPORT', link:'https:www.google.com'},
        {id: 5, name:'CONTACT', link:'https:www.google.com'}
    ]
    return (
        <nav >
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
              {open ? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div>
            
            <ul className={`md:flex justify-center absolute duration-500 ${open ? 'top-6' : 'top-[-120px]'}`}>
               {
                   routes.map(route => <NavLink 
                   key = {route.id}
                   route = {route}
                   ></NavLink>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;