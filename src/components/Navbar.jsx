import React, { useState } from 'react';
import logo from '../assets/Go Globe Logo.svg'; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  

  return (
    <div className='w-full h-auto flex lg:justify-between justify-between sticky top-0 bg-white lg:bg-transparent lg:static z-10  lg:px-20 px-8 items-center'>
      <div className='navbar w-full h-auto flex lg:justify-between justify-between bg-white lg:bg-transparent lg:static z-10 lg:px-20 px-2 items-center'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="Logo" className='w-24 h-24 bg-transparent hover:text-black' />
        <a href="/" className='text-3xl font-bold text-[#FCAF58]'>Go Globe</a>
      </div>

      <div className='hidden lg:flex gap-10 font-bold text-center'>
        <ScrollLink to="hero"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer'>Home</ScrollLink>
       <ScrollLink to="packages"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer'>Packages</ScrollLink>
        <ScrollLink to="aboutus" 
            smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer'>About Us</ScrollLink>
        <ScrollLink to="features"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer'>Features</ScrollLink>
        <ScrollLink to="contact"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer'>Contact Us</ScrollLink>
      </div>

      <div>
        <RouterLink to="/signup" className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 hidden lg:flex cursor-pointer'>Sign Up</RouterLink>
        <div onClick={() => setNav(!nav)} className='lg:hidden flex cursor-pointer justify-start'>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      </div>

     
      <div className={nav ? 'fixed top-0 right-0 w-full h-1/4 bg-white z-50 duration-500 ease-in-out' : 'fixed right-[-100%] top-[0] w-full h-/4 bg-white z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-8 top-8 cursor-pointer'
        />
        {/* <div className='flex items-center'>
        <img src={logo} alt="Logo" className='w-20 h-20 bg-transparent hover:text-black' />
        <h2 className='text-4xl py-4'>
          
           <ScrollLink to='hero' className='font-bold  text-[#FCAF58]'>Go Globe</ScrollLink>
        </h2>
        </div> */}
        <div className='flex flex-col p-6 text-black bg-white shadow-md shadow-gray-500  font-bold text-center pt-20'>
          
        <ScrollLink to="hero"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer py-4'>Home</ScrollLink>
            <hr className='w-full h-[2px] bg-slate-200' />
            <ScrollLink to="packages"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer py-4'>Packages</ScrollLink>
            <hr className='w-full h-[2px] bg-slate-200' />
            <ScrollLink to="aboutus" 
            smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer py-4'>About Us</ScrollLink>
            <hr className='w-full h-[2px] bg-slate-200' />
            <ScrollLink to="features"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer py-4'>Features</ScrollLink>
            <hr className='w-full h-[2px] bg-slate-200' />
            <ScrollLink to="contact"  smooth={true} 
            duration={500}  className='hover:text-[#FCAF58] duration-300 text-2xl relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden cursor-pointer py-4'>Contact Us</ScrollLink>
            <hr className='w-full h-[2px] bg-slate-200' />
           <div className='py-6'>
           <RouterLink to="/signup" className='px-20 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer'>Sign Up</RouterLink>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
