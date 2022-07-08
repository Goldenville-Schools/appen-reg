import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import { AiFillCheckSquare } from "react-icons/ai";




const Dashboard = () => {
  return (
    <div className='dashboard'>    
      <Sidebar/>
     <div className='dashboard_container'>
      <NavbarDash/>
        <section className='hero_main container'>
          <div className='container' id='hero_bg'>
            <div className='hero_wrapper'>
              <h1>12TH APEN Conference 2022</h1>
              <h3>Date -27th – 28th October, 2022 | Conference Theme - Emerge: Reimagine, Redefine, Reposition</h3>
              
              <div className='btn_wrapper'>
                <button href='#' className='btn_hero'>See More</button>
              </div>  
          </div>
        </div>
        <section className='topics mt-4'>
          <div className='container mx-auto py-2'>
              <div className='row gx-0'>
              <h3>POSSIBLE TITLES/TOPIC</h3>
              <div className='liner'></div>
                  <div className='col-lg py-3'>    
                    <div className='contents '>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>How to deal with bullies/how to handle the parents of bullies</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Safeguarding</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Gamification in the classroom</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>AI, VR, Robotics and Drones</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span> Use of Social Media in Schools</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Coding/Programming</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Assessment of the Future – 21C Assessment</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg py-3'>
                  <div className='contents'>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>The Utility of a Common Entrance Exam for International Schools</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>SEAL</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Quadrants and Quotients: IQ, EQ, SQ and AQ</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Beating their Own Path – Prepare your students for the road, 
                          don’t prepare the road for children</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Developing a Coaching Culture</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Digital Marketing for School</span>
                      </div>
                      <div className='content_item'>
                        <AiFillCheckSquare className='icon'/> 
                        <span>Environmental Awareness – Denial and Acceptance</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </section>
      </section> 
     </div>   
    </div>
   
    
  )
}

export default Dashboard
