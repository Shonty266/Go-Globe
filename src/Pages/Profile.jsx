import React, { useState } from 'react';
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar';
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaEdit } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import ScrollToTop from '../components/Scroll/Scroll';

const Profile = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    homeCountry: 'USA',
    travelStyle: 'Adventure seeker',
    dreamDestinations: ['Japan', 'New Zealand', 'Peru'],
    favoriteActivities: ['Hiking', 'Snorkeling', 'Photography'],
    travelPhilosophy: 'Travel is the best way to learn about the world and yourself.',
    tripsTaken: ['Japan', 'Thailand', 'France'],
    bestMemories: ['Watching the sunset in Santorini', 'Hiking in the Swiss Alps'],
    travelTips: 'Always carry a reusable water bottle and be respectful of local customs.',
    socialMedia: {
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
    bucketList: ['Explore the Northern Lights in Iceland', 'Go on a safari in Kenya', 'Relax in the Maldives'],
  });

  const [savedCards] = useState([
    { cardType: 'Visa', last4Digits: '1234', expiryDate: '12/25' },
    { cardType: 'MasterCard', last4Digits: '5678', expiryDate: '11/24' },
  ]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
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

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-center items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:w-[20%] lg:items-start lg:justify-between`}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] ml-auto lg:px-10 px-4 lg:py-10 py-14`}>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUser className="text-4xl text-gray-600" />
            </div>
            <div className="ml-4 flex-grow">
              <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
              <p className="text-gray-600 font-semibold">{user.email}</p>
              <p className="text-gray-600 font-semibold">{user.phone}</p>
              <button className="text-blue-600 font-semibold hover:underline flex items-center mt-4">
                <FaEdit className="mr-2" />
                Edit Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Travel Preferences</h2>
          <p className="text-gray-700 font-semibold">
            <FaMapMarkerAlt className="inline-block mr-2" />
            Home Country: {user.homeCountry}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            <IoMdHeart className="inline-block mr-2" />
            Travel Style: {user.travelStyle}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            <IoMdHeart className="inline-block mr-2" />
            Dream Destinations: {user.dreamDestinations.join(', ')}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            <IoMdHeart className="inline-block mr-2" />
            Favorite Activities: {user.favoriteActivities.join(', ')}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            <IoMdHeart className="inline-block mr-2" />
            Travel Philosophy: {user.travelPhilosophy}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Travel Experiences</h2>
          <p className="text-gray-700 font-semibold">
            Trips Taken: {user.tripsTaken.join(', ')}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            Best Memories: {user.bestMemories.join(', ')}
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            Travel Tips: {user.travelTips}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Social Media Links</h2>
          <p className="text-gray-700 font-semibold">
            <FaEnvelope className="inline-block mr-2" />
            Facebook: <a href={user.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.socialMedia.facebook}</a>
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            <FaEnvelope className="inline-block mr-2" />
            Instagram: <a href={user.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.socialMedia.instagram}</a>
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700 font-semibold">
            <FaEnvelope className="inline-block mr-2" />
            Email: {user.email}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Bucket List</h2>
          {user.bucketList.length > 0 ? (
            <ul>
              {user.bucketList.map((item, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  <p className="text-gray-700 font-semibold">
                    <IoMdHeart className="inline-block mr-2" />
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bucket list items found.</p>
          )}
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Saved Cards</h2>
          {savedCards.length > 0 ? (
            <ul>
              {savedCards.map((card, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  <p className="text-gray-700 font-semibold">
                    <FaCreditCard className="inline-block mr-2" />
                    {card.cardType} ending in {card.last4Digits} (Expiry: {card.expiryDate})
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No saved cards found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
