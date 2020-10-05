import React from 'react';

class Education extends React.Component {

  state = {
    showFlatironSchool: false,
    showVrijeUniversiteitBrussel: false,
    showUniversityOfStAndrews: false,
    showUniversityCentreForLanguage: false,
    showUniversityOfGlasgow: false,
    showHermitageAcademy: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Education</h2>
          
          <div className="individual-resume-divs" id="showFlatironSchool" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showFlatironSchool" onClick={this.handleExpand} >Software Engineering</h2>
            <h3 className="h3" onClick={this.handleExpand} id="showFlatironSchool" >Flatiron School</h3>
            <h4 className="h4" onClick={this.handleExpand} id="showFlatironSchool" >San Francisco, California, USA</h4>
            <h4 className="h4" onClick={this.handleExpand} id="showFlatironSchool" >2020</h4>
            <button id="showFlatironSchool" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showFlatironSchool === false ? "+ more" : "- less"} </button>
            {this.state.showFlatironSchool === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >Languages and Technologies: </p>
                <p className="resume-bullet-points indented" >• Ruby and Ruby on Rails</p>
                <p className="resume-bullet-points indented" >• SQL</p>
                <p className="resume-bullet-points indented" >• JavaScript, React, and Redux</p>
                <p className="resume-bullet-points indented" >• HTML and CSS</p>
                <br></br>
                <p className="resume-bullet-points" >Projects:</p>
                <a href="https://github.com/iona-b/always-balanced-frontend" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Always Balanced: A Ruby on Rails, React, and Redux application </p>
                </a>
                <a href="https://github.com/iona-b/fruit-quest-frontend" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Fruit Quest: A Ruby on Rails and React application using the Phaser 3 game engine </p>
                </a>
                <a href="https://github.com/iona-b/gandr" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Gandr: A Ruby on Rails and JavaScript application </p>
                </a>
                <a href="https://github.com/iona-b/brew-flight" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> BrewFlight: A Ruby on Rails application </p>
                </a>
                <a href="https://github.com/iona-b/indoubt" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> InDoubt: A Ruby Command Line Interface (CLI) application </p>
                </a>
                <br></br>
                <p className="resume-bullet-points" >Additional Skills: </p>
                <p className="resume-bullet-points indented" >• Teamwork and Communication</p>
                <p className="resume-bullet-points indented" >• Independent Work</p>
                <p className="resume-bullet-points indented" >• Research</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" id="showVrijeUniversiteitBrussel" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showVrijeUniversiteitBrussel" onClick={this.handleExpand} >MaNaMa Archiving </h2>
            <h3 className="h3" id="showVrijeUniversiteitBrussel" onClick={this.handleExpand} >Vrije Universiteit Brussel</h3>
            <h4 className="h4" id="showVrijeUniversiteitBrussel" onClick={this.handleExpand} >Brussels, Belgium</h4>
            <h4 className="h4" id="showVrijeUniversiteitBrussel" onClick={this.handleExpand} >2016-2017</h4>
            <button id="showVrijeUniversiteitBrussel" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showVrijeUniversiteitBrussel === false ? "+ more" : "- less"} </button>
            {this.state.showVrijeUniversiteitBrussel === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Archiving theory, history, and methodology.</p>
                <p className="resume-bullet-points" >• Information management and information systems, including EDRMS (Electronic Document and Records Management Systems), and process modelling.</p>
                <p className="resume-bullet-points" >• Archival law.</p>
                <br></br>
                <p className="resume-bullet-points" >* Courses completed, dissertation pending.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showUniversityCentreForLanguage" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showUniversityCentreForLanguage" onClick={this.handleExpand} >Dutch</h2>
            <h3 className="h3" id="showUniversityCentreForLanguage" onClick={this.handleExpand} >Ghent University Centre for Language</h3>
            <h4 className="h4" id="showUniversityCentreForLanguage" onClick={this.handleExpand} >Ghent, Flanders, Belgium</h4>
            <h4 className="h4" id="showUniversityCentreForLanguage" onClick={this.handleExpand} >2013-2014</h4>
            <button id="showUniversityCentreForLanguage" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityCentreForLanguage === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityCentreForLanguage === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Successfully completed an immersive course in the study of the Dutch language to a fluent level.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showUniversityOfStAndrews" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showUniversityOfStAndrews" onClick={this.handleExpand} >MLitt Museum and Gallery Studies</h2>
            <h3 className="h3" id="showUniversityOfStAndrews" onClick={this.handleExpand} >University of St Andrews</h3>
            <h4 className="h4" id="showUniversityOfStAndrews" onClick={this.handleExpand} >St Andrews, Scotland, UK</h4>
            <h4 className="h4" id="showUniversityOfStAndrews" onClick={this.handleExpand} >2012-2013</h4>
            <button id="showUniversityOfStAndrews" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfStAndrews === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfStAndrews === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >Exhibition Planning:</p>
                <p className="resume-bullet-points indented" >• Designed and created an exhibition at the prestigious British Golf Museum in order to further knowledge and research of the role of women in the history of golf.</p>
                <br></br>
                <p className="resume-bullet-points" >Collections Management: </p>
                <p className="resume-bullet-points indented" >• Acquisition and disposal policies and practice. </p>
                <p className="resume-bullet-points indented" >• Documentation including using computer databases. </p>
                <p className="resume-bullet-points indented" >• Storage packing and handling. </p>
                <p className="resume-bullet-points indented" >• Conservation. </p>
                <p className="resume-bullet-points indented" >• Disaster preparedness and planning. </p>
                <p className="resume-bullet-points indented" >• Security and insurance and collections-based research. </p>
                <br></br>
                <p className="resume-bullet-points" >• Audiences and Management: </p>
                <p className="resume-bullet-points indented" >• Access and social inclusion policies. </p>
                <p className="resume-bullet-points indented" >• Visitor studies, information and publications. </p>
                <p className="resume-bullet-points indented" >• Learning and outreach facilities. </p>
                <p className="resume-bullet-points indented" >• Exhibitions policies and organisation. </p>
                <p className="resume-bullet-points indented" >• Display and interpretation. </p>
                <p className="resume-bullet-points indented" >• Understanding the nature and roles of governing bodies. </p>
                <p className="resume-bullet-points indented" >• Administration and project management. </p>
                <p className="resume-bullet-points indented" >• Forward planning and evaluation. </p>
                <p className="resume-bullet-points indented" >• Marketing, publicity and media relations. </p>
                <p className="resume-bullet-points indented" >• Financial management and fundraising. </p>
                <p className="resume-bullet-points indented" >• Personnel management, leadership and staff training. </p>
                <p className="resume-bullet-points indented" >• Awareness of current issues, ethics and philosophy. </p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showUniversityOfGlasgow" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showUniversityOfGlasgow" onClick={this.handleExpand} >MA History and Politics</h2>
            <h3 className="h3" id="showUniversityOfGlasgow" onClick={this.handleExpand} >University of Glasgow</h3>
            <h4 className="h4" id="showUniversityOfGlasgow" onClick={this.handleExpand} >Glasgow, Scotland, UK</h4>
            <h4 className="h4" id="showUniversityOfGlasgow" onClick={this.handleExpand} >2008-2012</h4>
            <button id="showUniversityOfGlasgow" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfGlasgow === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfGlasgow === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Studied both British and international history and politics and in the process improved research and problem-solving skills, communication and presentation abilities, and time management.</p>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default Education;