import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar';
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import Bangkok from '../assets/Bangkok.jpg';
import Paris from '../assets/Paris.jpg';
import Tokyo from '../assets/Tokyo.jpg';
import ScrollToTop from '../components/Scroll/Scroll';

const bookings = [
  {
    id: 1,
    city: 'Paris',
    country: 'France',
    status: { booking: 'Ongoing', payment: 'Paid' },
    image: Paris,
    bookingId: '#XYZ98765',
    dates: 'October 1-15, 2023',
    price: '₹200,000',
    accommodation: 'Hôtel Plaza Athénée, Paris',
    flight: 'AF-456, 9:00 AM',
    duration: '15 Days',
    companions: '1 Adult',
  },
  {
    id: 2,
    city: 'Bangkok',
    country: 'Thailand',
    status: { booking: 'Completed', payment: 'Paid' },
    image: Bangkok,
    bookingId: '#ABC12345',
    dates: 'Sept 15-30, 2023',
    price: '₹150,000',
    accommodation: 'Siam Hotel, Bangkok',
    flight: 'TG-201, 10:30 AM',
    duration: '15 Days',
    companions: '2 Adults',
  },
  {
    id: 3,
    city: 'Tokyo',
    country: 'Japan',
    status: { booking: 'Cancelled', payment: 'Refunded' },
    image: Tokyo,
    bookingId: '#DEF67890',
    dates: 'November 1-10, 2023',
    price: '₹180,000',
    accommodation: 'The Peninsula Tokyo',
    flight: 'JL-789, 11:15 AM',
    duration: '10 Days',
    companions: '1 Adult',
  }
];

const Booking = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className='flex'>
        <ScrollToTop />
      <button 
        onClick={toggleNavbar} 
        className='lg:hidden fixed top-4 left-4 text-gray-900 text-3xl z-40'
      >
        {isNavbarVisible ? <IoMdClose /> : <RiMenu2Fill />}
      </button>

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:w-[20%] lg:items-start lg:justify-between lg:fixed z-30`}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] h-screen ml-auto lg:py-10 py-14 lg:px-10 px-4 relative`}>
        <h1 className="text-3xl font-bold mb-4">Bookings</h1>

        <div className='flex flex-col gap-10'>
          {bookings.map((booking) => (
            <div key={booking.id} className='bg-white p-4 rounded-lg shadow-md'>
              <div className='relative'>
                <img src={booking.image} alt={booking.city} className='w-full h-48 object-cover rounded-md' />

                <div className='absolute top-4 left-4 bg-white bg-opacity-75 p-3 rounded-lg z-20'>
                  <h1 className='text-2xl font-bold mb-2'>
                    {booking.city}, {booking.country}
                  </h1>

                  <div className='mb-2'>
                    <span className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                      booking.status.booking === 'Completed' ? 'bg-green-200 text-green-800' : 
                      booking.status.booking === 'Ongoing' ? 'bg-blue-200 text-blue-800' : 
                      'bg-red-200 text-red-800'
                    }`}>
                      Trip Status: {booking.status.booking}
                    </span>
                  </div>

                  <div>
                    <span className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                      booking.status.payment === 'Paid' ? 'bg-green-200 text-green-800' : 
                      booking.status.payment === 'Refunded' ? 'bg-red-200 text-red-800' : 
                      'bg-gray-200 text-gray-800'
                    }`}>
                      Payment Status: {booking.status.payment}
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='text-lg text-gray-900 font-bold'>Booking ID:</h2>
                  <p className='text-lg text-gray-800 font-semibold'>{booking.bookingId}</p>
                </div>
                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-lg text-gray-900 font-bold'>Price:</h2>
                  <p className='text-xl text-gray-900 font-semibold'>{booking.price}</p>
                </div>
                <hr className='mb-4 border-gray-300' />

                <div>
                  <p className='text-md text-gray-700 font-medium'>
                    <span className='font-semibold text-gray-800'>Dates:</span> {booking.dates}
                  </p>
                  <p className='text-md text-gray-700 font-medium'>
                    <span className='font-semibold text-gray-800'>Accommodation:</span> {booking.accommodation}
                  </p>
                  <p className='text-md text-gray-700 font-medium'>
                    <span className='font-semibold text-gray-800'>Flight:</span> {booking.flight}
                  </p>
                </div>

                <div className='mt-4'>
                  <h3 className='font-semibold text-lg text-gray-800'>Travel Summary</h3>
                  <p className='text-md text-gray-700'><span className='font-medium'>Duration:</span> {booking.duration}</p>
                  <p className='text-md text-gray-700'><span className='font-medium'>Travel Companions:</span> {booking.companions}</p>
                </div>

                <Link to={`/booking/tickets/${booking.city.toLowerCase()}`}>
                  <button className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer mt-4'>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
