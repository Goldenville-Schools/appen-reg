import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PaystackPop from '@paystack/inline-js';
import Navbar2 from '../../Navigation/Navbar2'
import './Payment.css'

const Payment = () => {
  //Forvalidate 
  const[formValid, setFormValid] = useState(false)

  //Set the state for the form
 const [formField, setFormField] = useState({
  email:""
})

 //Use The UseEffect to validate the form and reload on every Input
 useEffect( ()=>{
  if(
    formField.email !== ""
  ){
    setFormValid(true)
  }else{
    setFormValid(false)
  }
 }, [
  formField.email
 ])

 //Create a function to handle the change event for the form data
 const handlerChange = (e)=>{
 
    setFormField({...formField, [e.target.name]:e.target.value})
    console.log(formField)
 }
  
 
  //Submit  form
 const submitHandler =(e)=>{
  e.preventDefault()

  const amount = Number(JSON.parse(localStorage.getItem('amount')))
  let handler = PaystackPop.setup({
    key: 'pk_test_fc3d2fcffe2f12175f83e78825ac533f9c76adda', // Replace with your public key
    email: formField.email,
    amount: amount * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      const token = JSON.parse(localStorage.getItem('user')).refreshToken
      const form = JSON.parse(localStorage.getItem('form'))
      const headers = {
        Accept: '*/*',
        Authorization: `Bearer ${token}`
      }
      console.log(form);
      axios.post(`http://localhost:4000/register`, { ...form } ,{ headers })
      .then(response => {
        
        console.log(response)
      })
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      // window.location = '/Dashboard';
    }
  });
  handler.openIframe();
}
  return (
    <div className='individual-cta-p'>
      <Navbar2/>
      <div className='individual-wrapper-p'>
        <div className='indivi-box-p'>
          <div className='pay-email'>
            <h2>Enter Payment Email</h2>
          </div>
          <form  onSubmit={submitHandler} autoComplete = 'off'>
              <div className='input100'>
                <input type='email' required placeholder='Email' name='email' value={formField.email} onChange={handlerChange} />
              </div>
              
              <div className='input-submit'>    
                <button type='submit' onClick={formValid}>Submit</button>
              </div>   
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment
