import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Places from './components/Places/Places';
import Aboutus from './components/Aboutus/Aboutus';
import Gallery from './components/Gallery/Gallery';
import Features from './components/Features/Features';
import Hotels from './components/Hotels/Hotels';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Scroll/Scroll.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  // Timeline for animations
  var tl = gsap.timeline();

  useGSAP(() => {
    tl.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 0.5,
    });

    tl.from('.hero', {
      opacity: 0,
      duration: 1,
    });
  });

  // State to control the custom alert visibility
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Places />
      <Aboutus />
      <Gallery />
      <Features />
      <Hotels />
      <Contact />
      <Footer />

      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center lg:w-[60%] w-[90%]">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p className="mb-4 font-medium">In this project, I developed a user-friendly front-end interface using React and Tailwind CSS for individuals planning to travel around the world. The design features a dashboard with relevant travel-related information. This is a front-end-only project utilizing static data, with some content generated from JavaScript files. I incorporated Swiper.js for interactive elements and GSAP to animate the landing page. Additionally, I created pages for Booking, Tickets, Support, Places Details, Packages, Profile, Settings, and both Login and Sign-Up to provide a comprehensive user experience.</p>
            <button
              onClick={closeAlert}
              className="bg-[#F9C784] text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
