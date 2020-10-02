import React from 'react';
import About from '../components/About'
import PhotoGrid from '../components/PhotoGrid'

class AboutContainer extends React.Component {

  state = {
    currentlyShowing: "About"
  }

  handleShowingChange = (event) => {
    this.setState ({
      currentlyShowing: event.target.name
    })
  }

  componentDidMount() {
    this.props.handleForceUpdateFalse()
  }

  componentDidUpdate() {
    if (this.props.forceUpdate === true) {
      this.setState ({
        currentlyShowing: "About"
      })
      this.props.handleForceUpdateFalse()
    }
  }

  render() {

    return (

      <div className="containers one-second-animation" id="about-container">
          <h2 className="h2" >Hello!</h2>
          {this.state.currentlyShowing === "About"
            ?
            <div>
              <About />
              {/* <button className="buttons about-buttons" name="More" onClick={this.handleShowingChange} >Besides Coding...</button> */}
            </div>
            : 
            <div>
              <PhotoGrid />
            </div>
          }
      </div>
      
    );

  }

  
}

export default AboutContainer;