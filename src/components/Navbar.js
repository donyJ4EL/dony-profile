// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import useUserPreferences from '../hooks/UseUserPreferences';
import classNames from 'classnames';

const navLinkClass = ({ isActive }) =>
  classNames(
    'relative px-3 py-2 font-medium transition-colors duration-300',
    isActive
      ? 'text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400'
      : 'text-gray-300 hover:text-yellow-400'
  );

function Navbar() {
  const { preferences, setPreference } = useUserPreferences();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = preferences.theme === 'light' ? 'dark' : 'light';
    setPreference('theme', next);
  };

  const cycleFontSize = () => {
    const sizes = ['small', 'medium', 'large'];
    const i = sizes.indexOf(preferences.fontSize);
    const next = sizes[(i + 1) % sizes.length];
    setPreference('fontSize', next);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">Dony's Profile</span>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 list-none">
          {['/', '/education', '/experience', '/music', '/mv'].map((path, idx) => (
            <li key={path}>
              <NavLink to={path} className={navLinkClass}>
                {['Home', 'Education', 'Experience', 'Music', 'Mv'][idx]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social + Controls */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/donyJ4EL" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dony-j-deng-b0972b356" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaLinkedin /></a>
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaWhatsapp /></a>
          <button onClick={toggleTheme} className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-800 transition text-white">
            {preferences.theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
          <button onClick={cycleFontSize} className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-800 transition text-white">
            Font: {preferences.fontSize}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {['/', '/education', '/experience', '/music', '/mv'].map((path, idx) => (
              <NavLink key={path} to={path} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                {['Home', 'Education', 'Experience', 'Music', 'Mv'][idx]}
              </NavLink>
            ))}
          </ul>

          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/donyJ4EL" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dony-j-deng-b0972b356" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaLinkedin /></a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noreferrer" className="text-xl text-gray-300 hover:text-yellow-400 transition"><FaWhatsapp /></a>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <button onClick={toggleTheme} className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-800 transition text-white">
              {preferences.theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>
            <button onClick={cycleFontSize} className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-800 transition text-white">
              Font: {preferences.fontSize}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
