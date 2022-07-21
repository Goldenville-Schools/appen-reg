import React from 'react'
import {Navigate, Outlet} from  'react-router-dom'

//Protected routes
const userAuth =()=>{
    let adminLogin = JSON.parse(localStorage.getItem('user'));
    return adminLogin;
}


const ProtectedRoutes = () => {
    const isAuth = userAuth();
  return isAuth ? <Outlet/> : <Navigate to='Signin/'/>
}

export default ProtectedRoutes
