import React from 'react';
import image from '../../assets/image 48.png';
import image2 from '../../assets/image 49.png';
import image3 from '../../assets/image 50.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Features() {

  
  useGSAP(() => {
    gsap.from('.features-tab', {
      // y:100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: '.features',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
      },
    });
    
  
    
  
  })

  return (
    <div>
    

    <div className='features flex justify-center lg:gap-10 gap-10 lg:pl-24 lg:pr-24  bg-[#FDF3E8] flex-wrap py-10'>
<div className='flex flex-col lg:justify-between gap-12 lg:w-[48%] w-[90%]'>
<div>

<div className='features-tab flex flex-col h-[180px] lg:justify-start justify-end w-full'>

      <div className='flex items-center justify-center lg:justify-start gap-2'>
      <hr className='lg:w-8 h-2 w-6  bg-[#FCAF58]' />
      <h1 className='text-black font-semibold lg:text-2xl text-xl '>
      Our Features 
      </h1></div>
      <h2 className='font-bold lg:items-end items-start leading-snug lg:leading-snug lg:text-5xl text-4xl lg:text-left text-center'>Enhancing Your Travel with Exceptional Services</h2></div>

</div>
<div className='features-tab bg-white h-[180px] lg:px-10 px-4  flex gap-10 justify-center items-center rounded-lg'>
    <img src= {image} alt="" className='lg:w-28 lg:h-28 w-20 h-20' />

    <h1><h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2 ">Best Tour Guide For You</h3>
    <p className="text-gray-500  text-xl font-semibold">Experience Travel Like a Local</p></h1>

</div>
</div>


<div className='flex flex-col justify-between  gap-8 lg:w-[48%] w-[90%]'>
<div className='features-tab bg-white h-[180px] flex lg:px-10 px-4 gap-10 justify-center items-center rounded-lg'>
    <img src= {image2} alt="" className='lg:w-28 lg:h-28 w-20 h-20' />

    <h1><h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2 ">Various Destinations</h3>
    <p className="text-gray-500  text-xl font-semibold">Explore Diverse Destinations Across the Globe</p></h1>

</div>

 <div className='features-tab bg-white lg:h-[180px] h-[200px] flex lg:px-10 px-4 gap-10 justify-center items-center rounded-lg'>
    <img src= {image3} alt="" className='lg:w-28 lg:h-28 w-20 h-20' />

    <h1><h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2 ">Easy Booking Process</h3>
    <p className="text-gray-500  text-xl font-semibold">Seamless Booking, Hassle-Free Travel</p></h1>

</div> 

</div>


    </div>



    </div>
   
  );
}

export default Features;