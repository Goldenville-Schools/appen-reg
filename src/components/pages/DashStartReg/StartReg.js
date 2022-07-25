import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './StartReg.css'
import img2 from '../../assets/img10.jpg'
import { AiFillCheckSquare } from "react-icons/ai";
import { HiChevronDoubleRight } from "react-icons/hi";
import {Link} from "react-router-dom";

const StartReg = () => {
  return (
    <div className='start_reg'>
    <Sidebar/>
    <div className='reg_container'>
      <NavbarDash/>
      <div className='reg_section'>
        <div className='container  py-5'>
          <div className='row gy-0 gx-0'>
            <div className='col-lg px-4 py-4' id='main'>
              <div className='reg_header text-start'>
                  <h3>APEN</h3>
                  <h4>12th Annual Conference 2022</h4>
                  <span>Conference Theme – Emerge :
                  Reimagine, Redefine, Reposition</span>
              </div>
              <div className='liner'></div>
              <div className='contents'>
                <div className='content_item'>
                <AiFillCheckSquare className='icon'/> 
                <span>Year – 2022, 12th Annual Conference 2022</span>
                </div>
                <div className='content_item'>
                <AiFillCheckSquare className='icon'/> 
                <span>Date – 3rd – 4th November, 2022</span>
                </div>
                <div className='content_item'>
                  <AiFillCheckSquare className='icon'/> 
                  <span>Time: Day 1 – 7:30 am- 4 pm  | Day 2 – 8 am -3 pm</span>
                </div>
                <div className='content_item'>
                  <AiFillCheckSquare className='icon'/> 
                  <span>
                    Other activities: Gala nite, Networking break, Prizes to be won / Raffle draw.
                  </span>
                </div>
                <div className='reg_btn'>
                  <Link to='/Register'><button>REGISTER NOW <HiChevronDoubleRight className='icon_btn'/></button></Link>
                </div>
              </div>
            </div>
            <div className='col-lg' id='main2'>
                <img src={img2} className='img-fluid' alt='img1'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default StartReg