import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';


const Contact = () => {


  useGSAP(() => {
    gsap.from('#contact', {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '#contact',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
  
  return (
    <div id="contact" className="bg-gray-50 pb-16">
      <div className="flex gap-2 items-center justify-center mb-12">
        <hr className="lg:w-8 h-2 w-6 bg-[#FCAF58]" />
        <h1 className="text-black font-bold lg:text-5xl text-4xl">
          Get in Touch
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="lg:w-[60%] w-[90%]  bg-white p-8 border rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm  transition-all duration-300 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Enter Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm  transition-all duration-300 outline-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-10 bg-[#FCAF58] font-semibold text-white text-xl rounded-lg hover:bg-[#F9C784] transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
