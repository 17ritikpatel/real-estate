import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../assets/images/logo.png';
import { useDarkMode } from '../components/DarkModeContext';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Properties', path: 'properties' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav
      className={`${
        darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div id="logo">
        <img
          src={logo}
          alt="company logo"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Toggle Icon */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="text-black text-2xl cursor-pointer dark:text-white" />
        ) : (
          <FaBars className="text-black text-2xl cursor-pointer dark:text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0 lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center lg:gap-8 gap-2'>
<div className='flex justify-center items-center lg:gap-3 gap-1'>
  <FaPhoneAlt className='size-5 text-red-600'/>
  <h1 className='lg:text-xl text-sm text-black font-semibold'>+41 4352 467594</h1>

</div>
<FaUserCircle className='size-6 text-red-600'/>
      </div>
    </nav>
  )
}

export default Header;

