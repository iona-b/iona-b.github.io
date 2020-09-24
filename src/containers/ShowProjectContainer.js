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

    <div >

      {props.currentlyShowing === "AlwaysBalanced" ? 
        <div className="components project-containers" >
          <AlwaysBalanced  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "FruitQuest" ? 
        <div className="components project-containers" >
          <FruitQuest  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

      {props.currentlyShowing === "Gandr" ? 
        <div className="components project-containers" >
          <Gandr  />
          <button className="buttons" name="None" onClick={handleChangeCurrentlyShowing} >back</button>
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowProjectContainer;