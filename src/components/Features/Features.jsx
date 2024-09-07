import React from 'react';
import image from '../../assets/image 48.png';
import image2 from '../../assets/image 49.png';
import image3 from '../../assets/image 50.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Features = () => {
  useGSAP(() => {
    gsap.from('.features-tab', {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#features',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  return (
    <div id="features" className="bg-[#FDF3E8] py-10">
      <div className="features flex justify-center flex-wrap lg:gap-10 gap-10 lg:px-24 px-4">
        
        <div className="flex flex-col lg:w-[48%] w-[90%] gap-12">
          <div className="features-tab flex flex-col h-[180px] justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <hr className="lg:w-8 h-2 w-6 bg-[#FCAF58]" />
              <h1 className="text-black font-semibold lg:text-2xl text-xl">Our Features</h1>
            </div>
            <h2 className="font-bold leading-snug text-center lg:text-left lg:text-5xl text-4xl">Enhancing Your Travel with Exceptional Services</h2>
          </div>

          <div className="features-tab bg-white h-[180px] flex items-center gap-10 justify-center lg:px-10 px-4 rounded-lg">
            <img src={image} alt="Best Tour Guide" className="lg:w-28 lg:h-28 w-20 h-20" />
            <div>
              <h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2">Best Tour Guide For You</h3>
              <p className="text-gray-500 text-xl font-semibold">Experience Travel Like a Local</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-[48%] w-[90%] gap-8">
          <div className="features-tab bg-white h-[180px] flex items-center gap-10 justify-center lg:px-10 px-4 rounded-lg">
            <img src={image2} alt="Various Destinations" className="lg:w-28 lg:h-28 w-20 h-20" />
            <div>
              <h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2">Various Destinations</h3>
              <p className="text-gray-500 text-xl font-semibold">Explore Diverse Destinations Across the Globe</p>
            </div>
          </div>

          <div className="features-tab bg-white h-[200px] lg:h-[180px] flex items-center gap-10 justify-center lg:px-10 px-4 rounded-lg">
            <img src={image3} alt="Easy Booking Process" className="lg:w-28 lg:h-28 w-20 h-20" />
            <div>
              <h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2">Easy Booking Process</h3>
              <p className="text-gray-500 text-xl font-semibold">Seamless Booking, Hassle-Free Travel</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
