import React from 'react';
import logo from '../../assets/Go Globe Logo.svg';
import { FaInstagramSquare, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Footer = () => {
  useGSAP(() => {
    gsap.from('.footer', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.footer',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 70%',
        scrub: true,
      }
    });
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div 
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-4 bg-[#F9C784] text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-[#FCAF58] transition-transform transform hover:scale-110"
      >
        <IoIosArrowUp className="text-3xl" />
      </div>


      <div className="footer w-full bg-[#FDF3E8] flex lg:justify-evenly justify-start py-16 flex-wrap px-10 gap-10">
      
        <div className="flex flex-col lg:px-10 px-0">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-20 h-20 bg-transparent" />
            <Link to="/" className="text-3xl font-bold text-[#FCAF58]">Go Globe</Link>
          </div>
          <div className="flex justify-evenly mt-2">
            <a href="/" className="text-2xl text-[#FCAF58] hover:text-black duration-300">
              <FaInstagramSquare />
            </a>
            <a href="/" className="text-2xl text-[#FCAF58] hover:text-black duration-300">
              <FaFacebook />
            </a>
            <a href="/" className="text-2xl text-[#FCAF58] hover:text-black duration-300">
              <FaSquareXTwitter />
            </a>
            <a href="/" className="text-2xl text-[#FCAF58] hover:text-black duration-300">
              <FaYoutube />
            </a>
          </div>
        </div>

  
        <div className="flex flex-col">
          <h1 className="font-bold pb-2">Company</h1>
          <Link to="hero"  smooth={true} 
            duration={500}  className="hover:text-[#FCAF58] duration-300 text-lg relative z-10 overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 cursor-pointer">Home</Link>
          <Link to="aboutus"  smooth={true} 
            duration={500}  className="hover:text-[#FCAF58] duration-300 text-lg relative z-10 overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 cursor-pointer">About Us</Link>
          <Link to="features"  smooth={true} 
            duration={500}  className="hover:text-[#FCAF58] duration-300 text-lg relative z-10 overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 cursor-pointer">Features</Link>
          <Link to="contact"  smooth={true} 
            duration={500}  className="hover:text-[#FCAF58] duration-300 text-lg relative z-10 overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 cursor-pointer">Contact Us</Link>
        </div>

 
        <div className="flex flex-col">
          <h1 className="font-bold pb-2">Customer Services</h1>
          <h2 className="text-lg">Bookings</h2>
          <h2 className="text-lg">Account</h2>
          <h2 className="text-lg">FAQ</h2>
        </div>

 
        <div className="flex flex-col">
          <h1 className="font-bold pb-2">Contact Information</h1>
          <h2 className="text-lg">+91 123456789</h2>
          <h2 className="text-lg">example@example.com</h2>
          <h2 className="text-lg">123, Street No 1, XYZ City, ABC State, DEF Country</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
