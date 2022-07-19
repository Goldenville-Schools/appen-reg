import React from 'react'
import { Link } from 'react-router-dom'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-wrapper'>
            <div className='header'>
                <h1>APEN <br/>12TH CONFERENCE</h1>
            </div>
            <div className='content-flex'>
                <div className='row1'>
                    <div className='col2'>
                        <h3>EMERGE:</h3>
                        <div className='col2-tagline'>
                            <p>Reimagine<span className='liner'></span></p>
                            <p>Redefine<span className='liner'></span></p>
                            <p className='hidden'>Reposition</p>
                        </div>
                            <Link to='./Signin'><button className='btn-hero'>GET STARTED</button></Link>
                    </div>
                    
                    <div className='col2'>
                        <div className='row2'>
                            <div className='col3'>
                                <h4>Date</h4>
                                <h4>Venue</h4>
                            </div>
                            <div className='col3'>
                             <p><span></span> 27th – 28th October, 2022.</p>
                                <p><span></span> Greensprings School Lekki Campus after Crown Estate, Km. 40 Lekki –
                                     Epe Expy, Awoyaya, Lagos.</p>
                            </div>
                        </div>
                        <div className='col4'>
                            <div className='row-date'>
                                <h4>DAY 1</h4>
                                <p><span></span> 7:30am- 4pm</p>
                                <h4>DAY 2</h4>
                                <p> <span></span> 8am -3pm</p>   
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
               

        </div>
    </div>
  )
}

export default Hero
