import React from 'react';

function Project() {

  return (

    <div className="components" id="projects-grid">
      <div className="project-divs">
        <h2 className="project-div-headers" >Always Balanced</h2>
        <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" />
      </div>
      <div className="project-divs">
        <h2 className="project-div-headers">Fruit Quest</h2>
        <img src={require("../media/fruit-quest-screenshot.png")} alt='' className="project-screenshots" />
      </div>
      <div className="project-divs">
        <h2 className="project-div-headers">Gandr</h2>
        <img src={require("../media/gandr-screenshot.png")} alt='' className="project-screenshots" />
      </div>
    </div>
    
  );
  
}

export default Project;