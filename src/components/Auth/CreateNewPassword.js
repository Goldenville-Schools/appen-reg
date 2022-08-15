import React from 'react'
import Navbar2 from '../Navigation/Navbar2'
import '../Auth/Auth.css'


const CreateNewPassword = () => {
  return (
    <div className='auth_signin'>
    <Navbar2/>
      <div className='auth_body'>
          <div className='auth_container'>
              <div className='auth_header'>
                  <h2>Reset Password</h2>
              </div>
              <form className='form' autoComplete = 'off'>
                  <div className='form-control'>
                      <label>New Password</label>
                      <input type='password'  name='newPassword'    placeholder='New Password'/>
                  </div>
                  <div className='form-control'>
                      <label>Confirm Password</label>
                      <input type='password'  name='confirmPasswords'    placeholder='Confirm Password'/>
                  </div>
                  <button type='submit'>Create</button>  
              </form>   
          </div>
      </div>
  </div>
  )
}

export default CreateNewPassword
