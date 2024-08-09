import React, { useState } from 'react'
import {data} from '../../Data/data.js'
import Navbar from '../Navbar.jsx';
import ScrollToTop from '../Scroll/Scroll.js';

const Allplaces = () => {
  
  const [activeType, setActiveType] = useState('');
  const [places, setPlaces] = useState(data);

  const filterType = (category) => {
    setActiveType(category); 
    setPlaces(
      category === '' ? data : data.filter((item) => item.category === category)
    );
  };



  return (
    <div>
      <ScrollToTop/>
         <Navbar />
      <div className='px-4 py-12'>
        <div className='flex items-center gap-2 lg:mb-0 mb-10'>
        <hr className='lg:w-8 h-2 w-6 bg-[#FCAF58]' />
      <h1 className='text-black font-bold lg:text-5xl text-4xl '>
       Popular Places
      </h1></div>

  
      
       
          <div className='flex items-center justify-end py-2 gap-4 flex-wrap '>
            
          <button
  onClick={() => filterType('mountains')}
  className={`relative duration-300 font-semibold lg:text-lg text-sm flex items-center justify-center overflow-hidden ${
    activeType === 'mountains' 
      ? 'bg-[#F9C784] text-black'
      : 'bg-white text-black'
  } rounded-md py-2 px-4`}
>
  Mountains
</button>




            <button
  onClick={() => filterType('beaches')}
  className={`duration-300 font-semibold lg:text-lg text-sm relative z-100 flex items-center justify-center overflow-hidden rounded-md py-2 px-4 ${
    activeType === 'beaches' 
      ? 'bg-[#F9C784] text-black'
      : 'bg-white text-black'
  }`}
>
  Beaches
</button>




<button
  onClick={() => filterType('waterfalls')}
  className={`duration-300 font-semibold lg:text-lg text-sm relative z-100 flex items-center justify-center overflow-hidden rounded-md py-2 px-4 ${
    activeType === 'waterfalls' 
      ? 'bg-[#F9C784] text-black'
      : 'bg-white text-black'
  }`}
>
  Waterfalls
</button>

<button
  onClick={() => filterType('icebergs')}
  className={`duration-300 font-semibold lg:text-lg text-sm relative z-100 flex items-center justify-center overflow-hidden rounded-md py-2 px-4 ${
    activeType === 'icebergs'
      ? 'bg-[#F9C784] text-black'
      : 'bg-white text-black'
  }`}
>
  Icebergs
</button>

<button
          onClick={() => {
            setActiveType(''); 
            setPlaces(data);  
          }}
          className={`duration-300 font-bold lg:text-lg text-md py-2 px-4 rounded-md ${
            activeType === '' ? 'bg-[#F9C784] text-black' : 'bg-white text-[#FCAF58]'
          } border-2 border-[#F9C784]`}
        >
          View All
        </button>





        
        </div>

  

     
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4 '>
  {places.map((item, index) => (
    <div
      key={index}
      className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'
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

export default Allplaces