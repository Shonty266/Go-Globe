import React from 'react'
import Aboutus from './Aboutus'
import Gallery from '../Gallery/Gallery'
import Navbar from '../Navbar'
import Features from '../Features/Features'
import Hotels from '../Hotels/Hotels'
import Footer from '../Footer/Footer'
import ScrollToTop from '../Scroll/Scroll'

const AboutusFull = () => {
  return (
    <div>
        <ScrollToTop/>
        <Navbar />
        <Aboutus />
        <Gallery />
        <Features/>
        <Hotels/>
        <Footer />
    </div>
  )
}

export default AboutusFull