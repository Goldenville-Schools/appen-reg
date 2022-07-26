import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import { AiFillCheckSquare } from "react-icons/ai";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'




const Dashboard = () => {
  return (
    <div className='dashboard'>    
      <Sidebar/>
    <div className='dashboard_container'>
      <NavbarDash/>
      <section className='hero_main'>
          <div className='container-fluid' id='hero_bg'>
            <div className='hero_wrapper'>
              <h1>12TH APEN Conference 2022</h1>
              <h3>Date -27th – 28th October, 2022 <br/> Conference Theme - Emerge: Reimagine, Redefine, Reposition</h3>
              <div className='btn_wrapper'>
               <Link to ='/register'> <button className='btn_hero'>Register</button></Link>
            </div>  
          </div>
        </div>

        <section className='topics mt-4 py-3'>
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

        <div className='reg_section'>
          <div className='container py-5'>
            <div className='row gy-2 gx-5 justify-content-between'>
              <div className='col-lg px-4 py-2' id='main'>
                <div className='reg_header text-start'>
                    <h3>Activities</h3>
                    <div className='liner'></div>
                </div>
                
                <div className='reg_contents'>
                  <div className='reg_content_item'>
                  <AiFillCheckSquare className='icon'/> 
                  <span>Date – 3rd – 4th November, 2022</span>
                  </div>
                  <div className='reg_content_item'>
                    <AiFillCheckSquare className='icon'/> 
                    <span>Time: Day 1 – 7:30 am- 4 pm  | Day 2 – 8 am -3 pm</span>
                  </div>
                  <div className='reg_content_item'>
                    <AiFillCheckSquare className='icon'/> 
                    <span>
                      Other activities: Gala nite, Networking break, Prizes to be won / Raffle draw.
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-lg' id='main2'>
                <Carousel variant="dark" >
                  <Carousel.Item  id="car_bg">
                   <div className='offer'>
                    <h2>Early Bird offers</h2>
                    <p> <AiFillCheckSquare className='icon'/> Get 5% discount on early registeration</p>
                    <p> <AiFillCheckSquare className='icon'/> Offer Starts : 26th  July 2022 </p>
                    <p> <AiFillCheckSquare className='icon'/> Offer Ends : 31th  August 2022 </p>
                   </div>             
                  </Carousel.Item>
                  <Carousel.Item interval={500} id="car_bg">
                  <div className='offer'>
                    <h2>Early Bird  offers</h2>
                    <p> <AiFillCheckSquare className='icon'/> Get 5% discount on early registeration</p>
                    <p> <AiFillCheckSquare className='icon'/> Offer Starts : 26th  July 2022 </p>
                    <p>   <AiFillCheckSquare className='icon'/> Offer Ends : 31th  August 2022 </p>
                   </div>     
                  </Carousel.Item>
                </Carousel>
            
              </div>
            </div>
        </div>
    </div>
  </section> 
  </div>   
  </div>
   
    
  ) 
}

export default Dashboard
