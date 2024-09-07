import React from 'react'
import { FaArrowRight, FaCalendarAlt, FaInstagramSquare, FaFacebook, FaYoutube  } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter  } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Hero = () => {


  return (
    <div className='hero relative' id='hero'>

        <div className='w-full flex items-center justify-center text-cenetr lg:gap-28 gap-10 mt-10 flex-wrap px-4'>
            <div className='flex flex-col lg:w-1/2 w-full lg:text-left lg:items-start items-center text-center  flex-wrap '><h1 className='heading font-dancing lg:text-9xl text-7xl font-extrabold leading-snug'>Let's <span className='text-[#FCAF58]'>Travel</span> <br /> the <span className='text-[#FCAF58]'> World </span></h1>
            <p className=' text-gray-800 text-lg font-semibold'>Explore the world’s most beautiful destinations with us.</p>
            <Link to="/signup" className="bg-[#F9C784] w-48 flex items-center gap-2 justify-center text-center text-xl font-semibold py-2 px-8 rounded-lg mt-10 hover:bg-[#FCAF58] hover:text-white duration-300">
  Explore <FaArrowRight />
</Link>

            <div className="bg-white w-full shadow-lg rounded-md px-4 py-3 flex items-center text-left justify-between mt-10 flex-wrap gap-4">
      <div className="flex items-center">
        <div className="mr-2">
        <FaLocationDot />
        </div>
        <div>
          <p className="text-gray-600 font-medium">Location</p>
          <input className="text-gray-800 border-2 rounded-md outline-none pl-2 w-28" placeholder='Enter Location'/>

        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-2">
        <FaCalendarAlt />
        </div>
        <div>
          <p className="text-gray-600 font-medium">Date</p>
          <input className="text-gray-800 border-2 rounded-md outline-none pl-2 w-28" placeholder='Enter Date'/>

        </div>
      </div>



      <div className="flex items-center">
        <div className="mr-2">
        <AiFillDollarCircle />
        </div>
        <div>
          <p className="text-gray-600 font-medium">Price</p>
          <input className="text-gray-800 border-2 rounded-md outline-none pl-2 w-28" placeholder='Enter Price'/>
        </div>
      </div>
      <a className="bg-[#F9C784] cursor-pointer hover:bg-[#FCAF58] text-black font-bold py-3 lg:px-6 px-16 rounded duration-300 hover:text-white">
        Search
      </a>
    </div>

            </div>
            <div>
            <div className='max-w-full flex gap-2 justify-center pr-2 pl-2 py-4'>

                <div className='flex flex-col gap-2'>
               
                <div className='lg:w-64 w-44 flex-col gap-2'>
                    <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                
                <div className='lg:w-64 w-44 h-48'>
                <img src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full' />
               
                </div>
                </div>

                <div className='flex flex-col gap-2'>

                <div className='lg:w-64 w-44 h-48'>
                <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full' />
               
                </div>
               
                <div className='lg:w-64 w-44 flex-col'>
                    <img src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                
                
                </div>
            </div>
            <div>
            
            
            </div>
            
            </div>
        </div>

        <div className='absolute hidden lg:flex -bottom-24 right-6 flex-col gap-4'>
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
  )
}

export default Hero