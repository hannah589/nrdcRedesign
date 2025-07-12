import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Button from '../components/Button.jsx'

function Home(){
  return (
    <>
    
    <section id="hero" className={styles.heroContainer}>
      
        <div className="left" id="hero-content">
               <h1>Your Trusted Local Dentist</h1>
              <p> Comprehensive, compassionate dental services for families and individuals in Carnegie and the surrounding community</p>
              <p>Book today and smile with confidence.</p>
              <br/>

            <div>
              <div className='btn-container'>
                <Button>
                  <a href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1" >
                  <span className="material-symbols-outlined">event</span> Book Online</a> 
                </Button>
                
                <Button variant='secondary' >
                  <a href="tel:+61395785552" className="phone-button"><span className="material-symbols-outlined">call</span> (03) 9578 5552</a> 
                </Button>
              </div>
          </div>
        </div>   

      

        <div className="right" id="heroimage-container">
          <img className="hero-image" src="https://t4.ftcdn.net/jpg/00/01/27/75/240_F_1277521_jha6pDD6y68s6zrNtGmJKqrEl8NsPQ.jpg" alt="Family smiling"/>
        </div>

      

    
    </section>


    <section className="home-section" id="service">
      <h2 className='section-heading'><b>Why choose North Road Dental Clinic?</b></h2>

      
      <div className="service-container">

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>ADA Accredited Practice</h4>
            <p>Practice has achieved and undergone an assessment process that ensures our practice meets a high standard of safety and quality.</p>
            <div className="linkBox">
              <Link to="/Team" className="card-link">Find out more </Link><span>&gt;</span>
            </div>
        </div>

        <div className="service-card">
          <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1143 34.5352H5.86426C5.11835 34.5352 4.40296 34.8314 3.87552 35.3588C3.34807 35.8863 3.05176 36.6018 3.05176 37.3477V45.7852H17.1143V34.5352Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42.4268 34.5352H31.1768V45.7852H45.2393V37.3477C45.2393 36.6018 44.943 35.8863 44.4156 35.3588C43.8881 34.8314 43.1726 34.5352 42.4268 34.5352Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.3643 23.2852H19.9268C19.1808 23.2852 18.4655 23.5814 17.938 24.1088C17.4106 24.6363 17.1143 25.3518 17.1143 26.0977V45.7852H31.1768V26.0977C31.1768 25.3518 30.8805 24.6363 30.3531 24.1088C29.8256 23.5814 29.1101 23.2852 28.3643 23.2852Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.2236 8.51953C19.2236 9.82489 19.7422 11.0768 20.6651 11.9998C21.5882 12.9229 22.8401 13.4414 24.1455 13.4414C25.4509 13.4414 26.7028 12.9229 27.6259 11.9998C28.5488 11.0768 29.0674 9.82489 29.0674 8.51953C29.0674 7.21418 28.5488 5.96228 27.6259 5.03923C26.7028 4.11621 25.4509 3.59766 24.1455 3.59766C22.8401 3.59766 21.5882 4.11621 20.6651 5.03923C19.7422 5.96228 19.2236 7.21418 19.2236 8.51953Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30.2373 17.6601C29.486 16.7778 28.5518 16.0692 27.4998 15.5833C26.4475 15.0974 25.3025 14.8457 24.1435 14.8457C22.9846 14.8457 21.8395 15.0974 20.7875 15.5833C19.7353 16.0692 18.8012 16.7778 18.0498 17.6601" stroke="#DE3629" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M34.2256 21.1758C34.2256 22.4812 34.744 23.7331 35.6671 24.6562C36.5901 25.579 37.8421 26.0977 39.1475 26.0977C40.4528 26.0977 41.7046 25.579 42.6276 24.6562C43.5507 23.7331 44.0693 22.4812 44.0693 21.1758C44.0693 19.8704 43.5507 18.6185 42.6276 17.6955C41.7046 16.7725 40.4528 16.2539 39.1475 16.2539C37.8421 16.2539 36.5901 16.7725 35.6671 17.6955C34.744 18.6185 34.2256 19.8704 34.2256 21.1758Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M45.2393 30.3165C44.2273 29.1268 42.8886 28.2596 41.3889 27.8227C39.8893 27.3858 38.2944 27.3982 36.8018 27.8583" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.22168 21.1758C4.22168 22.4812 4.74025 23.7331 5.66327 24.6562C6.5863 25.579 7.8382 26.0977 9.14355 26.0977C10.4489 26.0977 11.7008 25.579 12.6239 24.6562C13.5469 23.7331 14.0654 22.4812 14.0654 21.1758C14.0654 19.8704 13.5469 18.6185 12.6239 17.6955C11.7008 16.7725 10.4489 16.2539 9.14355 16.2539C7.8382 16.2539 6.5863 16.7725 5.66327 17.6955C4.74025 18.6185 4.22168 19.8704 4.22168 21.1758Z" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.05176 30.3164C3.80476 29.4361 4.73916 28.729 5.79096 28.2436C6.84276 27.7582 7.9871 27.5058 9.14551 27.5039C9.93685 27.5045 10.7237 27.6233 11.4799 27.8564" stroke="#DE3629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          
            <h4>Highly Experienced Dentist</h4>
            <p>Qualified dentists with more than 12 years of experience. Providing high-quality dental care for you and your family.
            </p>
            <div className="linkBox">
              <Link to="/Team" className="card-link">Find out more</Link><span>></span>
            </div>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>Translator</h4>
            <p>Turkish & Portuguese translator avaliable. <br/> When booking your next appointment, please request Turkish or Portugese Dentist.</p>
            <div className="linkBox">
              <Link to="/Team" className="card-link">Find out more</Link><span>></span>
            </div>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
            <div className='service-content'>
            <h4>Accepts government dental vouchers</h4>
            <p> Accepts VEDS, VGDS & VDS vouchers entitled to patients, funded by the Victorian government.</p>
            </div>
            <div className="linkBox">
              <Link to="/VGDS" className="card-link">Find out more</Link><span>></span>
            </div>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
        
            <h4>Wheelchair Access</h4>
            <p>Practice meets Australian standards for wheelchair access.
            Door Openings 850mm minimum width for wheelchairs and handrail at entryway.
            </p>
            <div className="linkBox">
              <Link to="/Contact" className="card-link">Find out more</Link><span>></span>
            </div>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>Close to Public Transport</h4>
            <p>Easy access to public transport. <br/> 630 and 625 bus stops in front of practice. Close to Carnegie, Ormond and McKinnon train station. </p>
            <div className="linkBox">
              <Link to="/Contact" className="card-link">Find out more</Link><span>></span>
            </div>
        </div>
   
      </div>
      
    </section>
             
    <section className="home-section" id="providers-section">

      <div className="provider-logos">
            <div className="images-container">

              <a href="https://www.hcf.com.au/health-agenda/health-care/research-and-insights/dental-insurance-cover" title="Go to HCF dental cover webpage" target="_blank" className='logo'>
              <div className="image-container">
                <img src="https://www.erinafair.com.au/contentassets/14ad31f422a044b08a308b4c114fe5ec/square-logos-6-1.png?width=300&height=400&upscale=false&mode=max&quality=80" alt="HCF" width="210px" />
              </div>
              </a>

              <a href="https://www.nib.com.au/health-information/extras/nib-dental-care-centres" title="Go to nib's dental extras webpage" target="_blank" className='logo'>
              <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCS_U6OYE7ty3-pExmJS0oIprq_iFS9Cg20HpK4Fw3DM5TBElXYaJeplpgJQv6J8-PnI&usqp=CAU" alt="NIB" width="200px"  />
              </div>
              </a>

              <a href="https://www.cbhs.com.au/health-insurance/extras-cover/top-extras" title="Go to CBHS' dental extras webpage" target="_blank" className='logo'>
              <div className="image-container">
                <img src="https://membershealth.com.au/wp-content/uploads/2019/09/CBHS.svg" alt="CBHS" width="250px" />
              </div>
              </a>

            </div>
          
            <div className="smile">
            <a href="https://www.smile.com.au/" title="Go to Smile.com.au's webpage" target="_blank"> <img src="https://yarravilledental.com.au/wp-content/uploads/2023/03/Smile-Logo.png"/></a>
            </div>
      </div>

      <div className="content">
        <h2 className='section-heading' id="provider-heading"><b>Preferred providers</b></h2>
		    <p>
        We are preferred providers for HCF, NIB, <a href="https://www.nib.com.au/providers/">NIB partnered health funds</a>, CBHS & Smile.com.au.<br/>
        Get reduced and capped dental fees with the following health providers and claim on their following offers:
        </p>
        <br/><br/>
        <ul>
          <li><a href="https://www.hcf.com.au/health-agenda/health-care/research-and-insights/dental-insurance-cover " target="_blank" className="provider-link">HCF:</a> dental cover can claim one or two check-up and cleans per calendar year with no gap to pay. 
          </li>
          <li><a href="https://www.nib.com.au/health-information/extras/nib-dental-care-centres" target="_blank" className="provider-link">nib:</a> members with extras cover can access no gap check-up and cleans.
          </li>
          <li><a href="https://www.cbhs.com.au/health-insurance/extras-cover/top-extras" target="_blank" className="provider-link">CBHS:</a> Members with extras have a set benefit, cover limit on selected dental services.
          </li>
        <li><a href="https://www.smile.com.au/" target="_blank" className="provider-link">smile.com.au:</a> members can at recieve atleast 15% off every treatment. And benefit twice with select health funds.
        </li>
        <li>Price match Bupa & Medibank.</li>
        </ul>
      </div>
    </section>


    {/*CDBS*/}

      <section className="cdbs">
        <div className="cdbs-text">
          <h2 className='section-heading'><b>Child Dental Benefits Schedule (CDBS)</b></h2>
          <p>Child Dental Benefits Schedule (CDBS) covers part or the full cost of some general dental services for children if eligible.</p>

          <p>Eligible child must be all of the following:</p>
          <ul>
            <li>0 to 17 years old for at least one day that calendar year</li>
            <li>Eligible for Medicare</li>
            <li>Receive an eligible Australian government payment for at least once a year, or have a parent, career or guardian getting a payment for at least once a year.</li>
          </ul>
            
            <div className = "btn-container">

            <Link to="/Cdbs" className="btn">Learn more</Link>

            <a href="https://www.servicesaustralia.gov.au/eligibility-checks-for-child-dental-benefits-schedule?context=22426" rel="noopener noreferrer" target="_blank" className="secondary-btn">Check eligibility</a>
            </div>
        </div>

          <div className="about-img">
          <img src="./assets/CDBS.png" alt="Child Dental Benefit Scheme for eligible children"/>
          </div>
      </section>

    </>
  )
}

export default Home
