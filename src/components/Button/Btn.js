import React from 'react'
import { Link } from 'react-router-dom'
import './Btn.css'

const Btn = () => {
  return (
    <div>
      <Link to='./register'><button type='submit'>GET STARTED</button></Link>
    </div>
  )
}

export default Btn
