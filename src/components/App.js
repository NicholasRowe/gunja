import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";

import ContactUs from './Pages/ContactUs/ContactUs';
import headerImg from '../assets/img/header-2.png'
import skunkMan from '../assets/img/header.png'
import Footer from './Utilities/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">

        <div className='container'>
          <div className="row">
            <div className="col-lg-12">
              <img className="gunja-logo" src={headerImg} alt="logo" />
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src={skunkMan} alt="logo" />
              <div className='text-center'>
                <h1 className='mt-5'>Website Coming Soon</h1>
                <div className="footer-social  mt-30"> <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <Link to={'#'}><i className="fab fa-twitter"></i></Link>
                  <Link to={'#'}><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactUs />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
