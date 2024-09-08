import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { data } from '../Data/data'; 
import { IoMdClose } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { RiMenu2Fill } from 'react-icons/ri';
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar'; 
import { FaWifi, FaCar, FaSwimmingPool, FaDumbbell, FaSpa, FaUtensils, FaGlassMartini, FaPaw, FaShuttleVan, FaCity, FaStar, FaMountain } from 'react-icons/fa';
import { MdFreeBreakfast } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import ScrollToTop from '../components/Scroll/Scroll';

const ItemDetails = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = () => {
      try {
        const foundItem = data.find((item) => item.id === parseInt(id, 10));
        if (!foundItem) {
          throw new Error('Item not found');
        }
        setItem(foundItem);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">{error}</p>;
  if (!item) return <p className="text-center text-xl">Item not found</p>;

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'Free Wi-Fi':
        return <FaWifi />;
      case 'Parking':
        return <FaCar />;
      case 'Pool':
        return <FaSwimmingPool />;
      case 'Fitness Center':
        return <FaDumbbell />;
      case 'Spa':
        return <FaSpa />;
      case 'Restaurant':
        return <FaUtensils />;
      case 'Bar':
        return <FaGlassMartini />;
      case 'Pet Friendly':
        return <FaPaw />;
      case 'Airport Shuttle':
        return <FaShuttleVan />;
      case 'City View':
        return <FaCity />;
      case 'Breakfast included':
        return <MdFreeBreakfast />;
      case 'Beachfront':
        return <TbBeach />;
      case 'Mountain View':
        return <FaMountain />;
      default:
        return null;
    }
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

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:fixed lg:w-[20%] lg:items-start lg:justify-between`} style={{ zIndex: 50 }}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] bg-gray-100 h-screen ml-auto lg:py-10 py-14 px-4 lg:px-10 `}>
        <div className='flex gap-4'>
          <button
            onClick={handleBackClick}
            className="text-gray-900 text-2xl mb-4 flex items-center font-bold"
          >
            <IoArrowBack className="mr-2" />
          </button>
          <h1 className="text-3xl font-bold mb-4">Place Details</h1>
        </div>
        <div className="mx-auto bg-white shadow-lg rounded-lg">
          <div className='relative flex'>
            <img src={item.image} alt={item.name} className="w-full h-80 object-cover rounded-md mb-4 " />
            <h1 className="absolute top-4 left-4 font-bold text-3xl bg-white bg-opacity-75 p-6 rounded-lg shadow-md">{item.name}, {item.country}</h1>
          </div>

          <div className='flex items-center justify-between lg:px-10 px-4'>
            <div className="flex items-center lg:space-x-10 space-x-2">
              <div>
                <p className='font-bold lg:text-2xl text-lg'>Duration:</p>
                <p className='lg:text-xl text-md font-semibold text-gray-700'>{item.duration}</p>
              </div>
              <div>
                <p className='font-bold lg:text-2xl text-lg'>Price:</p>
                <p className='lg:text-xl text-md font-semibold text-gray-700'>₹ {item.price}</p>
              </div>
            </div>

            <div>
            <Link 
  to='/explore/placedetails/bookingform'
  state={{ 
    name: item.name, 
    country: item.country, 
    price: item.price, 
    duration: item.duration, 
    hotel: item.hotel.name,
    activities: item.activities,
    amenities: item.hotel.amenities
  }} 
  className="lg:px-8 py-2 px-4 text-center bg-[#F9C784] font-semibold lg:text-xl text-lg rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer mt-4"
>
  Book Now
