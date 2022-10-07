import React from 'react'
import { Link } from 'react-router-dom'
import './Btn.css'

import { GiReturnArrow } from 'react-icons/gi';

const Btn = (props) => {
  const links =  '/Dashboard';
  
  return (
    <div>
      <Link to={links}><button type='submit'><GiReturnArrow className='icon'/>{props.backTo}</button></Link>
    </div>
  )
}

export default Btn
