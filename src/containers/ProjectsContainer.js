import React from 'react';
import Project from '../components/Project'

class ProjectsContainer extends React.Component{

  state = {
    currentlyShowing: 0
  }

  render () {

    return (

      <div id="projects-div">

        {this.state.currentlyShowing === 0 ? 
          <div className="containers" >
            <h2 className="h2" >Projects</h2>
            <Project />
          </div>
          :
          <div>

          </div>
        }

      </div>
    );

  }


  
}

export default ProjectsContainer;