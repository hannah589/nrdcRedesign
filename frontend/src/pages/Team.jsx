import React from 'react'
import TeamDentistCard from '../components/TeamDentistCard'


function Team(){

  const roseText = `Dr. Rose brings her extensive experience and skills gleaned over 29 years to North Road Dental Clinic. She is a member of ADA and ADAVB. She enjoys all aspects of general and family dentistry, including cosmetic dentistry. 
  \nShe has a special interest in endodontics, prosthodontics, periodontology, and recently implantology. She will be privileged to help you or your loved ones on any aspect of their dental health.
  \nShe has previously worked at Royal Dental Hospital of Melbourne, Monashlink Community Health Centre of Clayton, Whitehorse Community Health Service of Box Hill. In the last two positions she has also worked as a clinical demonstrator for University of Melbourne, Dental school mentoring final year students. Further, she has worked at various private practices located at Forest Hill, Burwood, Chadstone and Moorabbin.
  \nOutside of work, she is a busy mother of two and an avid cook specializing in Mediterranean cuisine.`

  const fabiolaText = `Dr. Fabiola graduated in 2003 with a Bachelor of Dental Science(Hons), and since then has worked as a dentist in public and private clinics, both in Australia and overseas. She is a gentle and caring dentist and enjoys working with adults and children. 
  \nDr. Fabiola is passionate to provide a positive experience to patients and has a strong focus in preventative dentistry to help patients maintain healthy teeth and gums long term. 
  \nOutside of work, she likes meeting with friends, cooking and yoga.`
  
  const aliText =` Dr Ali brings his extensive knowledge on dental science spanning 2 decades. He enjoys treating patients of all ages and needs, and has a special interest in oral surgery and implantology. 
  \nDr. Ali is our clinic's visiting surgeon for our implant patients.
  `
  
  return (
    <>
      <div className="wrapper">
          
        <div className="dentist-heading">
          <h1>Our Dentists</h1>
          <p className="headingText">Our team at North Road Dental Clinic comprise of highly-trained, experienced and friendly dental professionals, committed to ensuring you receive the best appropriate dental care for your needs.</p>
        </div> 

        <TeamDentistCard 
          img="assets/rose.png"
          dentistName="Dr. Rose Gulnaz Cemiloglu"
          subheading="Principal Dentist,  Female, Bachelor of Dental Surgery (BDS)"
          language="Speaks English, and Turkish"
          paragraph={roseText}
        />

        <TeamDentistCard 
          img="assets/fabiola.jpeg"
          dentistName="Dr. Fabiola"
          subheading="Dentist, Female, Bachelor of Dental Surgery (BDS)"
          language="Speaks English, and Portuguese"
          paragraph={fabiolaText}
        />

        <TeamDentistCard 
          img="assets/ali.jpg"
          dentistName="Dr. Aliakbar Safidroodi"
          subheading="Dentist, Male, Bachelor of Dental Surgery (BDS)"
          language="Speaks English"
          paragraph={aliText}
        />

      </div>
    </>
  )
}

export default Team
