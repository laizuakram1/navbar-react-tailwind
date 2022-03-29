import React from 'react';
import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl'>Welcome to laizu's web application community</h2>
        </div>
    );
};

export default Header;