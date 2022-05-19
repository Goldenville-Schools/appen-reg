import React from 'react'
import { Link } from 'react-router-dom'
import './Btn.css'

const Btn = ({props}) => {
  return (
    <div>
      <Link to='./register'><button type='submit'>GET STARTED</button></Link>
    </div>
  )
}

export default Btn
