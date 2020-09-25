import React from 'react';

function Resume(props) {

  const handleGetName = (event) => {
    let resumeSection = event.target.id
    console.log(resumeSection)
    handleChangeCurrentlyShowing(resumeSection)
  }

  const handleChangeCurrentlyShowing = (resumeSection) => {
    props.handleChangeCurrentlyShowing(resumeSection)
  }

  return (

    <div className= "components" id="resume-div" >

      <div className="resume-divs" id="Education" onClick={handleGetName} >
        <p className="p resume-headings" id="Education" onClick={handleGetName} > Education </p>
        <div className="resume-blurbs" id="Education" onClick={handleGetName} >
          <p className="titles" id="Education" onClick={handleGetName} >Flatiron School</p>
          <p id="Education" onClick={handleGetName} >Software Engineering</p>
        </div>
      </div>

      <div className="resume-divs" id="WorkExperience" onClick={handleGetName} >
        <p className="p resume-headings"  id="WorkExperience" onClick={handleGetName} > Work Experience </p>
        <div className="resume-blurbs"  id="WorkExperience" onClick={handleGetName} >
          <p className="titles"  id="WorkExperience" onClick={handleGetName} >Market Hall Caterers</p>
          <p  id="WorkExperience" onClick={handleGetName} >Catering Specialist</p>
        </div>
      </div>

      <div className="resume-divs" id="VolunteerExperience" onClick={handleGetName} >
        <p className="p resume-headings" id="VolunteerExperience" onClick={handleGetName} > Volunteer Experience </p>
        <div className="resume-blurbs"  id="VolunteerExperience" onClick={handleGetName} >
          <p className="titles" id="VolunteerExperience" onClick={handleGetName} >Cohen Bray House</p>
          <p>Volunteer</p>
        </div>
      </div>

      <div className="resume-divs" id="Skills" onClick={handleGetName} >
        <p className="p resume-headings" id="Skills" onClick={handleGetName} > Skills </p>
        <div className="resume-blurbs" id="Skills" onClick={handleGetName} >
          <p className="titles" id="Skills" onClick={handleGetName} >Coding</p>
          <p id="Skills" onClick={handleGetName} > Ruby on Rails, JavaScript, React, Redux</p>
        </div>
      </div>

    </div>
    
  );
  
}

export default Resume;