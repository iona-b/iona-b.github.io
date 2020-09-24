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
        <p className="project-blurb" >Always Balanced is a React Application, with a Rails backend which allows users to create a personalised schedule with the aim of helping them to better balance their work and home life.</p>
        <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" name="AlwaysBalanced" onClick={handleChangeCurrentlyShowing} />
        <button className="buttons" name="AlwaysBalanced" onClick={handleChangeCurrentlyShowing} >+ expand</button>
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Fruit Quest</h2>
        <p className="project-blurb" >Fruit Quest is an game application created using a Rails backend and React frontend, in combination with the Phaser 3 game engine. The aim of the game is to collect as many pieces of fruit as possible. </p>
        <img src={require("../media/fruit-quest-screenshot.png")} alt='' className="project-screenshots" name="FruitQuest" onClick={handleChangeCurrentlyShowing}/>
        <button className="buttons" name="FruitQuest"  onClick={handleChangeCurrentlyShowing} >+ expand</button>
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Gandr</h2>
        <p className="project-blurb" >gandr is a JavaScript Single Page Application, with a Rails backend which allows users to browse a range of beautiful artworks from the Metropolitan Museum of Art, and to add comments and likes to their favorite pieces.</p>
        <img src={require("../media/gandr-screenshot.png")} alt='' className="project-screenshots" name="Gandr" onClick={handleChangeCurrentlyShowing}/>
        <button className="buttons" name="Gandr" onClick={handleChangeCurrentlyShowing} >+ expand</button>
      </div>

      <div className="project-divs">
        <h2 className="project-div-headers">Coming Soon</h2>
      </div>

    </div>
    
  );
  
}

export default Project;