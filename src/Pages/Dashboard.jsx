import React, { useState } from 'react';
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar';
import { FaSearch, FaStar } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { data } from "../Data/data"
import { FaLocationDot } from "react-icons/fa6";
import Island from '../assets/Great Barrier Island.jpg'
import { FaClock } from "react-icons/fa";
import { IoPartlySunnySharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import User from '../assets/User.jpg'
import Bangkok from '../assets/Bangkok.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import Dubai from '../assets/Dubai.jpg'

import Alex from '../assets/Alex.jpg'
import Riley from '../assets/Riley.jpg'
import Harry from '../assets/Harry.jpg'

import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };



  const [selectedCategory, setSelectedCategory] = useState('Popular Places');


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPlaces = data.filter((place) => place.category === selectedCategory);


  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name); // or any other action
    setSuggestions([]);
  };

  return (
    <div className='flex'>
      <button 
        onClick={toggleNavbar} 
        className='lg:hidden fixed top-4 left-4 text-gray-900 text-3xl z-50'
      >
        {isNavbarVisible ? <IoMdClose /> : <RiMenu2Fill />}
      </button>

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 z-40 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:fixed lg:w-[20%] lg:items-start lg:justify-between`}>
        <DashboardNavbar />
      </div>
      

      <div className={`w-full lg:w-[80%] h-screen ml-auto flex flex-col lg:flex-row`}>
        <div className='w-full lg:w-[75%] lg:px-10 px-4 lg:py-6 py-14'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-4xl font-bold'>Hello, <span className='text-[#FCAF58]'> John Doe </span></h1>
              <h3 className='font-semibold'>Discover your next adventure!</h3>
            </div>
            <div>
              <h1 className='text-4xl font-bold'>22°C</h1>
              <h3 className='font-semibold'>Vadodara</h3>
            </div>
          </div>

          <div className="relative mt-2 z-20">
      <input 
        type="text" 
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none bg-gray-100"
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              <Link to={`/explore/placedetails/${suggestion.id}`} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.name} - {suggestion.country}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>

          <div className='py-2'>
            <h1 className='text-3xl font-bold'>Discover World</h1>
            <div className='py-2'>
              <div className='flex gap-6'>
                {['Popular Places', 'Recommended', 'Near Me'].map((category) => (
                  <button
                    key={category}
                    className={`text-md font-semibold relative z-10 after:absolute after:w-[60%] after:h-full after:top-0 after:left-0 after:duration-500 after:transition-all after:border-b-4 after:ease-in-out overflow-hidden after:border-[#FCAF58] after:-z-10 ${selectedCategory === category ? 'text-black after:left-0' : 'after:left-full'}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Places grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {filteredPlaces.slice(0, 3).map((place) => (
                  <Link key={place.id} to={`/explore/placedetails/${place.id}`} className="group">
                    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-2xl font-bold">{place.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-md text-gray-600 flex gap-2 items-center font-semibold">
                            <FaLocationDot /> {place.country}
                          </p>
                          <p className="text-md font-bold text-gray-600 flex gap-2 items-center">
                            <span className="text-yellow-400 text-lg">
                              <FaStar />
                            </span> {place.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row w-full mt-2 gap-4'>
            <div className='lg:w-[30%] w-full rounded-lg overflow-hidden'>
              <img src={Island} alt="Island" className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='lg:w-[70%] w-full'>
              <h1 className='font-bold text-4xl text-[#FCAF58] pb-2'>Great Barrier Island</h1>
              <div className='flex justify-between items-center'>
                <p className="text-md text-gray-600 flex gap-2 items-center font-semibold"><FaLocationDot /> New Zealand</p>
                <p className="text-md font-bold text-gray-600 flex gap-2 items-center bg-white rounded-lg px-2 py-1"><span className='text-yellow-400 text-lg'><FaStar /></span> 4.9</p>
              </div>
              <p className="text-xl text-gray-900 font-bold">₹ 250,000</p>
              <p className="text-md text-gray-600 flex gap-2 items-center font-semibold mt-2">Great Barrier Island, near New Zealand’s North Island, is a remote haven known for its volcanic hills, pristine beaches, and lush forests.</p>

              <div className='flex lg:justify-between lg:items-center mt-6 flex-col lg:flex-row gap-4'>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-2 items-center text-lg font-semibold'><FaClock className='text-[#FCAF58]' /> 7 Days</div>
                  <div className='flex gap-2 items-center text-lg font-semibold'><FaLocationDot className='text-[#FCAF58]' /> 1500KM</div>
                  <div className='flex gap-2 items-center text-lg font-semibold'><IoPartlySunnySharp className='text-[#FCAF58]' /> 27°C</div>
                  </div>
                  <div>
                  <button className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer'>Book Now</button></div>
          
          </div>
        </div>

</div></div>

        <div className='left-div w-[25%] h-screen hidden lg:flex py-6'>


  <div className='w-full pl-4 pr-4'>
    <div className='flex items-center justify-between'>
      <div className='flex gap-2'>
        <img src={User} alt="user" className='w-12 h-12 bg-gray-200 rounded-lg' />

        <div> <h1 className='font-bold flex items-center gap-2'>john@12</h1>
        <h2 className='text-gray-800'>ID:1223456</h2></div>
      </div>

      <div className='w-8 h-8 bg-gray-200 flex justify-center items-center rounded-full'>
      <IoIosNotifications className='text-xl' />
      </div>
     
    </div>


    
    
    <div className='flex justify-between items-center mt-2 '>
      <h1 className='text-xl font-bold'>My Schedule</h1>
      <Link to='/booking' className='text-[#FCAF58] font-semibold hover:underline duration-300 cursor-pointer'>See All</Link>
    </div>
    <div className='mt-4 flex flex-col gap-2'>
      <div className='bg-orange-100 flex gap-2 items-center rounded-lg '>
        <img src={Bangkok} alt="" className='w-24 rounded-lg' />
        <div>
          <h1 className='text-2xl font-bold text-[#FCAF58] pb-2'>Bangkok</h1>
          
          <h4 className='text-md text-gray-700 font-semibold'>Dates: Sept 15-30 </h4>
          <h4 className='text-md text-gray-700 font-semibold'>Temp: 28°C</h4>
          {/* <h4 className='text-sm text-gray-800 font-semibold' > Current Local Time: 14:00</h4> */}
        </div>
      </div>

      <div className='bg-orange-100 flex gap-2 items-center rounded-lg '>
  <img src={Tokyo} alt="Tokyo" className='w-24 rounded-lg' />
  <div>
    <h1 className='text-2xl font-bold text-[#FCAF58] pb-2'>Tokyo</h1>
    
    <h4 className='text-md text-gray-700 font-semibold'>Dates: Oct 1-15</h4>
    <h4 className='text-md text-gray-700 font-semibold'>Temp: 23°C</h4>
    {/* <h4 className='text-sm text-gray-800 font-semibold'>Current Local Time: 16:00</h4> */}
  </div>
</div>

<div className='bg-orange-100 flex gap-2 items-center rounded-lg '>
  <img src={Dubai} alt="Dubai" className='w-24 rounded-lg' />
  <div>
    <h1 className='text-2xl font-bold text-[#FCAF58] pb-2'>Dubai</h1>
    
    <h4 className='text-md text-gray-700 font-semibold'>Dates: Nov 10-20</h4>
    <h4 className='text-md text-gray-700 font-semibold'>Temp: 30°C</h4>
    {/* <h4 className='text-sm text-gray-800 font-semibold'>Current Local Time: 18:00</h4> */}
  </div>
</div>


    </div>

    <div className='py-2 mt-2 rounded-lg bg-orange-100 px-4'>
        <h1 className='font-bold text-2xl pb-2'>Friends</h1>
        <div className='flex flex-col gap-2'> 
        <div className='flex justify-between items-center '>
          <div className='flex gap-2 items-center'>
            <img src={Alex} alt="" className='w-10 rounded-full' />
            <h2 className='font-semibold text-lg'>Alex</h2>
          </div>
          <CiMenuKebab className='text-xl font-bold' />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src={Riley} alt="" className='w-10 rounded-full' />
            <h2 className='font-semibold text-lg'>Riley</h2>
          </div>
          <CiMenuKebab className='text-xl font-bold' />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src={Harry} alt="" className='w-10 rounded-full' />
            <h2 className='font-semibold text-lg'>Harry</h2>
          </div>
          <CiMenuKebab className='text-xl font-bold' />
        </div>
        </div>
    </div>

    <div className='w-full bg-orange-100 border-2 border-[#FCAF58] py-2 px-4 mt-2 rounded-lg'>
<h3 className='font-semibold mb-2'>By XYZ Airways</h3>
<div className='flex items-center justify-between '>
<h2 className='text-lg font-bold text-[#FCAF58]'>Book your dream trip today!</h2>
<div className='w-12 h-12 rounded-full bg-white flex justify-center items-center'> <h5 className='text-sm text-center font-semibold'> 50%  off </h5></div>
</div>

<button className='px-4 py-1 bg-[#F9C784] rounded-full font-bold text-sm mt-2'>Let's Go</button>
    </div>
  </div>

        </div>



      </div>
      </div>
    
  );
}

export default Dashboard;
