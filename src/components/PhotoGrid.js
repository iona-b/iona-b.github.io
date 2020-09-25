import React from 'react';

function PhotoGrid() {

  return (

    <div className="components one-second-animation" id="photo-grid-div" >
        {/* Need to get Scotland image */}
        <img src={require("../media/ghent.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/ghent.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/france.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/golden-gate-bridge.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/new-york.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/tahoe.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/bodega-bay.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/pavlova.jpeg")} alt='' className="photo-grid-photos" />
        <img src={require("../media/pavlova.jpeg")} alt='' className="photo-grid-photos" />
    </div>
    
  );
  
}

export default PhotoGrid;