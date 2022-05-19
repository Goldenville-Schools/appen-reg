import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='reg'>
      <div className='reg-wrapper'>
          <div className='reg-box1'>
            <h3>REGISTER AS <span>GROUP</span></h3>
            <Link to='./SchoolSignUp'><button>register</button></Link>
          </div>
          <div className='reg-box2'>
            <h3>REGISTER AS <span>INDIVIDUAL</span></h3>
            <Link to='./SingleSignUp'><button>register</button></Link>
          </div>
      </div>

    </div>
  )
}

export default Register

