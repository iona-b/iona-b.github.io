import React from 'react';
import ReactPlayer from 'react-player'
import NFPHDemo from '../media/nfph-demo.mp4'

class NFPH extends React.Component {

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
            <h2 className="h2 show-project-headers" >Neurofibromatosis Personalized Health</h2>
            <p className="p" id="about"  >When meeting with a patient mentor (NF2), we asked them what their concerns were when addressing the current resources available. The most pertinent was keeping track of their symptoms and being able to remember which provider to share these details with. Our patient mentor currently uses a note-taking app, however this leads to inconsistencies and incomplete notes. They also mentioned the limited available clinic resources for NF and added that hearing loss was one of the most important changes to track.</p>
            <p className="p" id="about" >We built an app specific to NF symptom tracking, with a built-in hearing test, so users have an at-home resource to measure hearing aptitude progression over time. Additionally, we aimed to open the platform to providers, giving them real-time updates and allowing them to quickly share feedback with their patients.</p>
            <p className="p" id="about" >Users now have a personalized entry-logging system and more autonomy over tracking their hearing progression and other symptoms. Neurofibromatosis Personalized Health also helps to build stronger relationships between doctors and patients and supports further research in treating neurofibromatosis.</p>
            <div>
              <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
              <a href="https://github.com/iona-b/nfph-frontend"  rel="noopener noreferrer" target="_blank" >
                <button className="buttons small-buttons" >GitHub</button>
              </a>
            </div>
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
                  {src: NFPHDemo, type: 'video/mp4'},
                ]}
              />
            </div>
          </div>
        }
        
      </div>
      
    );
    
  }


  
}

export default NFPH;