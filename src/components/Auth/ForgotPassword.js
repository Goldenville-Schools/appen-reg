import React from 'react'
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
                    <button type='submit'>Send</button>  
                </form>   
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
