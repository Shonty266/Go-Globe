import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FiInstagram } from "react-icons/fi";
// import { IoIosArrowUp } from 'react-icons/io';

const Hotels = () => {
   



      useGSAP(() => {
        gsap.from('.hotels', {
          y:100,
          opacity: 0,
          duration: 2,
          stagger:0.5,
          scrollTrigger: {
            trigger: '.hotels',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
          },
        });
        
      
        
      
      })

  return (
    <div className='py-10 hotels'>
<div className=' flex items-center justify-start  gap-2 pl-4 lg:pl-24 lg:mb-0 mb-10'>
      <hr className='lg:w-8 h-2 w-6  bg-[#FCAF58]' />
      <h1 className='text-black font-bold lg:text-5xl text-4xl '>
      Top Hotels & Resorts
      </h1></div>

      
      <div className='lg:h-[700px] h-[500px] lg:px-0 px-4 flex justify-center gap-4 py-10 overflow-hidden rounded-lg'>

<div className=' h-full flex flex-col gap-4 items-center'>
  
  <div className="relative h-1/2 group overflow-hidden hotels">
  <img
    src="https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="h-full w-full object-cover "
  />
  <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black opacity-70 group-hover:bottom-0 flex items-center justify-center transition-all duration-500 ease-in-out">
    <a href='/' className="text-white text-4xl font-extrabold text-center"><FiInstagram />
    </a >
  </div>
</div>
  
  
  <div className="relative h-1/2 group overflow-hidden hotels">
  <img
    src="https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="h-full w-full object-cover"
  />
  <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black opacity-70 group-hover:bottom-0 flex items-center justify-center transition-all duration-500 ease-in-out">
    <a href='/' className="text-white text-4xl font-extrabold text-center"><FiInstagram />
    </a >
  </div>
</div>





</div>
<div className='h-full'>

<div className="relative h-full group overflow-hidden hotels">
  <img
    src="https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="h-full w-full object-cover"
  />
  <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black opacity-70 group-hover:bottom-0 flex items-center justify-center transition-all duration-500 ease-in-out">
    <a href='/' className="text-white text-4xl font-extrabold text-center"><FiInstagram />
    </a >
  </div>
</div>

</div>
<div className='h-full flex flex-col gap-4 items-center hotels'>
 
<div className="relative h-1/2 group overflow-hidden">
  <img
    src="https://images.pexels.com/photos/2263510/pexels-photo-2263510.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="h-full w-full object-cover"
  />
  <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black opacity-70 group-hover:bottom-0 flex items-center justify-center transition-all duration-500 ease-in-out">
    <a href='/' className="text-white text-4xl font-extrabold text-center"><FiInstagram />
    </a >
  </div>
</div>

<div className="relative h-1/2 group overflow-hidden hotels">
  <img
    src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="h-full w-full object-cover"
  />
  <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black opacity-70 group-hover:bottom-0 flex items-center justify-center transition-all duration-500 ease-in-out">
    <a href='/' className="text-white text-4xl font-extrabold text-center"><FiInstagram />
    </a >
  </div>
</div>



</div>

</div>
     



    </div>
  )
}

export default Hotels