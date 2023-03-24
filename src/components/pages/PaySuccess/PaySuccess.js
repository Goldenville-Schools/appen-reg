import React from 'react'
import '../PaySuccess/PaySuccess.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/APEN.png'
import card from '../../assets/pay.png'
import Btn from '../../Button/Btn';


const PaySuccess = () => {
  return (
    <div className='main'>
      <Navbar bg="white"  id="nav_color" variant="dark">
        <Container>
          <Navbar.Brand className='nav_text' href="/Dashboard">
            <img
              alt=""
              src={logo}
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
            APEN 2022 <br/> <span className='confer'>CONFERENCE</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* This is the paySuccess card section */}
      <div className='card_sec'>
        <Container>
          <div className='card_cta'>
            <img src={card} className="pay_logo" alt="pay"/>
            <div className='card_title'>
              <h1>Thank You!</h1>
              <p>Payment done Successfully</p>
            </div>
            <p className='para'>You will be redirected to the dashboard page shortly or
                click here to return to dashboard page.
            </p>
              {/* Button component passed as props */}
              <Btn backTo="dashboard"/>
            </div>
        </Container>
      </div>

    </div>
  );
}

export default PaySuccess
