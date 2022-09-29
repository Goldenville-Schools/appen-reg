import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import { AiFillCheckSquare } from "react-icons/ai";
import {Link} from "react-router-dom";





const Dashboard = () => {
  return (
    <div className='dashboard'>    
      <Sidebar/>
    <div className='dashboard_container'>
      <NavbarDash/>
      <section className='hero_main'>
          <div  className='hero_bg'>
            <div className='hero_wrapper'>
              <h1>12TH APEN Conference 2022</h1>
              <h3>Date -27th – 28th October, 2022 <br/>Theme - EMERGE: Reimagine, Redefine, Reposition</h3>
              <div className='btn_wrapper'>
               <Link to ='/register'> <button className='btn_hero'>Register</button></Link>
            </div>  
          </div>
        </div>

        <section className='topics mt-4 py-5'>
          <div className='container mx-auto py-2'>
            <div className='row gx-0' >
              <h3>PRICES</h3>
              <div className='liner'></div>
                  <p className='lead fs-2 fw-3 my-3 py-2 bg-dark text-white' id='showcase'>
                    <marquee>Gently Reminder: Please note that these prices do not Include accommodation.
                    Accommodation prices is based on your choice.</marquee>
                  </p>
                  <div className='row align-items-center justify-content-between my-auto gy-md-5 gx-5'>
                      <div className='col-md-6 text-center'>
                        <h3 className='fs-3'>GROUP PHYSICAL</h3>
                        <p className='lead'>Minimum of 5 persons 10% off(80,000 X number of people)</p>
                        <div className='pt-1'>
                          <h3 className='fs-3'>GROUP ONLINE</h3>
                          <p className='lead'>Maximum number of 5 persons - Flat rate of 200,000
                           irrespective of the number</p>
                        </div>
                      </div>
                      <div className='col-md-6 text-center' id='indivi_header'>
                        <div className='indivi_price'>
                          <h3 className='fs-3'>INDIVIDUAL PHYSICAL</h3>
                          <p className='lead fw-semibold'>Price: 80,000</p>
                        </div>
                     
                        <div className='pt-1'>
                          <h3 className='fs-3'>INDIVIDUAL ONLINE</h3>
                          <p className='lead'>Price : 50,000</p>
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
                  <span>Date: 27th – 28th October, 2022</span>
                  </div>
                  <div className='reg_content_item'>
                    <AiFillCheckSquare className='icon'/> 
                    <span>Time: 7:30 am Daily</span>
                  </div>
                  <div className='reg_content_item'>
                    <AiFillCheckSquare className='icon'/> 
                    <span>
                      Other activities: Gala Night, Networking, and Raffle Draw.
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-lg' id='main2'>
                  <div  className="car_bg">
                   <div className='offer'>
                    <h2>Early Bird offers</h2>
                    <p> <AiFillCheckSquare className='icon'/> Get 10% discount on early registration</p>
                    <p> <AiFillCheckSquare className='icon'/> Get 10% discount on group registeration {"(For physical attendees only)"}</p>
                    <p> <AiFillCheckSquare className='icon'/> Offer Ends : 24th September 2022</p>
                   </div>             
                  </div>
                
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
