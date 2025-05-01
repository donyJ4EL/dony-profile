
import React from 'react';
import { Link } from 'react-router-dom'
import '../Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                {/* Title */}
                <div className='logo'> Dony's Profile </div>

                {/* Navigation Links */}
                <ul className='nav-links'>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/experience"> Experience </Link> </li>
                    <li> <Link to="/music"> Music </Link> </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

