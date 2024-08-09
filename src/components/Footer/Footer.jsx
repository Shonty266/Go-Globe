import React from 'react'
import logo from '../../assets/Go Globe Logo.svg'
import { FaInstagramSquare, FaFacebook, FaYoutube  } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import Aboutus from '../Aboutus/Aboutus';

const Footer = () => {
  return (
    <div>
        <div className='w-full bg-[#FDF3E8] flex justify-evenly py-16 flex-wrap gap-10'>
            <div className='flex flex-col px-10'>
        <div className='flex items-center gap-2'>
        <img src={logo} alt="Logo" className='w-24 h-24 bg-transparent hover:text-black' />
        <Link to="/" className='text-3xl font-bold text-[#FCAF58]'>Go Globe</Link></div>
        <div className='flex justify-between'>
        <a href="/" className='text-3xl text-[#FCAF58] hover:text-black duration-300'>
        <FaInstagramSquare />
</a>

<a href="/" className='text-3xl text-[#FCAF58] hover:text-black duration-300'>
<FaFacebook />
</a>
<a href="/" className='text-3xl text-[#FCAF58] hover:text-black duration-300'>
<FaSquareXTwitter />
</a>
<a href="/" className='text-3xl text-[#FCAF58] hover:text-black duration-300'>
<FaYoutube />
</a>
</div>
        
      </div>

      <div className='flex flex-col'>
        <h1 className='font-bold pb-2'>Company</h1>
        <Link to="/aboutus" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>About Us</Link>
        <Link to="/features" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>Features</Link>
        <Link to="/contact" className='hover:text-[#FCAF58] duration-300 text-lg relative z-100 after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'>Contact Us</Link>
      </div>
      <div className=''>
        <h1 className='font-bold pb-2'>Customer Services</h1>
        <h2>Bookings</h2>
        <h2>Account</h2>
        <h2>FAQ</h2>
      </div>
      <div className=''>
        <h1 className='font-bold pb-2'>Contact Information</h1>
        <h2>+91 123456789</h2>
        <h2>example@example.com</h2>
        <h2>123, Street No 1, xyz city,
        abc state,def country</h2>
      </div>


        </div>


    </div>
  )
}

export default Footer