import React, { useState} from 'react'
import {data} from '../../Data/data.js'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Places = () => {
  
// console.log(data)
const [places, setplaces] = useState(data);


  const filterType = (category) => {
    setplaces(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };


  useGSAP(() => {
    // Fade in the `.places` container
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
  
    // Staggered animation for `.box` elements
    gsap.from('.places .box', {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.places',
        scroller: 'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 40%',
        scrub: true,
      },
    });
  }, []);
  
  


  return (
    <div className='places'>
      <div className='px-4 py-12 w-full'>
        <div className='flex items-center gap-2 lg:mb-0 mb-6 lg:pl-24'>
        <hr className='lg:w-8 h-2 w-6  bg-[#FCAF58] text' />
      <h1 className='text-black font-bold lg:text-5xl text-5xl text'>
       Popular Places
      </h1></div>

  
      
       
          <div className='flex items-center justify-end py-2 gap-4 flex-wrap text '>
            
            <button
              onClick={() => filterType('mountains')}
              className='duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'
            >
              Mountains
            </button>
            <button
  onClick={() => filterType('beaches')}
  className='duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'
>
  Beaches
</button>



            <button
              onClick={() => filterType('waterfalls')}
              className='duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'
            >
             Waterfalls
            </button>
            <button
              onClick={() => filterType('icebergs')}
              className='duration-300 font-semibold lg:text-lg text-md relative z-100 after:absolute after:w-full after:h-full after:bottom-0 after:left-[-100%] after:-z-10 after:border-b-2 after:border-b-[#FCAF58] hover:after:left-0 after:duration-300 overflow-hidden'
            >
              Icebergs
            </button>
            <Link 
  to='/allplaces'
  className='duration-300 font-bold lg:text-lg text-lg relative z-100 border-b-2 border-b-[#FCAF58] text-[#FCAF58]'
>
  View All
</Link>

        
        </div>

  


      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4 box'>
  {places.slice(0, 4).map((item, index) => (
    <div
      key={index}
      className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer box'
    >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-[200px] object-cover rounded-t-lg'
      />
      <div className='flex flex-col justify-between px-2 py-4'>
        <p className='font-bold text-2xl'>{item.name}</p>
        <p className='font-semibold text-xl text-gray-500'>{item.country}</p>
        <p className='font-bold text-3xl text-[#FCAF58] pt-2'>₹ {item.price}/couple</p>
      </div>
    </div>
  ))}
</div>

    </div>






    </div>
  )
}

export default Places