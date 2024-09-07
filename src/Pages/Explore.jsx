import React, { useState } from 'react'
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar'
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { data } from '../Data/data'
import ScrollToTop from '../components/Scroll/Scroll';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

const Explore = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [activeType, setActiveType] = useState('');
  const [places, setPlaces] = useState(data);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const filterType = (categoryOrContinent) => {
    setActiveType(categoryOrContinent); 
    setPlaces(
      categoryOrContinent === '' 
        ? data 
        : data.filter((item) => 
            item.category === categoryOrContinent || item.continent === categoryOrContinent
          )
    );
  };

  return (
    <div className='flex'>
      <ScrollToTop />
      <button 
        onClick={toggleNavbar} 
        className='lg:hidden fixed top-4 left-4 text-gray-900 text-3xl z-50'
      >
        {isNavbarVisible ? <IoMdClose /> : <RiMenu2Fill />}
      </button>

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:fixed lg:w-[20%] lg:items-start lg:justify-between z-40 `}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] ml-auto px-4 lg:px-10 lg:py-10 py-14`}>
            
              <h1 className="text-3xl font-bold mb-6 lg:mb-0">Explore Packages</h1>

           

            <div className='flex items-center justify-end pb-2 gap-4 flex-wrap'>
              <button
                onClick={() => filterType('Europe')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'Europe' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                Europe
              </button>

              <button
                onClick={() => filterType('North America')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'North America' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                North America
              </button>

              <button
                onClick={() => filterType('Asia')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'Asia' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                Asia
              </button>

              <button
                onClick={() => filterType('Africa')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'Africa' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                Africa
              </button>

              <button
                onClick={() => filterType('Australia')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'Australia' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                Australia
              </button>

              <button
                onClick={() => filterType('South America')}
                className={`relative text-md font-semibold z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out after:border-[#FCAF58] after:-z-10 overflow-hidden ${
                  activeType === 'South America' ? 'text-black after:left-0' : 'after:left-full'
                }`}
              >
                South America
              </button>

              <button
                onClick={() => {
                  setActiveType('');
                  setPlaces(data);
                }}
                className={`duration-300 font-bold lg:text-lg text-md py-2 px-4 rounded-md ${
                  activeType === '' ? 'bg-[#F9C784] text-black' : 'bg-white text-[#FCAF58]'
                } border-2 border-[#F9C784]`}
              >
                View All
              </button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4'>
  {places.map((item) => (
    <Link key={item.id} to={`/explore/placedetails/${item.id}`} className='transition-transform duration-300 transform hover:scale-105'>
      <div className='border border-gray-200 shadow-lg rounded-lg overflow-hidden'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-56 object-cover'
        />
        <div className='p-4'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold text-gray-800'>{item.name}</p>
            <p className="text-md font-medium text-gray-600 flex items-center gap-2">
              <span className="text-yellow-400 text-lg">
                <FaStar />
              </span> {item.rating}
            </p>
          </div>
          <div className='flex justify-between items-center mb-2'>
            <p className='text-md font-medium text-gray-500 flex items-center gap-1'>
              <FaLocationDot /> {item.country}/ {item.filter}
            </p>
            <p className={`text-sm font-medium ${item.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
              {item.availability}
            </p>
            
          </div>
          
          <div className='flex justify-between items-center mb-2'>
            <p className='text-xl font-semibold text-gray-600'>{item.duration}</p>
            <p className='text-2xl font-medium text-gray-900'>₹ {item.price}</p>
          </div>
          <p className='text-gray-700 '>{item.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

          </div>
        </div>
    
  )
}

export default Explore;