</Link>
            </div>
          </div>

          <div className='flex items-start mt-4 justify-between lg:px-10 px-4 flex-col lg:flex-row gap-4'>
            <div className='lg:w-[60%]'>
              <p className='font-bold lg:text-2xl text-xl'>Description</p>
              <p className="lg:text-lg text-md font-medium text-gray-600 mt-1">{item.longDescription}</p>
            </div>

            <div>
              <p className="font-bold lg:text-2xl text-xl mb-1">Itinerary:</p>
              <ul>
                {item.itinerary.map((day, index) => (
                  <li key={index} className="lg:text-lg text-md font-medium text-gray-600">{day}</li>
                ))}
              </ul>
            </div>
          </div>

          <hr className='h-1 py-2 mt-2 text-center lg:mx-10 mx-4' />

          <div className='flex justify-between lg:px-10 px-4 flex-col lg:flex-row gap-4'>
            <div className='lg:w-[40%] w-full'>
              <p className="font-bold lg:text-2xl text-xl mb-2">Hotel Details:</p>
              <p className="lg:text-lg text-md font-medium text-gray-800">
                {item.hotel.name} - {item.hotel.rating} stars
              </p>
              <p className="lg:text-lg text-md font-medium text-gray-600">
                {item.hotel.address}
              </p>

              <p className="lg:text-lg text-md font-semibold text-gray-800 mt-2 mb-1">Amenities:</p>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
                {item.hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    {getAmenityIcon(amenity)}
                    <span className="lg:text-lg text-md font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold lg:text-2xl text-xl mb-1">Activities:</p>
              <ul>
                {item.activities.map((activity, index) => (
                  <li key={index} className="lg:text-lg text-md font-medium text-gray-600">{activity}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold lg:text-2xl text-xl mb-1">Local Events:</p>
              <ul>
                {item.localEvents.map((event, index) => (
                  <li key={index} className="lg:text-lg text-md font-medium text-gray-600">{event}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold lg:text-2xl text-xl mb-1">Local Cuisine:</p>
              <ul>
                {item.localCuisine.map((cuisine, index) => (
                  <li key={index} className="lg:text-lg text-md font-medium text-gray-600">{cuisine}</li>
                ))}
              </ul>
            </div>
          </div>

          <hr className='h-1 py-2 mt-2 text-center lg:mx-10 mx-4' />

          <div className='extrainfo flex flex-col lg:flex-row gap-4 lg:px-10 px-4 mt-4 justify-between pb-20 items-start'>
            <div className='flex'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center lg:gap-2 flex-wrap'>
                  <p className="font-bold lg:text-xl text-lg">Meals:</p>
                  <p className="lg:text-lg text-md font-medium text-gray-600">{item.meals}</p>
                </div>
                <div className='flex items-center lg:gap-2 flex-wrap'>
                  <p className="font-bold lg:text-xl text-lg">Visa Requirements:</p>
                  <p className="lg:text-lg text-md font-medium text-gray-600">{item.visaRequirements}</p>
                </div>
                <div className='flex items-center lg:gap-2 flex-wrap'>
                  <p className="font-bold lg:text-xl text-lg">Transportation:</p>
                  <p className="lg:text-lg text-md font-medium text-gray-600">{item.transportation}</p>
                </div>
                
                <div className="flex items-center lg:gap-2 flex-wrap">
                  <p className="font-bold lg:text-xl text-lg">Best Travel Season:</p>
                  <p className="lg:text-lg text-md font-medium text-gray-600">{item.bestTravelSeason}</p>
                </div>
              </div>
            </div>

            {/* Review Box */}
            <div className="border border-gray-300 p-4 rounded-lg lg:w-[50%] w-full">
              <div className='flex justify-between mb-4'>
                <p className="font-bold lg:text-2xl text-xl">Reviews:</p>
                <p className='flex gap-2 items-center text-lg font-bold text-gray-700'><FaStar className='text-yellow-500' />{item.rating}</p>
              </div>
              {item.reviews && item.reviews.length > 0 ? (
                item.reviews.map((review, index) => (
                  <div key={index} className="mb-4">
                    {/* Review text only */}
                    <p className="lg:text-lg text-md font-medium text-gray-600 mt-1">
                      {review}
                    </p>
                    <hr className="my-2" />
                  </div>
                ))
              ) : (
                <p className="lg:text-md text-sm font-medium text-gray-600">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
