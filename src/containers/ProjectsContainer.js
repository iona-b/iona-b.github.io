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

  componentDidMount() {
    this.props.handleForceUpdateFalse()
  }

  componentDidUpdate() {
    if (this.props.forceUpdate === true) {
      this.setState ({
        currentlyShowing: "None"
      })
      this.props.handleForceUpdateFalse()
    }
  }

  render () {

    return (

      <div className="one-second-animation" >

        {this.state.currentlyShowing === "None" ? 
          <div className="containers" id="projects-container" >
            <h2 className="h2" >Projects</h2>
            <Project handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
          :
          <div className="containers" id="projects-container" >
            <ShowProjectContainer currentlyShowing={this.state.currentlyShowing} handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
        }

      </div>
    );

  }


  
}

export default ProjectsContainer;