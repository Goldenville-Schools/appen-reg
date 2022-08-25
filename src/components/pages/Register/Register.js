import React from 'react'
import { Link } from 'react-router-dom'
import Navreg from '../../Navigation/Navreg';
import '../Styles.css';


const Register = () => {

  return (     
         <div className='reg'>
            <Navreg />
          <div className='reg-wrapper'>
              <div className='reg-box1'>
                <h3>REGISTER AS <span>GROUP/ORGANIZATION</span></h3>
                  <div className='btn-flex'>
                  <Link to='/GroupOnline'><button className='online-btn'>Online</button></Link>
                  <Link to='/GroupPhy'><button type='button' className='physical-btn'>Physical</button></Link>
                  </div>
              </div>
              <div className='reg-box2'>
                <h3>REGISTER AS <span>INDIVIDUAL</span></h3>
                <div className='btn2-flex'>
                  <Link to='/IndiviOnline'><button type='button' className='online2-btn'>Online</button></Link>
                  <Link to='/IndiviPhy'><button type='button' className='physical2-btn'>Physical</button></Link>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Register

