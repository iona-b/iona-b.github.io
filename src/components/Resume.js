import React from 'react';

function Resume() {

  return (

    <div className= "components" id="resume-div" >

      <div className="resume-divs" >
        <p className="p"> Education </p>
        <p>Flatiron School: Software Engineering</p>
        <p className="expand" > + expand </p>
      </div>

      <div className="resume-divs" >
        <p className="p"> Work Experience </p>
        <p>Market Hall Caterers: Catering Specialist </p>
        <p className="expand" > + expand </p>
      </div>

      <div className="resume-divs" >
        <p className="p"> Volunteer Experience </p>
        <p>Cohen Bray House</p>
        <p className="expand" > + expand </p>
      </div>

      <div className="resume-divs" >
        <p className="p"> Skills </p>
        <p> Ruby on Rails, JavaScript, React, Redux</p>
        <p className="expand" > + expand </p>
      </div>

    </div>
    
  );
  
}

export default Resume;