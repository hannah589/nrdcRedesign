import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import OpeningTime from './OpeningTime';

function Footer() {
  return (
    <>
      <footer>
        <hr></hr>
        <section className={styles.footer}>
          <div className={styles.footerBox} id="quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/Team"> Our Team</Link></li>
              <li><Link to="/NewPatientForm">New Patient Form</Link></li>
              <li><Link to="/PatientFeedback">Patient Feedback</Link></li>
              <li><Link to="/ChildDentalBenefitScheme">Child Dental Benefit Scheme</Link></li>
              <li><Link to="/GettingHere">Getting Here</Link></li>
              <li><Link to="/Offers">Offers</Link></li>
            </ul>
          </div>

          <div className={styles.footerBox} id="services">
            <h2>Services</h2>
            <ul>
              <li><Link to="/ScaleClean">Scale & Clean</Link></li>
              <li><Link to="/MouthguardSplint">Mouthguard & Splint</Link></li>
              <li><Link to="/TeethWhitening">Teeth Whitening</Link></li>
              <li><Link to="/Filling">Filling</Link></li>
              <li><Link to="/Extraction">Extraction</Link></li>
              <li><Link to="/RootCanal">Root Canal</Link></li>
              <li><Link to="/CrownVeneerDenture">Crown, Veneer, Denture</Link></li>
              <li><Link to="/Implants">Implant</Link></li>
            </ul>
          </div>

          <div className={styles.footerBox} >
            <h2>Opening Hours</h2>
            <OpeningTime/>
          
      </div>

          <div className={styles.footerBox}>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}id="footer-font" >
            <span className="material-symbols-outlined">call</span><p>(03) 9578 5552</p>
            </div>

            <div className={styles.contactInfo}id="footer-font">
            <span className="material-symbols-outlined">print</span><p>(03) 9578 5520</p>
            </div>

            <div className={styles.contactInfo} id="footer-font">
            <span className="material-symbols-outlined">mail</span><a href="mailto:info@northdental.com.au">info@northdental.com.au</a>
            </div>


            <div className={styles.contactInfo} id="footer-font">
            <span className="material-symbols-outlined">location_on</span>
            <a href="https://www.google.com/maps/place/North+Road+Dental+Clinic/@-37.9053465,145.0516743,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!2s687+North+Rd,+Carnegie+VIC+3163!2m2!1d145.0541897!2d-37.9053461!3m5!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!8m2!3d-37.9053508!4d145.0542546!16s%2Fg%2F11b6jhcc9w?entry=ttu" target="_blank" rel="noreferrer">
            <p>687 North Road, <br />Carnegie VIC 3163</p>
            </a>
            </div>

          </div>

          <div className={styles.footerBox} id="map">
            <h2>Getting here
              <span class="material-symbols-outlined" style={{fontSize: "16px"}}>arrow_forward</span>
            </h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12592.292952883494!2d145.0542546!3d-37.9053508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66bd6b7de0605%3A0x5b7587b8efa5d9e8!2sNorth%20Road%20Dental%20Clinic!5e0!3m2!1sen!2sau!4v1709376556364!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <hr/>

        <div className={styles.copyright_box}>
          <span className={styles.copyright}>© 2025 North Road Dental Clinic. All Rights Reserved</span>
        </div>

      </footer>

    
    </>
  );
}

export default Footer;

