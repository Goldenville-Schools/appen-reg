import React from 'react'
import './Slider.css'

import { Carousel } from 'antd';
const Slide = () => {

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '10px',
    textAlign: 'center',
   
  };

  

  return (
    
    <Carousel  autoplay>
      <div>
        <div style={contentStyle}>
          
          <div className='grid-container'>
            <div className='grid-img1'></div>
            <div className='grid-img2'></div>
            <div className='grid-img3'></div>
        </div>
          
        
      </div>
      </div>

      <div>
        <div style={contentStyle}> 
          <div className='grid-container'>
            <div className='grid-img4'></div>
            <div className='grid-img5'></div>
            <div className='grid-img6'></div>
          </div>
        </div>
      </div>

      <div>
        <div style={contentStyle}>
        <div className='grid-container'>
            <div className='grid-img7'></div>
            <div className='grid-img8'></div>
            <div className='grid-img9'></div>
          </div>
        </div>
      </div>
      
    
      <div>
        <div style={contentStyle}>
        <div className='grid-container'>
            <div className='grid-img1'></div>
            <div className='grid-img2'></div>
            <div className='grid-img3'></div>
          </div>
        </div>
      </div>
    </Carousel>





  )
}

export default Slide



