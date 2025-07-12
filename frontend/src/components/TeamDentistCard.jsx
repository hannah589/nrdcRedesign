import React from 'react'
import '../pages/Team.css'

const TeamDentistCard = (props) => {
  return (
    <div>
      <div className="dentist-container">
        <div className="dentist-imgbox">
        <img src={props.img} alt={props.dentistName}/>
        </div>

        <div className="text">
          <h2 className="dentist-name-heading">{props.dentistName}</h2> 
          <h3 className="Dentist-subheading">{props.subheading}</h3>
          <h3  className="Dentist-subheading">
        {props.language}
        </h3>
        <p>
          {props.paragraph.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment> 
        ))}
      </p>
    </div>
  </div>
    </div>
  )
}

export default TeamDentistCard
