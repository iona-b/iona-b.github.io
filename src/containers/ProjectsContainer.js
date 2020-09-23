import React from 'react';


class ProjectsContainer extends React.Component{

  state = {
    currentlyShowing: 0
  }

  render () {

    return (

      <div>

        {this.state.currentlyShowing === 0 ? 
          <div className="containers" >
            <h2 className="h2" >Projects</h2>
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