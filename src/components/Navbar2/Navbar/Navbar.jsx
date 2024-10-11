import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.6,
        delay: 0.1,
      },
    },
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Fullscreen Menu for mobile view */}
      {menuOpen && (
        <div className='h-full w-full flex justify-center fixed items-center bg-Blue backdrop-blur-sm opacity-95 animate-menubar z-10'>
          {/* Close Button */}
            <button className=' absolute top-6 right-10 max-[640px]:flex z-[1000000]' onClick={toggleMenu}>
                <IoClose className='text-4xl text-white font-bold' />
            </button>

            {/* Hamburger for mobile view */}
          


          {/* Mobile Navigation Links */}
          <div>
            <ol className='flex flex-col text-head text-sm gap-7 text-white marker:text-green-300 font-mono items-center animate-menuOl'>
              <li onClick={toggleMenu}><a
            href="/#about"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            ABOUT
          </a></li>
              <li onClick={toggleMenu}><a
            href="/#events"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            EVENTS
          </a></li>
              <li onClick={toggleMenu}><a
            href="/#workshop"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            WORKSHOP
          </a></li>
              <li onClick={toggleMenu}><a
            href="/#speakers"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            SPEAKERS
          </a></li>
              <li onClick={toggleMenu}><a
            href="/#team"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            TEAM
          </a></li>
              <li onClick={toggleMenu}><a
            href="/#contact"
            className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            CONTACT
          </a></li>
            </ol>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <motion.nav
        className="w-screen absolute z-50 max-sm:flex max-sm:mt-8 max-sm:w-[90%] max-sm:items-center max-sm:justify-end"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className= "max-sm:hidden navbar text-white w-[80%] m-auto h-24 flex justify-between items-center">
            <div className="max-sm:hidden navbar text-white w-[40%] h-24 flex justify-around  m-auto items-center">
          <a
            href="/#about"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            ABOUT
          </a>

          <a
            href="/#events"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            EVENTS
          </a>

          <a
            href="/#workshops"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            WORKSHOPS
          </a>
          </div>
        
          {/* <a href="/">
            <img src="/assets/logo/logo_nav.png" height={350} width={350} alt="Logo" />
          </a> */}
            <div className="max-sm:hidden navbar text-white w-[40%] h-24 flex justify-around  m-auto items-center">
          <a
            href="/#speakers"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            SPEAKERS
          </a>

          <a
            href="/team"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            TEAM
          </a>

          <a
            href="/#contact"
            className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
          >
            CONTACT
          </a>
          </div>
          </div>
          { !menuOpen && (<button className="lg:hidden" onClick={toggleMenu}>
            <TbMenuDeep className="text-4xl text-white font-bold" />
          </button>)}
        
      </motion.nav>
    </>
  );
};

export default Navbar;