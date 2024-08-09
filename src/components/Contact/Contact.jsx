import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import ScrollToTop from '../Scroll/Scroll'

const Contact = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar/>
        <div className='flex justify-center py-20'>
        <div className="lg:w-1/2 w-[90%] flex flex-col justify-center p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#F9C784] text-black font-semibold rounded-md shadow-sm hover:bg-black duration-300 focus:outline-none focus:ring-2 hover:text-white focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact