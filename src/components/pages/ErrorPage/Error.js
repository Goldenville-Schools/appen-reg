import React from 'react'
import NavError from '../../Navigation/NavError'
import '../ErrorPage/Error.css'


const Error = () => {
  return (
    <div className='error'>
        <NavError/>
        <div className='err-cta'>
            <div className='err2'>
                <h1>PAGE NOT FOUND</h1>
            </div>
            <div className='err3'>
                <div className='err-img'>
                    <img src='https://www.starbucks.com/weblx/images/mr-coffee.svg'/>
                </div>
                <div className='err-text'>
                    <h2>Oops!</h2>
                    <h3>We can’t find the page that you were looking for.</h3>
                    <p>You might try retyping the URL.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Error
