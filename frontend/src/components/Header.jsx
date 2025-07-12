import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from './Button';

function Header(){
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  function showSidebar() {
    setMobileDrawerOpen(true);
  }

  function closeSidebar() {
    setMobileDrawerOpen(false);
  }

  // Reset mobileDrawerOpen when the pathname changes
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="header_contact">
          <ul>
            <li>
              <div className="phone">
                  <span className="material-symbols-outlined">call</span>
                  <a href="tel:61-3-9578-5552">
                  (03) 9578 5552
                  </a>
              </div>
            </li>
            <li>
              <div className="location">
                  <span className="material-symbols-outlined">location_on</span>
                  <a
                  href="https://www.google.com/maps/place/North+Road+Dental+Clinic/@-37.9053465,145.0516743,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!2s687+North+Rd,+Carnegie+VIC+3163!2m2!1d145.0541897!2d-37.9053461!3m5!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!8m2!3d-37.9053508!4d145.0542546!16s%2Fg%2F11b6jhcc9w?entry=ttu"
                  target="_blank"
                  rel="noreferrer">
                  687 North Road, Carnegie VIC 3165
                  </a>
              </div>
            </li>
          </ul>
        </div>

        <nav id="desktop-nav">
          <Link to="/">
            <img
              id="navbar_logo"
              src="https://healthengine.com.au/photos/groups/grploc89215-logo-20220901110944.jpg"
              alt="North Road Dental Clinic logo"
            />
          </Link>

          <ul className="nav-links">
            <li className='active'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Team">Our Team</Link>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Services<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <Link to="/Clean">Scale & Clean</Link>
                  </li>
                  <li>
                    <Link to="/Mouthguard">Mouthguard & Splint</Link>
                  </li>
                  <li>
                    <Link to="/Whitening">Teeth Whitening</Link>
                  </li>
                  <li>
                    <Link to="/Filling">Filling</Link>
                  </li>
                  <li>
                    <Link to="/Fissure">Fissure Sealants</Link>
                  </li>
                  <li>
                    <Link to="/Extraction">Extraction</Link>
                  </li>
                  <li>
                    <Link to="/Root Canal">Root Canal</Link>
                  </li>
                  <li>
                    <Link to="/Crown">Crown, Veneer & Denture</Link>
                  </li>
                  <li>
                    <Link to="/Implant">Implant</Link>
                  </li>
                </div>
              </div>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Resources<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <Link to="/NewPtForm">New Patient Form</Link>
                  </li>
                  <li>
                    <Link to="/Accreditation">ADA Accreditation</Link>
                  </li>
                  <li>
                    <Link to="/InfectionControl">Prevention Infection Control</Link>
                  </li>
                  <li>
                    <Link to="/Cdbs">Children Dental Benefit Scheme</Link>
                  </li>
                  <li>
                    <Link to="/VGDS">VGDS, VEDS & VDS</Link>
                  </li>
                  <li>
                    <Link to="/VA">Veterans' Affair Dental</Link>
                  </li>
                </div>
              </div>
            </li>

            <li>
              <Link to="/Offers">Offers</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>

            
            
            
          </ul>


              <a
                href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1"
                className="secondary-btn"
              >
              <Button>
                Book Appointment
              </Button>
              </a>
              
        </nav>

        {/*mobile nav*/}
        <nav id="hamburger-nav">
          <Link to="/">
            <img
              id="navbar_logo"
              src="https://healthengine.com.au/photos/groups/grploc89215-logo-20220901110944.jpg"
              alt="North Road Dental Clinic logo"
              style={{height: "42px"}}
            />
          </Link>

          {mobileDrawerOpen && (
            <ul className="sidebar">
              <li className="close-box">
                <button onClick={closeSidebar} className="close-btn">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </li>

            <li className='active'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Team">Our Team</Link>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Services<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <Link to="/Clean">Scale & Clean</Link>
                  </li>
                  <li>
                    <Link to="/Mouthguard">Mouthguard & Splint</Link>
                  </li>
                  <li>
                    <Link to="/Whitening">Teeth Whitening</Link>
                  </li>
                  <li>
                    <Link to="/Filling">Filling</Link>
                  </li>
                  <li>
                    <Link to="/Fissure">Fissure Sealant</Link>
                  </li>
                  <li>
                    <Link to="/Extraction">Extraction</Link>
                  </li>
                  <li>
                    <Link to="/Root Canal">Root Canal</Link>
                  </li>
                  <li>
                    <Link to="/Crown">Crown, Veneer & Denture</Link>
                  </li>
                  <li>
                    <Link to="/Mouthguard">Mouthguard & Splint</Link>
                  </li>
                  <li>
                    <Link to="/Implant">Implant</Link>
                  </li>
                </div>
              </div>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Resources<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <Link to="/New-pt-form">New Patient Form</Link>
                  </li>
                  <li>
                    <Link to="/Accreditation">ADA Accreditation</Link>
                  </li>
                  <li>
                    <Link to="/Infection-control">Prevention Infection Control</Link>
                  </li>
                  <li>
                    <Link to="/Cdbs">Children Dental Benefit Scheme</Link>
                  </li>
                  <li>
                    <Link to="/VGDS">VGDS, VEDS & VDS</Link>
                  </li>
                  <li>
                    <Link to="/VA">Veterans' Affair Dental</Link>
                  </li>
                </div>
              </div>
            </li>

            <li>
              <Link to="/Offers">Offers</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            </ul>
          )}

          <div className="mobilebtn-container">
            <a href="tel:61-3-9578-5552" className="mobile-btn">
              <span className="material-symbols-outlined">call</span>Call
            </a>

            <a
              href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1"
              className="mobile-btn"
            >
              <span className="material-symbols-outlined">event</span>
              Book
            </a>

            <button onClick={showSidebar} className="mobile-menu-btn">
              <a className="mobile-btn">
                {' '}
                <span className="material-symbols-outlined">menu</span> Menu
              </a>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
