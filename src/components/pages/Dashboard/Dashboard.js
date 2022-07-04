import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'



const Dashboard = () => {
  return (
    <div className='dashboard'>    
      <Sidebar />
     <div className='dashboard_container'>
      <NavbarDash/>
        <section className='hero_main'>
          <div className='container'>
            <div className='hero_bg'>
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="..." class="d-block w-100" alt="..."/>
                    <h3>Hello</h3>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="..." class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
     </div>   
    </div>
   
    
  )
}

export default Dashboard
