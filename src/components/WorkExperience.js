import React from 'react';

class WorkExperience extends React.Component {

  state = {
    showMarketHallCaterers: false,
    showSanFranciscoBoxOffice: false,
    showBerlitz: false,
    showAMSAB: false,
    showMuseumOfEdinburgh: false,
    showStudentRepresentativeCouncil: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.name] : !this.state[event.target.name]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Work Experience</h2>
          
          <div className="individual-resume-divs" >
            
            <h2 className="h2-standard individual-resume-divs-headers" >Catering Specialist</h2>
            <h3 className="h3" >Market Hall Caterers</h3>
            <h4 className="h4" >Oakland, California, USA</h4>
            <h4 className="h4" >2019-2020</h4>
            <button name="showMarketHallCaterers" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showMarketHallCaterers === false ? "+ more" : "- less"} </button>
            {this.state.showMarketHallCaterers === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Created faster inter-departmental order processing by automating reporting, thereby maximizing order management capabilities.</p>
                <p className="resume-bullet-points" >• Was key in managing a significant and high-pressure transformation in operations, therefore allowing continuation of business during the lockdown period.</p>
                <p className="resume-bullet-points" >• Coordinated events and orders in an accurate, thorough, organized, and efficient way which led to a significant decrease in order errors.</p>
                <p className="resume-bullet-points" >• Created tailored menus for clients, while remaining within the boundaries of the kitchen's capabilities.</p>
                <p className="resume-bullet-points" >• Communicated effectively with clients and colleagues to ensure the successful completion of catering events.</p>
                <p className="resume-bullet-points" >• Delivered high-quality customer service in a fast-paced environment to optimize client experience.</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Office Administrator and Accounting Assistant</h2>
            <h3 className="h3" >San Francisco Box Office</h3>
            <h4 className="h4" >San Francisco, California, USA</h4>
            <h4 className="h4" >2018-2019</h4>
            <button name="showSanFranciscoBoxOffice" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showSanFranciscoBoxOffice === false ? "+ more" : "- less"} </button>
            {this.state.showSanFranciscoBoxOffice === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Managed a multi-million dollar inventory, including buying, pricing, and selling, in order to maximize profit.</p>
                <p className="resume-bullet-points" >• Lead the transition from PDF tickets to QR-based mobile tickets, and so facilitated a more efficient buying and selling process.</p>
                <p className="resume-bullet-points" >• Handled accounting tasks, including creation of purchase orders and invoices, payment management, bank reconciliations, and payroll, in a detail-oriented and organized way, thus enabling effective functioning of the business.</p>
                <p className="resume-bullet-points" >• Communicated effectively and was the main point of contact for all B2B relationships.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Language Coach</h2>
            <h3 className="h3" >Berlitz</h3>
            <h4 className="h4" >Ghent, Flanders, Belgium</h4>
            <h4 className="h4" >2014-2017</h4>
            <button name="showBerlitz" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showBerlitz === false ? "+ more" : "- less"} </button>
            {this.state.showBerlitz === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Created audience-appropriate lesson plans based on client assessment and feedback in order to optimize students' learning experience and capabilities.</p>
                <p className="resume-bullet-points" >• Completed related administrative tasks to a high standard in order to improve the fluency of lessons.</p>
                <p className="resume-bullet-points" >• Worked in a culturally-sensitive way so as to improve the experience of international clients.</p>
                <p className="resume-bullet-points" >• Utilized language and writing skills to translate academic and business documents.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Student Intern</h2>
            <h3 className="h3" >AMSAB Institute for Social History</h3>
            <h4 className="h4" >Ghent, Flanders, Belgium</h4>
            <h4 className="h4" >2016-2017</h4>
            <button name="showAMSAB" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showAMSAB === false ? "+ more" : "- less"} </button>
            {this.state.showAMSAB === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Utilized archiving skills to effectively plan and archive a professoral collection.</p>
                <p className="resume-bullet-points" >• Used language and writing skills to translate documents for publication.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Student Intern</h2>
            <h3 className="h3" >Museum of Edinburgh</h3>
            <h4 className="h4" >Edinburgh, Scotland, United Kingdom</h4>
            <h4 className="h4" >2012-2013</h4>
            <button name="showMuseumOfEdinburgh" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showMuseumOfEdinburgh === false ? "+ more" : "- less"} </button>
            {this.state.showMuseumOfEdinburgh === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Used conservation knowledge to correctly and safely handle a variety of historical objects.</p>
                <p className="resume-bullet-points" >• Marked and accessioned books, clothing, metal, and wooden objects in a non-permanent way, according to current museum standards.</p>
                <p className="resume-bullet-points" >• Completed basic conservation tasks including cleaning and condition checking to ensure the continued preservation of objects.</p>
                <p className="resume-bullet-points" >• Learned about different systems of museum governance in order to better understand operations.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" >
            <h2 className="h2-standard individual-resume-divs-headers" >Tour Guide</h2>
            <h3 className="h3" >University of Glasgow Student Representative Council</h3>
            <h4 className="h4" >Glasgow, Scotland, United Kingdom</h4>
            <h4 className="h4" >2011-2012</h4>
            <button name="showStudentRepresentativeCouncil" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showStudentRepresentativeCouncil === false ? "+ more" : "- less"} </button>
            {this.state.showStudentRepresentativeCouncil === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Learned about the history of the University of Glasgow so as to be able to give interesting and informative tours.</p>
                <p className="resume-bullet-points" >• Adapted tour style in order to be able to cater to both large and small groups.</p>
                <p className="resume-bullet-points" >• Conducted historical research using the University of Glasgow archival services and developed new plans for specialized tours.</p>
                <p className="resume-bullet-points" >• Gathered feedback so as to continually improve tours and visitor experience.</p>
                <p className="resume-bullet-points" >• Participated in training new tour guides.</p>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default WorkExperience;