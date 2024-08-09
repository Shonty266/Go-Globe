import React from 'react'
import Navbar from '../Navbar'
import Features from '../Features/Features'
import Hotels from '../Hotels/Hotels'
import Footer from '../Footer/Footer'
import ScrollToTop from '../Scroll/Scroll'

const FeaturesFull = () => {
  return (
    <div>
        <ScrollToTop/>
    <Navbar />
    <Features/>
    <Hotels/>
    <Footer /></div>
  )
}

export default FeaturesFull