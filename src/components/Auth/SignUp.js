// import React, {useEffect, useState} from 'react'
// import '../Auth/auth.css'
// import Navreg from '../Navigation/Navreg'

// const SignUp = () => {
//     const[formValidate, setformValidate] = useState(false)
//      const[form, setform] = useState([{
//         fullName:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//     }])

//     useEffect ( ()=>{
//         if (
//             form.fullName !== "" &&
//             form.email !== "" &&
//             form.password !== "" &&
//             form.confirmPassword !== ""
//         ){
//             setformValidate(true)
//         }else{
//             setformValidate(false)
//         }
//     }, [form.fullName,
//         form.email,
//         form.password,
//         form.confirmPassword
//     ])

//     /* Handle Change*/
//     const handleChange =(e)=>{
//         setform({...form , [e.target.name]:e.target.value})
//         console.log(form)
//     }
//     const submitHandler = (e) => {
//         e.preventDefault()
//         sessionStorage.setItem('AdminDetails', JSON.stringify({...form}))
        
//         if(form.password !== form.confirmPassword){
//           alert('Password do not match')
//         }else{
//             window.location = '/register'
//         }
        
//     }
//   return (
//     <div className='container'>
//         <Navreg/>
      
//         <div className='form-cta'>
//             <div className='form-box'>
//             <h2>ADMIN SIGNUP</h2>
//                 <form onSubmit={submitHandler}>
//                     <div className=' input_100'>
//                         <label>Full Name</label><br/>
//                         <input type='text'  name='fullName' onChange={handleChange} value={form.fullName}/>
                        
//                     </div>
//                     <div className='input_100'>
//                         <label>Email</label><br/>
//                         <input type="email" required name='email' onChange={handleChange}  value={form.email}/>
//                     </div>
//                     <div className='input_100'>
//                         <label>Password</label><br/>
//                         <input type='password'name='password' onChange={handleChange}  value={form.password}/>
//                     </div>
//                     <div className='input_100'>
//                         <label>Confirm Password</label><br/>
//                         <input type='password'  name='confirmPassword' onChange={handleChange}  value={form.confirmPassword}/>
//                     </div>
//                     <div className='input_submit'>    
//                         <button type='submit'>Sign Up</button>
//                     </div> 
//                 </form>
//             </div> 
//         </div>
//     </div>
        
//   )
// }

// export default SignUp
