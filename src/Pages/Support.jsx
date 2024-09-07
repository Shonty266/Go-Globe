import React, { useState } from 'react'
import DashboardNavbar from '../components/AfterLogin/DashboardNavbar/DashboardNavbar'
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ScrollToTop from '../components/Scroll/Scroll';
// import { IoMdClose } from 'react-icons/io';

const Support = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
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

      <div className={`w-full lg:w-[80%]  ml-auto py-14 lg:py-10 lg:px-10 px-4 `}>
      <div className="flex flex-col min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Support Page</h1>
      </header>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">How do I reset my password?</p>
            <p>If you’ve forgotten your password, click the "Forgot Password" link on the login page and follow the instructions to reset it.</p>
          </div>
          <div>
            <p className="font-semibold">Where can I find my booking history?</p>
            <p>Your booking history can be accessed from the "My Account" section of the website, under the "Bookings" tab.</p>
          </div>
          <div>
            <p className="font-semibold">How can I contact customer support?</p>
            <p>You can contact our customer support team via email, phone, or by filling out the support form below.</p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-gray-600 mr-3" />
            <p>Email: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-gray-600 mr-3" />
            <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-blue-600"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="text-blue-600"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="text-pink-600"><FaInstagram size={24} /></a>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <button onClick={toggleForm} className="text-[#FCAF58] font-bold mb-4">
          {showForm ? <IoMdClose size={24} /> : 'Open Support Form'}
        </button>
        {showForm && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded outline-none" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded outline-none" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded outline-none" rows="4" required></textarea>
            </div>
            <button type="submit" className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer'>Send</button>
          </form>
        )}
      </section>
    </div>
      </div>
    </div>
  )
}

export default Support