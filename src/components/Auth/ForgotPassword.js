import React from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import Navbar2 from '../Navigation/Navbar2'

const ForgotPassword = () => {

    //Using Usestate to check
  return (
    <div className='auth_signin'>
      <Navbar2/>
        <div className='auth_body'>
            <div className='auth_container'>
                <div className='auth_header'>
                    <h2>Forgot Password ?</h2>
                </div>
                <form className='form' autoComplete = 'off'>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='email'  name='email'   value="" placeholder='Email'/>
                    </div>
                   <Link to="/CreateNewPassword"> <button type='submit'>Send</button> </Link> 
                </form>   
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
