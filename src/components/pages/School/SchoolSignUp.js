import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../../Navigation/Navbar2'
import '../Styles.css';

const SchoolSignUp = () => {
  return (
    <div className='signUp-cta'>
    <Navbar2/>
    <div className='signUp-wrapper'>
      <div className='signUp-box'>
        <form autoComplete>
          <p>NAME OF GROUP</p>
          <input type='text' required name='title'/>
          <p>NAME OF DELEGATES</p>
          <input type='text'required name='name' />
          <input type='text'required name='name' />
          <input type='text'required name='name' />
          <input type='text'required name='name' />  
          <p>EMAIL</p>
          <input type='email' required name='email' />
          <p>PHONE NUMBER</p>
          <input type='text'required name='phone' />
          <p className='mode'>Mode of Attendance</p>
          <div className='mode-cta'>
            <div className='mode-row'>
                  <input type='radio' name='online' value='online'/>
                  <h4>Online</h4>
                  <input type='radio'  name='physical' value='physical'/>
                  <h4>Physical</h4>     
            </div>
          </div>
          <Link to='/payment'><button type='submit'>Click to Register</button></Link>
        </form>
    

      </div>
    </div>
      
    </div>
  )
}

export default SchoolSignUp
