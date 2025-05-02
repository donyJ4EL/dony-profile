
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import '../Navbar.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function Navbar() {
    // 🌗 State for dark mode toggle
    const [isDark, setIsDark] = useState(false);

    // 切换暗黑模式
    const toggleTheme = () => {
        document.body.classList.toggle('dark-mode');
        setIsDark(!isDark);
    };
    return (
        <div>
            <nav className='navbar'>
                {/* Title */}
                <div className='logo'> Dony's Profile </div>

                {/* Navigation Links */}
                <ul className='nav-links'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-tab' : ''}>Home</NavLink>
                    <NavLink to="/education" className={({ isActive }) => isActive ? 'active-tab' : ''}>Education</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? 'active-tab' : ''}>Experience</NavLink>
                    <NavLink to="/music" className={({ isActive }) => isActive ? 'active-tab' : ''}>Music</NavLink>
                </ul>
                {/* Social Links */}
                <div className="social-links">
                    <a href="https://github.com/donyJ4EL" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/dony-j-deng-b0972b356" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>

                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDark ? '🌞 Light' : '🌙 Dark'}
                </button>
            </nav>
        </div>
    );
}

export default Navbar;

