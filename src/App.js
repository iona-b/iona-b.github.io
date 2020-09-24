import React from 'react';
import {Route, Switch, NavLink, Link} from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import Home from './containers/Home'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import Contact from './containers/ContactContainer'
import NotFound from './components/NotFound'

function App() {

  return (

    <div className="homepage">

      <NavLink to='/' exact className="navbar-links" >
          <img src={require("./media/logo.png")} alt='' id="logo" />
      </NavLink>

      <div id="navbar">        
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
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutContainer} />
        <Route exact path='/projects' component={ProjectsContainer} />
        <Route exact path='/resume' component={ResumeContainer} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound}/>
      </Switch>

    </div>

  );

}

export default App;
