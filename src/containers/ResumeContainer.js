import React from 'react';
import Resume from '../components/Resume'

class ResumeContainer extends React.Component {

  state = {
    currentlyShowing: "None"
  }

  handleChangeCurrentlyShowing = (projectName) => {
    this.setState ({
      currentlyShowing: projectName
    })
  }

  render() {

    return (

      <div>

        {this.state.currentlyShowing ?
          <div className="containers" >
            <h2 className="h2" >Résumé</h2>
            <Resume handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
          :
          <div className="containers" >

          </div>
        }


      </div>
      
    );

  }
  
}

export default ResumeContainer;