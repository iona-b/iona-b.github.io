import React from 'react';
import Education from '../components/Education'
import Skills from '../components/Skills'
import VolunteerExperience from '../components/VolunteerExperience'
import WorkExperience from '../components/WorkExperience'

function ShowResumeContainer(props) {

  return (

    <div className="one-second-animation full-resume-divs" >

      {props.currentlyShowing === "Education" ? 
        <div className="components" >
          <Education  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "Skills" ? 
        <div className="components" >
          <Skills  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "VolunteerExperience" ? 
        <div className="components" >
          <VolunteerExperience  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "WorkExperience" ? 
        <div className="components" >
          <WorkExperience  />
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowResumeContainer;