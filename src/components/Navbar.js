
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import '../Navbar.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import useUserPreferences from '../hooks/UseUserPreferences';

function Navbar() {
    // 🌗 State for dark mode toggle
    const { preferences, setPreference } = useUserPreferences();

    const toggleTheme = () => {
        const next = preferences.theme === 'light' ? 'dark' : 'light';
        setPreference('theme', next);
    };

    const cycleFontSize = () => {
        const sizes = ['small', 'medium', 'large'];
        const i = sizes.indexOf(preferences.fontSize);
        const nextSize = sizes[(i + 1) % sizes.length];
        setPreference('fontSize', nextSize);
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

                <div className="preference-controls">
                    <button className="pref-btn" onClick={toggleTheme}>
                        {preferences.theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
                    </button>
                    <button className="pref-btn" onClick={cycleFontSize}>
                        🔤 Font: {preferences.fontSize}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

