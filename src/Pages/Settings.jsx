import React, { useState } from 'react';
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar';
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUser, FaGlobe, FaBell, FaCog, FaTrashAlt, FaLock } from 'react-icons/fa';
import ScrollToTop from '../components/Scroll/Scroll';

const Settings = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
  });

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleNotificationToggle = (type) => setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));

  return (
    <div className='flex'>
        <ScrollToTop />
      <button 
        onClick={toggleNavbar} 
        className='lg:hidden fixed top-4 left-4 text-gray-900 text-3xl z-50'
      >
        {isNavbarVisible ? <IoMdClose /> : <RiMenu2Fill />}
      </button>

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 flex flex-col justify-between items-center pl-10 ${isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:translate-x-0 lg:fixed lg:w-[20%] lg:items-start lg:justify-between`}>
        <DashboardNavbar />
      </div>

      <div className={`w-full lg:w-[80%] ml-auto py-14 lg:py-10 lg:px-10 px-4`}>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Settings</h1>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Preferences</h2>
          <p className="mb-2 font-medium text-gray-700"><FaGlobe className="inline-block mr-2" /> Home Country: USA</p>
          <p className="mb-2 font-medium text-gray-700"><FaGlobe className="inline-block mr-2" /> Preferred Language: English</p>
          <p className="mb-2 font-medium text-gray-700"><FaBell className="inline-block mr-2" /> Newsletter Subscriptions: 
            <input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle('email')} className="ml-2" />
          </p>
          <p className="mb-2 font-medium text-gray-700"><FaBell className="inline-block mr-2" />Push Notifications:
            <input type="checkbox" checked={notifications.push} onChange={() => handleNotificationToggle('push')} className="ml-2" />
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Saved Items</h2>
          <p className="mb-2 font-medium text-gray-700"><FaCog className="inline-block mr-2" /> Saved Trips: Paris, Tokyo, Sydney</p>
          <p className="mb-2 font-medium text-gray-700"><FaCog className="inline-block mr-2" /> Saved Itineraries: Europe Tour, Japan Adventure</p>
          <p className="mb-2 font-medium text-gray-700"><FaCog className="inline-block mr-2" /> Saved Accommodations: Hôtel Plaza Athénée, The Peninsula Tokyo</p>
          <p className="font-medium text-gray-700"><FaCog className="inline-block mr-2" /> Saved Activities: Snorkeling, Hiking</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Notifications</h2>
          <div>
            <p className="font-semibold mb-2 text-gray-900">Email Notifications:</p>
            <ul className="ml-4">
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle('email')} className="mr-2" /> New trip recommendations</li>
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle('email')} className="mr-2" /> Price drops for saved trips</li>
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle('email')} className="mr-2" /> Order confirmations</li>
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.email} onChange={() => handleNotificationToggle('email')} className="mr-2" /> Trip reminders</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2 text-gray-900">Push Notifications:</p>
            <ul className="ml-4">
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.push} onChange={() => handleNotificationToggle('push')} className="mr-2" /> Breaking travel news</li>
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.push} onChange={() => handleNotificationToggle('push')} className="mr-2" /> Personalized trip recommendations</li>
              <li className="font-medium text-gray-700"><input type="checkbox" checked={notifications.push} onChange={() => handleNotificationToggle('push')} className="mr-2" /> Last-minute deals</li>
            </ul>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Privacy Settings</h2>
          <p className="mb-2 font-medium text-gray-700"><FaLock className="inline-block mr-2" /> Data Privacy: Manage your personal information usage and sharing.</p>
          <p className="font-medium text-gray-700"><FaLock className="inline-block mr-2" /> Cookie Settings: Manage your cookie preferences.</p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Account Management</h2>
          <p className="mb-2 font-medium text-gray-700"><FaTrashAlt className="inline-block mr-2" /> Account Deletion: <span className="text-red-600 hover:underline cursor-pointer">Delete your account</span></p>
        </section>
      </div>
    </div>
  );
};

export default Settings;
