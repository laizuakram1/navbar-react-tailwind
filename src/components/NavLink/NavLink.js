import React from 'react';


const NavLink = (props) => {
    const { name, Link } = props.route;

    return (
      <li className='mr-16 hover:text-red-500' >
            <a href={Link}>{name}</a>
      </li>

    );
};

export default NavLink;