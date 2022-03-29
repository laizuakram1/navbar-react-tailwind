import React from 'react';


const NavLink = (props) => {
    const { name, Link } = props.route;

    return (
      <li className='mr-5 ' >
            <a href={Link}>{name}</a>
      </li>

    );
};

export default NavLink;