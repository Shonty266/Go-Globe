import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import {  } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

const Gallery = () => {

  
  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <div className='w-full flex flex-col lg:flex-row lg:items-end lg:pl-24'>

      <div className='flex items-center justify-start gap-2 lg:mb-0'>
        <hr className='lg:w-8 h-2 w-6 bg-[#FCAF58]' />
      <h1 className='text-black font-bold lg:text-5xl text-5xl '>
      Our Gallery 
      </h1></div>
      <span className='font-semibold text-lg text-gray-500 lg:pl-2'>Share your Happy Memories.</span></div>
        <div className='w-[90%] mt-2 lg:w-[80%] flex justify-center items-center relative'>
    
        <Swiper
    navigation={{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    modules={[Navigation, Autoplay]}
    className="mySwiper lg:pt-10"
  >
    
    <SwiperSlide className='lg:flex lg:h-[550px] h-[500px] w-[90%] lg:py-10 py-4 justify-between gap-10 ' >
          <div className='h-full lg:flex hidden lg:max-w-[300px]  flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col justify-between'>
          <img src="https://images.pexels.com/photos/2832028/pexels-photo-2832028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />
          <img src="https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />

          </div>
          <div className='h-full max-w-[300px] lg:flex hidden flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>

    </SwiperSlide>


    <SwiperSlide className='lg:flex lg:h-[550px] h-[500px] w-[90%] lg:py-10 py-4 justify-between gap-10 ' >
          <div className='h-full lg:flex hidden lg:max-w-[300px]  flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col justify-between'>
          <img src="https://images.pexels.com/photos/2832028/pexels-photo-2832028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />
          <img src="https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />

          </div>
          <div className='h-full max-w-[300px] lg:flex hidden flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>

    </SwiperSlide>
    
    <SwiperSlide className='hidden lg:flex lg:h-[550px] h-[500px] w-[90%] lg:py-10 py-4  justify-between gap-10 ' >
          <div className='h-full lg:flex hidden lg:max-w-[300px] max-w-[50px]  flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col justify-between'>
          <img src="https://images.pexels.com/photos/2832028/pexels-photo-2832028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />
          <img src="https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />

          </div>
          <div className='h-full lg:flex hidden max-w-[300px] flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>

    </SwiperSlide>
    
    <SwiperSlide className='hidden lg:flex lg:h-[550px] h-[500px] w-[90%] lg:py-10 py-4  justify-between gap-10 ' >
          <div className='h-full lg:flex hidden lg:max-w-[300px] max-w-[50px]  flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col justify-between'>
          <img src="https://images.pexels.com/photos/2832028/pexels-photo-2832028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />
          <img src="https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-[220px] object-cover' />

          </div>
          <div className='h-full lg:flex  max-w-[300px]  flex-col gap-4 items-center'>
            <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full w-full object-cover' />
            

          </div>

    </SwiperSlide>

   

   

    <div className="lg:flex justify-center items-center hidden absolute top-8 left-[88%]  transform -translate-y-1/2 text-black">
          <IoIosArrowDropleftCircle className='swiper-button-prev w-14 h-14  text-[#F9C784] text-5xl' />
        </div>
   
        <div className=" lg:flex justify-center items-center hidden absolute top-8 right-[0%]  transform -translate-y-1/2 text-black">
          <IoIosArrowDroprightCircle className='swiper-button-next w-14 h-14  text-[#F9C784] text-5xl' />
        </div>
        
     
   
  </Swiper>
  
  
  
  
  </div>
  </div>


  
  )
}

export default Gallery