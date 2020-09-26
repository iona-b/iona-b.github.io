import React from 'react';

class WorkExperience extends React.Component {

  state = {
    showMarketHallCaterers: false,
    showSanFranciscoBoxOffice: false
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
            <h2 className="h2-standard" >Catering Specialist</h2>
            <h3 className="h3" >Market Hall Caterers</h3>
            <h4 className="h4" >2019-2020</h4>
            <button name="showMarketHallCaterers" onClick={this.handleExpand}>Show More</button>
            {this.state.showMarketHallCaterers === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Created faster inter-departmental order processing by automating reporting, therefore maximizing order management capabilities.</p>
                <p className="resume-bullet-points" >• Was key in managing a significant and high-pressure transformation in operations, thereby allowing continuation of business during the lockdown period.</p>
                <p className="resume-bullet-points" >• Coordinated events and orders in an accurate, thorough, organized, and efficient way which led to a significant decrease in order errors.</p>
                <p className="resume-bullet-points" >• Created tailored menus for clients, while remaining within the boundaries of the kitchen's capabilities.</p>
                <p className="resume-bullet-points" >• Communicated effectively with clients and colleagues to ensure the successful completion of catering events.</p>
                <p className="resume-bullet-points" >• Delivered high-quality customer service in a fast-paced environment.</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" >
            <h2 className="h2-standard" >Office Administrator and Accounting Assistant</h2>
            <h3 className="h3" >San Francisco Box Office</h3>
            <h4 className="h4" >2018-2019</h4>
            <button name="showSanFranciscoBoxOffice" onClick={this.handleExpand}>Show More</button>
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
  
      </div>
  
    );

  }
  
}

export default WorkExperience;