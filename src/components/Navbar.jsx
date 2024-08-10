import React, { useState } from 'react';
import logo from '../assets/Go Globe Logo.svg'; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  

  return (
    <div className='w-full h-auto flex lg:justify-between justify-between sticky top-0 bg-white lg:bg-transparent lg:static z-50  lg:px-20 px-8 items-center'>
      <div className='navbar w-full h-auto flex lg:justify-between justify-between lg:bg-transparent lg:static z-50  lg:px-20 px-8 items-center'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="Logo" className='w-24 h-24 bg-transparent hover:text-black' />
        <a href="/" className='text-3xl font-bold text-[#FCAF58]'>Go Globe</a>
      </div>

      <div className='hidden lg:flex gap-10 font-bold text-center'>
        <Link to="/" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>Home</Link>
        <Link to="/aboutus" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>About Us</Link>
        <Link to="/features" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>Features</Link>
        <Link to="/contact" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>Contact Us</Link>
      </div>

      <div>
        <Link to="/" className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 hidden lg:flex'>Sign Up</Link>
        <div onClick={() => setNav(!nav)} className='lg:hidden flex cursor-pointer justify-start'>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      </div>

     
      <div className={nav ? 'fixed top-0 right-0 w-full h-3/2 shadow-md shadow-black bg-white z-10 duration-500 ease-in-out' : 'fixed right-[-100%] top-[0] w-full h-[3/4] bg-white z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-8 top-8 cursor-pointer'
        />
        <div className='flex items-center'>
        <img src={logo} alt="Logo" className='w-20 h-20 bg-transparent hover:text-black' />
        <h2 className='text-4xl p-4'>
          
           <Link to='/' className='font-bold text-[#FCAF58]'>Go Globe</Link>
        </h2>
        </div>
        <div className='flex flex-col p-4 text-black  font-bold text-center'>
          
            <Link to='/' className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:bottom-4 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden py-4'>Home</Link>
            <hr className='w-full h-[2px] bg-slate-200' />
            <Link to='/aboutus' className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:bottom-4 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden py-4 '> About Us</Link>
            <hr className='w-full h-[2px] bg-slate-200' />
            <Link to='/features' className='hover:text-[#FCAF58]  duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:bottom-4 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden py-4 '> Features</Link>
            <hr className='w-full h-[2px] bg-slate-200' />
            <Link to='/contact' className='hover:text-[#FCAF58]  duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:bottom-4 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden pt-4 '> Contact Us</Link>
            
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
