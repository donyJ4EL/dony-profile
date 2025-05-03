import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import useUserPreferences from '../hooks/UseUserPreferences';
import classNames from 'classnames';

const navLinkClass = ({ isActive }) =>
    `px-3 py-2 border-b-2 transition-all ${
      isActive ? 'border-yellow-400 text-white' : 'border-transparent text-gray-300 hover:border-yellow-400'
}`;

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

    const navClass = classNames(
        'flex justify-between items-center px-6 py-3',
        'bg-gray-900 text-white'
    );

    return (
        <div>
            <nav className={navClass}>
                {/* Title */}
                <div className='logo'> Dony's Profile </div>

                {/* Navigation Links */}
                <ul className="flex gap-6 list-none">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/education" className={navLinkClass}>Education</NavLink>
                    <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
                    <NavLink to="/music" className={navLinkClass}>Music</NavLink>
                    <NavLink to="/mv" className={navLinkClass}>Mv</NavLink>
                </ul>
                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a 
                        href="https://github.com/donyJ4EL" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xl text-gray-300 hover:text-yellow-400 transition">
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/dony-j-deng-b0972b356"
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xl text-gray-300 hover:text-yellow-400 transition">
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://wa.me/your-whatsapp-number" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xl text-gray-300 hover:text-yellow-400 transition">
                        <FaWhatsapp />
                    </a>

                    {/* Theme/Font buttons */}
                    <button onClick={toggleTheme} className="ml-4 text-sm px-2 py-1 border rounded hover:bg-gray-800 transition">
                        {preferences.theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
                    </button>
                    <button onClick={cycleFontSize} className="ml-2 text-sm px-2 py-1 border rounded hover:bg-gray-800 transition">
                        Font: {preferences.fontSize}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

