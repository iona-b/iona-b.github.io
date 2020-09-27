import React from 'react';
import About from '../components/About'
import PhotoGrid from '../components/PhotoGrid'

class AboutContainer extends React.Component {

  state = {
    showing: "About"
  }

  handleShowingChange = (event) => {
    this.setState ({
      showing: event.target.name
    })
    console.log(this.state)
  }

  render() {

    return (

      <div className="containers one-second-animation" id="about-container">
          <h2 className="h2" >Hello!</h2>
          {this.state.showing === "About"
            ?
            <div>
              <About />
              <button className="buttons about-buttons" name="More" onClick={this.handleShowingChange} >Still curious?</button>
            </div>
            : 
            <div>
              <PhotoGrid />
              <button className="buttons about-buttons" name="About" onClick={this.handleShowingChange}  >About Me</button>
            </div>
          }
      </div>
      
    );

  }

  
}

export default AboutContainer;