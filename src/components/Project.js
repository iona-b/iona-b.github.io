import React from 'react';

function Project(props) {

  const handleChangeCurrentlyShowing = (event) => {
    let projectName = event.target.name
    props.handleChangeCurrentlyShowing(projectName)
  }

  return (

    <div className="components" id="projects-grid">

      <div className="project-divs">
        <h2 className="project-div-headers" >Always Balanced</h2>
        <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" name="AlwaysBalanced" onClick={handleChangeCurrentlyShowing} />
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Fruit Quest</h2>
        <img src={require("../media/fruit-quest-screenshot.png")} alt='' className="project-screenshots" name="FruitQuest" onClick={handleChangeCurrentlyShowing}/>
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Gandr</h2>
        <img src={require("../media/gandr-screenshot.png")} alt='' className="project-screenshots" name="Gandr" onClick={handleChangeCurrentlyShowing}/>
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Coming Soon</h2>
      </div>

    </div>
    
  );
  
}

export default Project;