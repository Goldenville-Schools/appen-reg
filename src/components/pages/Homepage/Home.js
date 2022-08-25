import React from 'react'
import Hero from '../../Hero/Hero';
import Slide from '../../../Slider/Slide'
import Navbar from '../../Navigation/Navbar';
import '../Styles.css';
import PageProgressBar from "page-progressbar-react";




const Home = () => {
  return (
    <>
       <PageProgressBar 
        color="#174506"
        startPosition={0.3}
        stopDelayMs={150}
        height={2}
        showOnShallow={true}/>
    <div className='homepage-container'>
      <Navbar />
        <Hero/>
        <Slide/>
      
    </div>
   
   </>
  )
}

export default Home
