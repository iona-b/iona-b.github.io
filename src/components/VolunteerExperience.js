import React from 'react';

class VolunteerExperience extends React.Component {

  state = {
    showCohenBrayHouse: false,
    showNationalTrustForScotland: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.name] : !this.state[event.target.name]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Volunteer Experience</h2>
          
          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Volunteer</h2>
            <h3 className="h3" >Cohen Bray House</h3>
            <h4 className="h4" >Oakland, California, USA</h4>
            <h4 className="h4" >2017-2018</h4>
            <button name="showCohenBrayHouse" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showCohenBrayHouse === false ? "+ more" : "- less"} </button>
            {this.state.showCohenBrayHouse === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Photographed and cataloged collections to improve access to objects, thereby facilitating historical research.</p>
                <p className="resume-bullet-points" >• Assisted with fundraising events to increase income vital to the continued functioning of the house.</p>
                <p className="resume-bullet-points" >• Used museum education and experience to effectively complete general curatorial duties.</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Tour Guide</h2>
            <h3 className="h3" >National Trust for Scotland</h3>
            <h4 className="h4" >Glasgow, Scotland, UK</h4>
            <h4 className="h4" >2018-2019</h4>
            <button name="showNationalTrustForScotland" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showNationalTrustForScotland === false ? "+ more" : "- less"} </button>
            {this.state.showNationalTrustForScotland === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Endorsed the National Trust for Scotland and recommended other attractions in the area in order to increase visitor numbers.</p>
                <p className="resume-bullet-points" >•  Learned more about the history of the House and Glasgow so as to be able to answer visitors' queries in a clear and informative way and thereby improve their experience and understanding of local history.</p>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default VolunteerExperience;