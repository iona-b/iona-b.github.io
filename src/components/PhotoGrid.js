import React from 'react';

function PhotoGrid() {

  return (

    <div>

      <h2> Besides coding... </h2>

      <div className="components one-second-animation" id="photo-grid-div" >
          {/* Need to get Scotland image */}
          <div className="photo-grid-divs">
            <p className="photo-grid-text">I'm originally from Scotland.</p>
            <img src={require("../media/ghent.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I've lived in Ghent, Belgium.</p>
            <img src={require("../media/ghent.jpeg")} alt='' className="photo-grid-photos" />

          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I love to travel.</p>
            <img src={require("../media/france.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I moved to the Bay Area in 2017.</p>
            <img src={require("../media/golden-gate-bridge.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I love city trips.</p>
            <img src={require("../media/new-york.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I love nature in winter</p>
            <img src={require("../media/tahoe.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">and in summer</p>
            <img src={require("../media/bodega-bay.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">I enjoyed anything food-related</p>
            <img src={require("../media/pavlova.jpeg")} alt='' className="photo-grid-photos" />
          </div>

          <div className="photo-grid-divs">
            <p className="photo-grid-text">Text</p>
            <img src={require("../media/pavlova.jpeg")} alt='' className="photo-grid-photos" />
          </div>

      </div>
    
    </div>

  );
  
}

export default PhotoGrid;