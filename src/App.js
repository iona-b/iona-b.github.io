import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import Contact from './containers/ContactContainer'
import NotFound from './components/NotFound'

class App extends React.Component {

  state = {
    isMobile: false,
    showMenu: false
  }

  componentDidMount() {
    if (window.innerWidth <= 864 || window.innerHeight <= 420) {
      this.setState ({
        isMobile: true,
        showMenu: false
      })
    } else {
      this.setState ({
        isMobile: false,
        showMenu: false
      })
    }
  }

  handleResize = () => {
    if (window.innerWidth <= 864 || window.innerHeight <= 420) {
      this.setState ({
        isMobile: true,
        showMenu: false
      }) 
    } else {
      this.setState ({
        isMobile: false,
        showMenu: false
      })
    }
  }

  handleShowMenu = (event) => {
    this.setState ({
      showMenu: !this.state.showMenu
    })
  }
  

  render() {

    window.addEventListener('resize', this.handleResize)

    return (

      <div>

        {this.state.isMobile === false ? 

        <div className="homepage">
    
          <div id="navbar">   
            <NavLink to='/' exact className="navbar-links" >
                <img src={require("./media/logo.png")} alt='' id="logo" />
            </NavLink>     
            <NavLink to='/contact' exact className="navbar-links" >05. Contact</NavLink>
            <NavLink to='/about' exact className="navbar-links" >04. About</NavLink>
            <NavLink to='/resume' exact className="navbar-links" >03. Résumé</NavLink>
            <NavLink to='/projects' exact className="navbar-links" >02. Projects</NavLink>
            <NavLink to='/' exact className="navbar-links" >01. Home</NavLink>
          </div >
    
          <div id="social-links-div">
            <a href="https://github.com/iona-b" >
              <img src={require("./media/github-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href="https://www.linkedin.com/in/iona-brabender" >
              <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href="https://dev.to/ionab" >
              <img src={require("./media/dev.to-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href={`mailto:ionabrabender@gmail.com`} >
              <img src={require("./media/email.svg")} alt='' className="icons" />
            </a>
          </div>     
    
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/projects' component={ProjectsContainer} />
            <Route exact path='/resume' component={ResumeContainer} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound}/>
          </Switch>
    
        </div>

        :

        <div className="homepage" > 

          <NavLink to='/' exact >
            <img src={require("./media/logo.png")} alt='' id="logo" />
          </NavLink>     

          <button id="menu-button" onClick={this.handleShowMenu}>
            ☰
          </button>
          
          <div id="social-links-div">
            <a href="https://github.com/iona-b" >
              <img src={require("./media/github-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href="https://www.linkedin.com/in/iona-brabender" >
              <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href="https://dev.to/ionab" >
              <img src={require("./media/dev.to-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href={`mailto:ionabrabender@gmail.com`} >
              <img src={require("./media/email.svg")} alt='' className="icons" />
            </a>
          </div>     
    
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/projects' component={ProjectsContainer} />
            <Route exact path='/resume' component={ResumeContainer} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound}/>
          </Switch>
        
        </div>

        }

        {this.state.showMenu === true ?

          <div id="menu" >

            <div className="menu-link-divs" > 
              <div className="menu-links" >Menu</div>
            </div> 
            <div className="menu-link-divs" > 
              <NavLink to='/' exact className="menu-links" onClick={this.handleShowMenu} >01. Home</NavLink>
            </div> 
            <div className="menu-link-divs" > 
              <NavLink to='/projects' exact className="menu-links"  onClick={this.handleShowMenu}>02. Projects</NavLink>
            </div> 
            <div className="menu-link-divs" > 
              <NavLink to='/resume' exact className="menu-links"  onClick={this.handleShowMenu}>03. Résumé</NavLink>
            </div> 
            <div className="menu-link-divs" > 
              <NavLink to='/about' exact className="menu-links"  onClick={this.handleShowMenu}>04. About</NavLink>
            </div> 
            <div className="menu-link-divs" > 
              <NavLink to='/contact' exact className="menu-links"  onClick={this.handleShowMenu}>05. Contact</NavLink>
            </div>

          </div>

          :

          null

        }
      
      </div>
    
    );

  }

}

export default App;
