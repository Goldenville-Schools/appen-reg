import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviOnline.css'

const IndiviOnline = () => {

  //Track the changes to the formfield
  const[formField, setFormField] = useState({
    title: "",
    name:"",
    school:"",
    email:"",
    phone:"",
    address:"",
    

  })
  return (
    <div className='individual-cta'>
      <Navbar2/>
      <div className='individual-wrapper'>
        <div className='indivi-box'>
          <form autoComplete>
            <div className='input100'>
              <input type='text' required placeholder='Title' name='title' />
              </div>
              <div className='input100'>
                  <input type='text'required placeholder='Fullname' name='name'/>
              </div>
              <div className='input100'>
                <input type='text' required placeholder='Name Of School' name='school' />
              </div>
              <div className='input100'>
                <input type='email' required placeholder='Email' name='email' />
              </div>
              <div className='input100'>
                <input type='text'required placeholder='Phone Number'name='phone' />
              </div>
              <div className='input100'>
                <input type='text'required placeholder='Address'name='phone' />
              </div>
              <div className='input100'>
                <select name="category">
                  <option selected disabled value="Category">Category</option>
                  <option value="Teacher">Teacher</option>
                  <option value="School Leader">School Leader</option>
                  <option value="School Owner">School Owner</option>
                </select> 
              </div>
              <div className='input-submit'>    
                  <Link to='/payment'><button type='submit'>Click to Submit</button></Link>
              </div>
              
          </form>
      
        </div>
      </div>
    </div>
  )
}

export default IndiviOnline
