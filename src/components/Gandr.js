import React from 'react';
import ReactPlayer from 'react-player'
import AlwaysBalancedDemo from '../media/always-balanced-demo.mp4'

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
        <h2 className="project-div-headers" >Always Balanced</h2>
        {this.state.aboutShowing === true ? 
          <div>
            <button className="buttons demo-buttons" onClick={this.handleChangeShowing} >🎬</button>
            <p>Always Balanced is designed to improve your work-life balance while working from home. By simply adding a few details about yourself, you can create a personalised schedule which reflects how you like to work as well as how you like to relax. In today's world, it is vital that you take the time to delineate between work life and personal life, and Always Balanced aims to help you do just that.</p>
            <p>When creating a schedule, you can add tasks from your pre-existing tasks list, make new tasks, and select the relaxation categories you're interested in. We'll then generate a schedule for you, inclusive of the tasks you want to tackle, short breaks, longer breaks with suggested relaxation activities, and time off for lunch. By following this plan, you'll have ample time for both work and relaxation, and hopefully experience a better work-life balance.</p>
          </div>
          :
          <div>
            <button className="buttons demo-buttons"  onClick={this.handleChangeShowing} >📖</button>
            <ReactPlayer className="react-player"
              playing
              controls={true}
              url={[
                {src: AlwaysBalancedDemo, type: 'video/mp4'},
              ]}
            />
          </div>
        }
        
      </div>
      
    );
    
  }


  
}

export default Gandr;