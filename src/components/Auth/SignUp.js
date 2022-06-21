import React from 'react'
import '../Auth/auth.css'
import Navreg from '../Navigation/Navreg'

const SignUp = () => {
  return (
    <div className='container'>
        <Navreg/>
        <div className='form-cta'>
            <div className='form-box-cta'>
                <div className='form-box'>
                <h2>Don't have an account? SignUp</h2>
                    <form>
                        <div className=' input_100'>
                            <label>Full Name</label><br/>
                            <input type='text'  name='fullName'/>
                        </div>
                        <div className='input_100'>
                            <label>Email</label><br/>
                            <input type="email" required name='email'  />
                        </div>
                        <div className='input_100'>
                            <label>Password</label><br/>
                            <input type='password'name='password'  />
                        </div>
                        <div className='input_100'>
                            <label>Confirm Password</label><br/>
                            <input type='password'  name='confirmpassword'/>
                        </div>
                        <div className='input_submit'>    
                            <button type='submit'>Sign Up</button>
                        </div> 
                    </form>
                </div>
               
            </div>
            
        </div>
  
    </div>
  )
}

export default SignUp
