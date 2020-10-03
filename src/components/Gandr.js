import React from 'react';
import ReactPlayer from 'react-player'
import GandrDemo from '../media/gandr-demo.mp4'

class Gandr extends React.Component {

  state = {
    aboutShowing: true
  }

  handleChangeShowing = () => {
    this.setState ({
      aboutShowing: !this.state.aboutShowing
    })
  }

  render () {

    return (

      <div className="one-second-animation" >
        {this.state.aboutShowing === true ? 
          <div>
            <h2 className="project-div-headers h2" >Gandr</h2>
            <p className="p" id="about" >Gandr is a JavaScript Single Page Application, with a Rails backend which allows users to browse a range of beautiful artworks from the Metropolitan Museum of Art, and to add comments and likes to their favorite pieces.</p>
            <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
            <a href="https://github.com/haleighdalke/gandr"  rel="noopener noreferrer" target="_blank" >
              <button className="buttons small-buttons" >GitHub</button>
            </a>
          </div>
          :
          <div className="video-player-background">
            <button className="buttons close-buttons" onClick={this.handleChangeShowing} >✖</button>
            <div className="video-containers" >
              <ReactPlayer className="react-player"
                playing
                controls={true}
                wrapper={"video-containers"}
                url={[
                  {src: GandrDemo, type: 'video/mp4'},
                ]}
              />
            </div>
          </div>
        }
        
      </div>
      
    );
    
  }


  
}

export default Gandr;