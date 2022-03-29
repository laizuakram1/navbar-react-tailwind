import React from 'react';


const NavLink = (props) => {
    const { name, Link } = props.route;

    return (
      <li className='list-none'>
            <a href={Link}>{name}</a>
      </li>

    );
};

export default NavLink;