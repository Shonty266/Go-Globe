import React from 'react';
import Navbar from '../Navbar';

function Aboutus() {
  return (
    
    <div className="bg-[#FDF3E8] lg:py-20 py-10">

      <div className="container mx-auto px-4">
      <div className='flex items-center justify-center gap-2 mb-0flex-wrap'>
        <hr className='w-6 h-2 bg-[#FCAF58]' />
      <h1 className='text-black font-semibold text-2xl'>
       About Us
      </h1></div>
        <h2 className="lg:text-5xl text-4xl font-bold text-center mb-8 lg:leading-snug leading-snug">
          Exploring the World, <br />
          Creating Memories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mountain Landscape"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg mb-4 font-medium">
                At <span className='font-bold text-2xl text-[#FCAF58]'>Go Globe </span>, we are passionate about turning your travel
                dreams into reality. Founded with a love for exploration and a
                commitment to exceptional service, we specialize in creating
                unforgettable journeys to the world's most stunning
                destinations.
              </p>
              <p className="text-lg mb-4 font-medium">
                Our team of travel experts is dedicated to providing
                personalized experiences, whether you're seeking a serene
                escape in the mountains of Manali, India, or an adventurous
                trek through the Swiss Alps. We believe in the power of travel to
                inspire, rejuvenate, and transform lives.
              </p>
              <p className="text-lg mb-4 font-medium">
                Join us on a journey to discover new horizons, create lasting
                memories, and explore the beauty of the world with confidence
                and ease.
              </p>
            </div>
            <div className="flex lg:justify-between mt-8 flex-wrap gap-6 justify-center">
              <div className="text-center">
                <h3 className="font-bold text-5xl text-[#FCAF58]">10K+</h3>
                <p className="text-black font-bold text-2xl">Active Travellers</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-5xl text-[#FCAF58]">1K+</h3>
                <p className="text-black font-bold text-2xl">Destinations</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-5xl text-[#FCAF58]">15K+</h3>
                <p className="text-black font-bold text-2xl">Happy Travellers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;