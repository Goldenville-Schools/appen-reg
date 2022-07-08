import React from 'react'
import './Speakers.css'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

const Speakers = () => {
  return (
    <div className='speakers'>
    <Sidebar/>
    <div className='speakers_container'>
      <NavbarDash/>
    <div className='speaker_carousel'>
      <div className='speaker_header'>
        <h2>MEET OUR POSSIBLE FACILITATORS</h2>
        <div className='liner'></div>
      </div> 
    <Carousel variant="dark" fade>
      <Carousel.Item  className='car_bg'>
        <div className='container'>
          <div className='row gx-0'>
            <div className='col-lg'>
                <div className='speaker_content'>   
                    <p>CEO, Landmark</p>
                    <h3>Paul Onwuanibe</h3>
                </div>
            </div>
            <div className='col-lg'>
            <div className='speaker_content'>
                  
                    <p>Best in the World (Law) x2</p>
                    <h3>Justice Oresanya</h3>
                
                </div>
            </div>
            <div className='col-lg'>
            <div className='speaker_content'>       
                
                  <p>Maltina Teacher of the Year</p>
                  <h3>Taiye Abanilka</h3>
               
              </div>
            </div>
          </div>

        </div> 
      </Carousel.Item>
      <Carousel.Item className='car_bg'>
      <div className='container'>
          <div className='row gx-0'>
            <div className='col-lg'>
                <div className='speaker_content'>
                  
                    <p>Sports Agents</p>
                    <h3>Sports Managers from various clubs</h3>
               
                </div>
            </div>
            <div className='col-lg'>
            <div className='speaker_content'>     
                    <p>Famous Artists</p>
                    <h3>Davido, Wizkid, Burna Boy or their manager</h3>
                  </div>
                
            </div>
            
        </div>
        </div>
        
       
      </Carousel.Item>
    </Carousel>
    </div>

  </div>   
  </div> 
  )
}

export default Speakers