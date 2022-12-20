import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/meals'>Meals</Link>
        </div>
    );
};

export default Header;