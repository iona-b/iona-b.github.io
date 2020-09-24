import React from 'react';
import ReactPlayer from 'react-player'
import AlwaysBalancedDemo from '../media/always-balanced-demo.mp4'

function FruitQuest() {

  return (

    <div className="containers project-containers">
      <ReactPlayer className="react-player"
        playing
        controls={true}
        url={[
          {src: AlwaysBalancedDemo, type: 'video/mp4'},
        ]}
      />
    </div>
    
  );
  
}

export default FruitQuest;