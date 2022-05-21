import React from 'react'
import Hero from '../../Hero/Hero';
import Slide from '../../../Slider/Slide'
import Navbar from '../../Navigation/Navbar';
import '../Styles.css';



const Home = () => {
  return (
    <div className='homepage-container'>
      <Navbar />
        <Hero/>
        <Slide/>
      
    </div>
   
   
  )
}

export default Home
