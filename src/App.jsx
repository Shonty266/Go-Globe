import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Places from './components/Places/Places'
import Aboutus from './components/Aboutus/Aboutus'
import Gallery from './components/Gallery/Gallery'
import Features from './components/Features/Features'
import Hotels from './components/Hotels/Hotels'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/Scroll/Scroll.js'
// import ScrollToTop from './components/Scroll/Scroll.js'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero/>
      <Places />
      <Aboutus />
      <Gallery />
      <Features />
      <Hotels />
      <Footer />
      
        
    </div>
  )
}

export default App