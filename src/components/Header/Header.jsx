import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Components of Web Development</h2>
            <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/About">About</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;