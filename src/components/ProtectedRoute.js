import React from 'react'
import { Outlet, Navigate } from 'react-router'


const userAuth = ()=>{
    let adminDetail = JSON.parse(sessionStorage.getItem('AdminDetails'))
    return adminDetail
}
const ProtectedRoute = () => {
    const isAuth = userAuth()
      
    return isAuth ? <Outlet/> : <Navigate to= 'SignUp/' /> 
}

export default ProtectedRoute
