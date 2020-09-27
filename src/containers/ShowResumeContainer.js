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
          <button className="buttons back-buttons" name="None" onClick={handleChangeCurrentlyShowing} >⇦</button>
          <Education  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "Skills" ? 
        <div className="components" >
          <button className="buttons back-buttons" name="None" onClick={handleChangeCurrentlyShowing} >⇦</button>
          <Skills  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "VolunteerExperience" ? 
        <div className="components" >
          <button className="buttons back-buttons" name="None" onClick={handleChangeCurrentlyShowing} >⇦</button>
          <VolunteerExperience  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "WorkExperience" ? 
        <div className="components" >
          <button className="buttons back-buttons" name="None" onClick={handleChangeCurrentlyShowing} >⇦</button>
          <WorkExperience  />
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowResumeContainer;