import React from 'react';
import AlwaysBalanced from '../components/AlwaysBalanced'
import FruitQuest from '../components/FruitQuest'
import Gandr from '../components/Gandr'

function ShowProjectContainer(props) {

  const handleChangeCurrentlyShowing = (event) => {
    let projectName = event.target.name
    props.handleChangeCurrentlyShowing(projectName)
  }

  return (

    <div className="one-second-animation outside-project-containers" >

      {props.currentlyShowing === "AlwaysBalanced" ? 
        <div className="components project-containers" >
          <AlwaysBalanced  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "FruitQuest" ? 
        <div className="components project-containers" >
          <FruitQuest  />
          <button className="buttons close-buttons" name="None" onClick={handleChangeCurrentlyShowing} >✖</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "Gandr" ? 
        <div className="components project-containers" >
          <Gandr  />
          <button className="buttons close-buttons" name="None" onClick={handleChangeCurrentlyShowing} >✖</button>
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowProjectContainer;