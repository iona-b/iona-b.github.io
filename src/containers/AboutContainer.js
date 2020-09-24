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

      <div className="containers" id="about-container">
          <h2 className="h2" >Hello!</h2>
          {this.state.showing === "About"
            ?
            <div>
              <button className="buttons about-buttons" name="More" onClick={this.handleShowingChange} >More</button>
              <About />
            </div>
            : 
            <div>
              <button className="buttons about-buttons" name="About" onClick={this.handleShowingChange}  >About</button>
              <PhotoGrid />
            </div>
          }
      </div>
      
    );

  }

  
}

export default AboutContainer;