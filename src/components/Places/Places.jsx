import React, { useState } from 'react';
import { data } from '../../Data/data.js';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Places = () => {
  const [places, setPlaces] = useState(data);
  const [activeFilter, setActiveFilter] = useState('');

  const filterType = (category) => {
    setActiveFilter(category);
    setPlaces(
      category === '' ? data : data.filter((item) => item.continent === category)
    );
  };

  useGSAP(() => {
    gsap.from('.places', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.places',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 40%',
        scrub: true,
      },
    });

    gsap.from('.places #boxes', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.places',
        start: 'top 70%',
        end: 'top 40%',
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className='places' id='packages'>
      <div className='px-4 py-12 w-full'>
        <div className='flex items-center gap-2 lg:mb-0 mb-6 lg:pl-24'>
          <hr className='lg:w-8 h-2 w-6 bg-[#FCAF58]' />
          <h1 className='text-black font-bold lg:text-5xl text-4xl'>
            Popular Packages
          </h1>
        </div>

        <div className='flex items-center justify-end py-2 gap-4 flex-wrap'>
          <button
            onClick={() => filterType('Africa')}
            className={`duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden ${activeFilter === 'Africa' ? 'text-[#FCAF58]' : ''}`}
          >
            Africa
          </button>
          <button
            onClick={() => filterType('Asia')}
            className={`duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden ${activeFilter === 'Asia' ? 'text-[#FCAF58]' : ''}`}
          >
            Asia
          </button>
          <button
            onClick={() => filterType('Europe')}
            className={`duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden ${activeFilter === 'Europe' ? 'text-[#FCAF58]' : ''}`}
          >
            Europe
          </button>
          <button
            onClick={() => filterType('North America')}
            className={`duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden ${activeFilter === 'North America' ? 'text-[#FCAF58]' : ''}`}
          >
            North America
          </button>
          <button
            onClick={() => filterType('South America')}
            className={`duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden ${activeFilter === 'South America' ? 'text-[#FCAF58]' : ''}`}
          >
            South America
          </button>
          <Link
            to='/signup'
            className='duration-300 font-bold lg:text-lg text-lg relative z-100 border-b-2 border-b-[#FCAF58] text-[#FCAF58]'
          >
            View All
          </Link>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 py-4' id='boxes'>
          {places.slice(0, 4).map((item, index) => (
            // <Link to={`/explore/placedetails/${item.id}`} key={index}>
              <div className='border shadow-lg rounded-lg '>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex flex-col justify-between px-2 py-4'>
                      <div className='flex justify-between'>
                        <p className='font-bold text-2xl'>{item.name}</p>
                        <p className="text-md font-bold text-gray-600 flex gap-2 items-center">
                          <span className="text-yellow-400 text-lg">
                            <FaStar />
                          </span> {item.rating}
                        </p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <p className='font-semibold text-md text-gray-500 flex gap-2 items-center'>
                          <FaLocationDot /> {item.country}
                        </p>
                        <p className='font-bold text-xl pt-2'>{item.duration}</p>
                      </div>
                      <div className='flex justify-between items-center mt-2'>
                      <p className='font-bold text-2xl '>₹{item.price}</p>
                      <Link to={`/explore/placedetails/${item.id}`} key={index} className='bg-orange-300 px-6 py-2 rounded-lg font-semibold '> Explore</Link>
                    </div>
                    </div>
                    
                  </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
