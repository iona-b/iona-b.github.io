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
        <h2 className="h2-standard resume-headings" id="Education" onClick={handleGetName} > Education </h2>
        <div className="resume-blurbs" id="Education" onClick={handleGetName} >
          <h3 className="titles" id="Education" onClick={handleGetName} >Software Engineering</h3>
          <h4 className="h4" id="Education" onClick={handleGetName} >Flatiron School</h4>
          <h5 className="h5" >San Francisco, USA</h5>
          <h5 className="h5" >2020</h5>
        </div>
      </div>

      <div className="resume-divs" id="WorkExperience" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings" id="WorkExperience" onClick={handleGetName} > Work Experience </h2>
        <div className="resume-blurbs"  id="WorkExperience" onClick={handleGetName} >
          <h3 className="titles" id="WorkExperience" onClick={handleGetName} >Catering Specialist</h3>
          <h4 className="h4" id="WorkExperience" onClick={handleGetName} >Market Hall Caterers</h4>
          <h5 className="h5" >Oakland, USA</h5>
          <h5 className="h5" >2019-2020</h5>
        </div>
      </div>

      <div className="resume-divs" id="VolunteerExperience" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings"id="VolunteerExperience" onClick={handleGetName} > Volunteer Experience </h2>
        <div className="resume-blurbs" id="VolunteerExperience" onClick={handleGetName} >
          <h3 className="titles" id="VolunteerExperience" onClick={handleGetName} >Volunteer</h3>
          <h4 className="h4" id="VolunteerExperience" onClick={handleGetName} >Cohen Bray House</h4>
          <h5 className="h5" >Oakland, USA</h5>
          <h5 className="h5" >2017-2018</h5>
        </div>
      </div>

      <div className="resume-divs" id="Skills" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings"id="Skills" onClick={handleGetName} > Skills </h2>
        <div className="resume-blurbs" id="Skills" onClick={handleGetName} >
          <h3 className="titles" id="Skills" onClick={handleGetName} >Coding</h3>
          <h4 id="Skills" onClick={handleGetName} > Ruby on Rails, JavaScript, React, Redux</h4>
        </div>
      </div>

    </div>
    
  );
  
}

export default Resume;