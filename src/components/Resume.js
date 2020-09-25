import React from 'react';

function Resume() {

  return (

    <div className= "components" id="resume-div" >

      <div className="resume-divs" >
        <p className="p resume-headings"> Education </p>
        <div className="resume-blurbs" >
          <p className="titles" >Flatiron School</p>
          <p>Software Engineering</p>
        </div>
      </div>

      <div className="resume-divs" >
        <p className="p resume-headings"> Work Experience </p>
        <div className="resume-blurbs" >
          <p className="titles" >Market Hall Caterers</p>
          <p>Catering Specialist</p>
        </div>
      </div>

      <div className="resume-divs" >
        <p className="p resume-headings"> Volunteer Experience </p>
        <div className="resume-blurbs" >
          <p className="titles" >Cohen Bray House</p>
          <p>Volunteer</p>
        </div>
      </div>

      <div className="resume-divs" >
        <p className="p resume-headings"> Skills </p>
        <div className="resume-blurbs" >
          <p className="titles" >Coding</p>
          <p> Ruby on Rails, JavaScript, React, Redux</p>
        </div>
      </div>

    </div>
    
  );
  
}

export default Resume;