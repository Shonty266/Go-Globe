import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaLocationArrow, FaTicketAlt, FaArrowLeft } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar';
import QRCode from '../assets/DemoQR.png';
import { IoArrowBack } from 'react-icons/io5';
import ScrollToTop from '../components/Scroll/Scroll';


const Ticket = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const ticketData = {
    paris: {
      city: 'Paris, France',
      bookingId: '#XYZ98765',
      dates: 'October 1-15, 2023',
      price: '₹2,00,000',
      accommodation: 'Hôtel Plaza Athénée, Paris',
      flight: 'AF-456, 9:00 AM',
      duration: '15 Days',
      companions: '1 Adult',
      status: {
        booking: 'Ongoing',
        payment: 'Paid',
        hotelBooked: 'Confirmed',
        flightBooked: 'Confirmed'
      }
    },
    bangkok: {
      city: 'Bangkok, Thailand',
      bookingId: '#ABC12345',
      dates: 'Sept 15-30, 2023',
      price: '₹1,50,000',
      accommodation: 'Siam Hotel, Bangkok',
      flight: 'TG-201, 10:30 AM',
      duration: '15 Days',
      companions: '2 Adults',
      status: {
        booking: 'Completed',
        payment: 'Paid',
        hotelBooked: 'Confirmed',
        flightBooked: 'Confirmed'
      }
    },
    tokyo: {
      city: 'Tokyo, Japan',
      bookingId: '#DEF67890',
      dates: 'November 1-10, 2023',
      price: '₹1,80,000',
      accommodation: 'The Peninsula Tokyo',
      flight: 'JL-789, 11:15 AM',
      duration: '10 Days',
      companions: '1 Adult',
      status: {
        booking: 'Cancelled',
        payment: 'Refunded',
        hotelBooked: 'Refunded',
        flightBooked: 'Refunded'
      }
    }
  };

  const data = ticketData[city.toLowerCase()];

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleBackClick = () => {
    navigate(-1);
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

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:fixed lg:w-[20%] lg:items-start lg:justify-between`}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] h-screen ml-auto lg:px-10 px-4 lg:py-10 py-14`}>
      <div className='flex gap-4'>
    <button
      onClick={handleBackClick}
      className="text-gray-900 text-2xl  mb-4 flex items-center font-bold"
    >
      <IoArrowBack className="mr-2" />
    </button>
    <h1 className="text-3xl font-bold mb-4">Ticket Details</h1>
    </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center border-b pb-4 mb-4'>
            <h2 className='text-2xl font-bold text-gray-800'>{data.city}</h2>
            <FaTicketAlt className='text-gray-600 text-2xl' />
          </div>

          <div className='flex flex-col mb-4'>
            <div className='flex items-center mb-2'>
              <FaCalendarAlt className='text-gray-600 text-lg mr-2' />
              <p className='text-gray-700'>
                <span className='font-semibold'>Dates:</span> {data.dates}
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <FaLocationArrow className='text-gray-600 text-lg mr-2' />
              <p className='text-gray-700'>
                <span className='font-semibold'>Accommodation:</span> {data.accommodation}
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <p className='text-gray-700'>
                <span className='font-semibold'>Flight:</span> {data.flight}
              </p>
            </div>
          </div>

          <div className='flex flex-col mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-md font-semibold text-gray-800'>Trip Status:</p>
              <div className='flex items-center'>
                <p className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                  data.status.booking === 'Completed' ? 'bg-green-200 text-green-800' : 
                  data.status.booking === 'Ongoing' ? 'bg-blue-200 text-blue-800' : 
                  'bg-red-200 text-red-800'
                }`}>
                  {data.status.booking}
                </p>
                <img src={QRCode} alt='QR code' className='ml-4 w-20 h-20 border-2' />
              </div>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-md font-semibold text-gray-800'>Payment Status:</p>
              <div className='flex items-center'>
                <p className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                  data.status.payment === 'Paid' ? 'bg-green-200 text-green-800' : 
                  data.status.payment === 'Refunded' ? 'bg-red-200 text-red-800' : 
                  'bg-gray-200 text-gray-800'
                }`}>
                  {data.status.payment}
                </p>
                <img src={QRCode} alt='QR code' className='ml-4 w-20 h-20 border-2' />
              </div>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-md font-semibold text-gray-800'>Hotel Booking Status:</p>
              <div className='flex items-center'>
                <p className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                  data.status.hotelBooked === 'Confirmed' ? 'bg-green-200 text-green-800' : 
                  data.status.hotelBooked === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 
                  'bg-red-200 text-red-800'
                }`}>
                  {data.status.hotelBooked}
                </p>
                <img src={QRCode} alt='QR code' className='ml-4 w-20 h-20 border-2' />
              </div>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-md font-semibold text-gray-800'>Flight Booking Status:</p>
              <div className='flex items-center'>
                <p className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                  data.status.flightBooked === 'Confirmed' ? 'bg-green-200 text-green-800' : 
                  data.status.flightBooked === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 
                  'bg-red-200 text-red-800'
                }`}>
                  {data.status.flightBooked}
                </p>
                <img src={QRCode} alt='QR code' className='ml-4 w-20 h-20 border-2' />
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center border-t pt-4'>
            <div className='flex flex-col'>
              <p className='text-gray-700'>
                <span className='font-semibold'>Booking ID:</span> {data.bookingId}
              </p>
              <p className='text-xl font-bold text-gray-900'>{data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
