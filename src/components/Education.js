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
      [event.target.name] : !this.state[event.target.name]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Education</h2>
          
          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >Software Engineering</h2>
            <h3 className="h3" >Flatiron School</h3>
            <h4 className="h4" >San Francisco, USA</h4>
            <h4 className="h4" >2020</h4>
            <button name="showFlatironSchool" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showFlatironSchool === false ? "+ more" : "- less"} </button>
            {this.state.showFlatironSchool === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Languages and Technologies: </p>
                <p className="resume-bullet-points indented" >• Ruby and Ruby on Rails</p>
                <p className="resume-bullet-points indented" >• SQL</p>
                <p className="resume-bullet-points indented" >• JavaScript, React, and Redux</p>
                <p className="resume-bullet-points indented" >• HTML and CSS</p>
                <br></br>
                <p className="resume-bullet-points" >• Projects:</p>
                <a href="https://github.com/iona-b/always-balanced-frontend" className="indented" >
                  <p className="resume-bullet-points indented" >• Always Balanced: A Ruby on Rails, React, and Redux application</p>
                </a>
                <a href="https://github.com/iona-b/fruit-quest-frontend" className="indented" >
                  <p className="resume-bullet-points indented" >• Fruit Quest: A Ruby on Rails and React application using the Phaser 3 game engine</p>
                </a>
                <a href="https://github.com/iona-b/gandr" className="indented" >
                  <p className="resume-bullet-points indented" >• Gandr: A Ruby on Rails and JavaScript application</p>
                </a>
                <a href="https://github.com/iona-b/brew-flight" className="indented" >
                  <p className="resume-bullet-points indented" >• Brew Flight: A Ruby on Rails application</p>
                </a>
                <a href="https://github.com/iona-b/indoubt" className="indented" >
                  <p className="resume-bullet-points indented" >• InDoubt: A Ruby Command Line Interface (CLI) application</p>
                </a>
                <br></br>
                <p className="resume-bullet-points" >• Additional Skills: </p>
                <p className="resume-bullet-points indented" >• Teamwork and Communication</p>
                <p className="resume-bullet-points indented" >• Independent Work</p>
                <p className="resume-bullet-points indented" >• Research</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >MaNaMa Archiving: Cultural and Modern Day Document Management</h2>
            <h3 className="h3" >Vrije Universiteit Brussel</h3>
            <h4 className="h4" >Brussels, Belgium</h4>
            <h4 className="h4" >2016-2017</h4>
            <button name="showVrijeUniversiteitBrussel" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showVrijeUniversiteitBrussel === false ? "+ more" : "- less"} </button>
            {this.state.showVrijeUniversiteitBrussel === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Archiving theory, history, and methodology.</p>
                <p className="resume-bullet-points" >• Information management and information systems, including EDRMS (Electronic Document and Records Management Systems), and process modelling.</p>
                <p className="resume-bullet-points" >• Archival law.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >Dutch</h2>
            <h3 className="h3" >Ghent University Centre for Language</h3>
            <h4 className="h4" >Ghent, Belgium</h4>
            <h4 className="h4" >2013-2014</h4>
            <button name="showUniversityCentreForLanguage" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityCentreForLanguage === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityCentreForLanguage === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Immersive course in the study of the Dutch language to a fluent level.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >MLitt Museum and Gallery Studies</h2>
            <h3 className="h3" >University of St Andrews</h3>
            <h4 className="h4" >St Andrews, UK</h4>
            <h4 className="h4" >2012-2013</h4>
            <button name="showUniversityOfStAndrews" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfStAndrews === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfStAndrews === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Exhibition Planning: As part of a team, I designed and created an exhibition at the prestigious British Golf Museum.</p>
                <p className="resume-bullet-points" >• Collections Management: Acquisition and disposal policies and practice; documentation including using computer databases; storage packing and handling; conservation; disaster preparedness and planning; security and insurance and collections-based research.</p>
                <p className="resume-bullet-points" >• Audiences and Management: Access and social inclusion policies; visitor studies, information and publications; learning and outreach facilities; exhibitions policies and organisation; display and interpretation; understanding the nature and roles of governing bodies; administration and project management; forward planning and evaluation; marketing, publicity and media relations; financial management and fundraising; personnel management, leadership and staff training; awareness of current issues, ethics and philosophy.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >MA History and Politics</h2>
            <h3 className="h3" >University of Glasgow</h3>
            <h4 className="h4" >Glasgow, UK</h4>
            <h4 className="h4" >2008-2012</h4>
            <button name="showUniversityOfGlasgow" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUniversityOfGlasgow === false ? "+ more" : "- less"} </button>
            {this.state.showUniversityOfGlasgow === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Study of both British and international history and politics.</p>
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