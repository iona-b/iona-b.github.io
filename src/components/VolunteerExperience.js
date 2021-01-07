import React from 'react';

class VolunteerExperience extends React.Component {

  state = {
    showCodeTenderloin: false,
    showCohenBrayHouse: false,
    showNationalTrustForScotland: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (



      <div className="one-second-animation" >
  
          <h2 className="h2" >Volunteer Experience</h2>

          <div className="individual-resume-divs" id="showCodeTenderloin" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showCodeTenderloin" onClick={this.handleExpand} >Coding Tutor</h2>
            <h3 className="h3" id="showCodeTenderloin" onClick={this.handleExpand} >Code Tenderloin</h3>
            <h4 className="h4" id="showCodeTenderloin" onClick={this.handleExpand} >San Francisco, California, USA</h4>
            <h4 className="h4" id="showCodeTenderloin" onClick={this.handleExpand} >2020-Present</h4>
            <button id="showCodeTenderloin" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showCodeTenderloin === false ? "+ more" : "- less"} </button>
            {this.state.showCodeTenderloin === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Providing 1:1 sessions where I support the student by answering code-related questions, supplementing learning, and providing advice.</p>
                <p className="resume-bullet-points" >• Code Tenderloin is a workforce development non-profit that aims to secure long-term employment for underserved communities in San Francisco.</p>
              </div>
              :
              null
            }

          </div>
          
          <div className="individual-resume-divs" id="showCohenBrayHouse" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showCohenBrayHouse" onClick={this.handleExpand} >Volunteer</h2>
            <h3 className="h3" id="showCohenBrayHouse" onClick={this.handleExpand} >Cohen Bray House</h3>
            <h4 className="h4" id="showCohenBrayHouse" onClick={this.handleExpand} >Oakland, California, USA</h4>
            <h4 className="h4" id="showCohenBrayHouse" onClick={this.handleExpand} >2017-2018</h4>
            <button id="showCohenBrayHouse" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showCohenBrayHouse === false ? "+ more" : "- less"} </button>
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
  
          <div className="individual-resume-divs" id="showNationalTrustForScotland" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showNationalTrustForScotland" onClick={this.handleExpand} >Tour Guide</h2>
            <h3 className="h3" id="showNationalTrustForScotland" onClick={this.handleExpand} >National Trust for Scotland</h3>
            <h4 className="h4" id="showNationalTrustForScotland" onClick={this.handleExpand} >Glasgow, Scotland, UK</h4>
            <h4 className="h4" id="showNationalTrustForScotland" onClick={this.handleExpand} >2018-2019</h4>
            <button id="showNationalTrustForScotland" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showNationalTrustForScotland === false ? "+ more" : "- less"} </button>
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