import React from 'react';

function Project(props) {

  const handleGetName = (event) => {
    let projectName = event.target.id
    handleChangeCurrentlyShowing(projectName)
  }

  const handleChangeCurrentlyShowing = (projectName) => {
    props.handleChangeCurrentlyShowing(projectName)
  }

  return (

    <div className="components" id="projects-grid">

      <div className="project-divs" id="AlwaysBalanced" onClick={handleGetName} >
        <h2 className="project-div-headers" id="AlwaysBalanced" >Always Balanced</h2>
        <p className="project-blurb" id="AlwaysBalanced" >Always Balanced is a React and Redux Application, with a Rails backend which allows users to create a personalised schedule with the aim of helping them to better balance their work and home life.</p>
        <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" id="AlwaysBalanced" />
      </div>

      <div className="project-divs" id="FruitQuest" onClick={handleGetName} >
        <h2 className="project-div-headers" id="FruitQuest" >Fruit Quest</h2>
        <p className="project-blurb" id="FruitQuest" >Fruit Quest is a game application created using a Rails backend and React frontend, in combination with the Phaser 3 game engine. The aim of the game is to collect as many pieces of fruit as possible. </p>
        <img src={require("../media/fruit-quest-screenshot.png")} alt='' className="project-screenshots" id="FruitQuest" />
      </div>

      <div className="project-divs" id="NFPH" onClick={handleGetName} >
        <h2 className="project-div-headers" id="NFPH" >Neurofibromatosis Personalized Health</h2>
        <p className="project-blurb" id="NFPH" >Neurofibromatosis Personalized Health is a symptom tracker application, created using a Rails backend and React frontend, for patients with NF2 created as part of the Children's Tumor Foundation Hack for NF.</p>
        <img src={require("../media/nfph-screenshot.png")} alt='' className="project-screenshots" id="NFPH" />
      </div>

      <div className="project-divs" id="Gandr" onClick={handleGetName} >
        <h2 className="project-div-headers" id="Gandr" >Gandr</h2>
        <p className="project-blurb" id="Gandr" >Gandr is a JavaScript Single Page Application, with a Rails backend which allows users to browse a range of beautiful artworks from the Metropolitan Museum of Art, and to add comments and likes to their favorite pieces.</p>
        <img src={require("../media/gandr-screenshot.png")} alt='' className="project-screenshots" id="Gandr" />
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">See more on GitHub</h2>
        <a href="https://github.com/iona-b" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/github-icon.svg")} alt='' className="icons" id="project-github-icon" />
        </a>
      </div>

    </div>
    
  );
  
}

export default Project;