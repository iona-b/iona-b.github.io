import React from 'react';
import ReactPlayer from 'react-player'
import FruitQuestDemo from '../media/fruit-quest-demo.mp4'

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
            <p className="p" id="about" >Fruit Quest is a game application created using a Ruby on Rails backend and React frontend, in combination with the Phaser 3 game engine. Users can create a profile and play any of the four levels available. The aim of the game is to collect as many pieces of fruit as possible before the timer reaches 0. Users can view their personal high scores and total scores on their profile page, and can also make their way onto the leaderboard.</p>
            <br></br>
            <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
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
                  {src: FruitQuestDemo, type: 'video/mp4'},
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