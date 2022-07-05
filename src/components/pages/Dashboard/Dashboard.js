import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'
import img2 from '../../assets/img4.jpg'
import img3 from '../../assets/img7.jpg'
import Carousel from 'react-bootstrap/Carousel'




const Dashboard = () => {
  return (
    <div className='dashboard'>    
      <Sidebar />
     <div className='dashboard_container'>
      <NavbarDash/>
        <section className='hero_main container-fluid'>
          <div className='container-fluid'>
            <div className='hero_bg'>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Third slide"
                />
                <div>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </div>
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section> 
     </div>   
    </div>
   
    
  )
}

export default Dashboard
