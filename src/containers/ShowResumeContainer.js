import React from 'react';
import Education from '../components/Education'
import Skills from '../components/Skills'
import VolunteerExperience from '../components/VolunteerExperience'
import WorkExperience from '../components/WorkExperience'

function ShowResumeContainer(props) {

  const handleChangeCurrentlyShowing = (event) => {
    let projectName = event.target.name
    props.handleChangeCurrentlyShowing(projectName)
  }

  return (

    <div className="one-second-animation full-resume-divs" >

      {props.currentlyShowing === "Education" ? 
        <div className="components" >
          <Education  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "Skills" ? 
        <div className="components" >
          <Skills  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "VolunteerExperience" ? 
        <div className="components" >
          <VolunteerExperience  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "WorkExperience" ? 
        <div className="components" >
          <WorkExperience  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowResumeContainer;