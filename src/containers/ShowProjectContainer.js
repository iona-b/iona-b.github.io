import React from 'react';
import AlwaysBalanced from '../components/AlwaysBalanced'
import FruitQuest from '../components/FruitQuest'
import Gandr from '../components/Gandr'
import NFPH from '../components/NFPH'

function ShowProjectContainer(props) {

  return (

    <div className="one-second-animation show-project-container" >

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
        </div>
        :
        null
      }

      {props.currentlyShowing === "Gandr" ? 
        <div className="components project-containers" >
          <Gandr  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "NFPH" ? 
        <div className="components project-containers" >
          <NFPH  />
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowProjectContainer;