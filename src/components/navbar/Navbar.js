import React from 'react';
import NavLink from '../NavLink/NavLink';

const Navbar = () => {
    const routes = [
        {id: 1, name:'Home', link:'https:www.google.com'},
        {id: 2, name:'SHOP', link:'https:www.google.com'},
        {id: 3, name:'GALLARY', link:'https:www.google.com'},
        {id: 4, name:'SUPPORT', link:'https:www.google.com'},
        {id: 5, name:'CONTACT', link:'https:www.google.com'}
    ]
    return (
        <nav >
            <div>
                <h2>Laizu's</h2>
            </div>
            <div>
               {
                   routes.map(route => <NavLink 
                   key = {route.id}
                   route = {route}
                   ></NavLink>)
               }
            </div>
        </nav>
    );
};

export default Navbar;