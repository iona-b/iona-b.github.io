import React from 'react';
import AlwaysBalanced from '../components/AlwaysBalanced'
import FruitQuest from '../components/FruitQuest'
import Gandr from '../components/Gandr'

function ShowProjectContainer(props) {

  return (

    <div className="components" >

      {props.currentlyShowing === "AlwaysBalanced" ? 
        <div className="containers" >
          <AlwaysBalanced  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "FruitQuest" ? 
        <div className="containers" >
          <FruitQuest  />
        </div>
        :
        null
      }

      {props.currentlyShowing === "Gandr" ? 
        <div className="containers" >
          <Gandr  />
        </div>
        :
        null
      }

    </div>
    
  );
  
}

export default ShowProjectContainer;