import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navigation/Navbar';
import '../Styles.css';

const Register = () => {


  return (
         <div className='reg'>
            <Navbar />
          <div className='reg-wrapper'>
              <div className='reg-box1'>
                <h3>REGISTER AS <span>GROUP</span></h3>
                <Link to='/GroupOnline'><button className='online-btn'>Online</button></Link>
                <Link to='/GroupPhy'><button type='button' className='physical-btn'>Physical</button></Link>
              </div>
              <div className='reg-box2'>
                <h3>REGISTER AS <span>INDIVIDUAL</span></h3>
                <Link to='/IndiviOnline'><button>Online</button></Link>
                <Link to='/IndiviPhy'><button>Physical</button></Link>
              </div>
          </div>
        </div>
       
  )
}

export default Register

