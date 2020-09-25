import React from 'react';
import Project from '../components/Project'
import ShowProjectContainer from '../containers/ShowProjectContainer'

class ProjectsContainer extends React.Component{

  state = {
    currentlyShowing: "None"
  }

  handleChangeCurrentlyShowing = (projectName) => {
    this.setState ({
      currentlyShowing: projectName
    })
  }

  render () {

    return (

      <div id="projects-div" className="one-second-animation" >

        {this.state.currentlyShowing === "None" ? 
          <div className="containers" >
            <h2 className="h2" >Projects</h2>
            <Project handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
          :
          <div className="containers" >
            <ShowProjectContainer currentlyShowing={this.state.currentlyShowing} handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
        }

      </div>
    );

  }


  
}

export default ProjectsContainer;