import React from 'react';
import ReactPlayer from 'react-player'
import AlwaysBalancedDemo from '../media/always-balanced-demo.mp4'

class FruitQuest extends React.Component {

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
            <h2 className="project-div-headers h2" >Fruit Quest</h2>
            <p className="p" id="about" >Description Coming Soon</p>
            {/* <p className="p" id="about" >Description Paragraph 2</p> */}
            {/* <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button> */}
            <a href="https://github.com/iona-b/fruit-quest-frontend"  rel="noopener noreferrer" target="_blank" >
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
                  {src: AlwaysBalancedDemo, type: 'video/mp4'},
                ]}
              />
            </div>
          </div>
        }
        
      </div>
      
    );
    
  }


  
}

export default FruitQuest;