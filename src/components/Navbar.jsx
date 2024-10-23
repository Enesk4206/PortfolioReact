import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='bg-slate-700/30 py-5 w-full shadow-md'>
      <div className='flex justify-between items-center mx-10 font-semibold'>
        <div className='mx-4 py-2'>
          <Link to="/">
            <img src={logo} width={80} alt="Logo" />
          </Link>
        </div>
        
        {/* Desktop Mode */}
        <div className='mx-6'>
          <nav className='hidden md:flex space-x-5'>
            <h2>
              <Link to="/">Home</Link>
            </h2>
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </nav>
        </div>

        {/* Mobile Mode */}
        <div className='flex md:hidden'>
          {!isMobile ? (
            <MdMenu size={20} onClick={toggleMenu} />
          ) : (
            <MdClose size={20} onClick={toggleMenu} />
          )}

          {isMobile && (
            <div className={`min-h-screen space-y-14 uppercase pt-24 flex flex-col items-center fixed top-20 left-0 w-full z-10 mb-20 
              bg-slate-600 transition-all duration-300 shadow-md text-white p-2`}>
              <h2 onClick={toggleMenu}>
                <NavLink to="/">Home</NavLink>
              </h2>
              <h2 onClick={toggleMenu}>
                <NavLink to="/projects">Projects</NavLink>
              </h2>
              <h2 onClick={toggleMenu}>
                <NavLink to="/contact">Contact</NavLink>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
