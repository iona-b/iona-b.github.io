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

      {/* <img src={require("./media/watercolour-texture-background.png")} alt='' id="background" /> */}

      <NavLink to='/' exact className="navbar-links" >
          <img src={require("./media/logo.png")} alt='' id="logo" />
      </NavLink>

      <div id="navbar">
        <NavLink to='/about' exact className="navbar-links" >About</NavLink>
        <NavLink to='/resume' exact className="navbar-links" >Résumé</NavLink>
        <NavLink to='/projects' exact className="navbar-links" >Projects</NavLink>
        <NavLink to='/contact' exact className="navbar-links" >Contact</NavLink>
      </div >

      <div id="social-links-div">
        <a href="https://github.com/iona-b" className="navbar-links" >
          <img src={require("./media/github-icon.svg")} alt='' className="icons" />
        </a><br></br>
        <a href="https://www.linkedin.com/in/iona-brabender" className="navbar-links" >
          <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
        </a><br></br>
        <a href="https://dev.to/ionab" className="navbar-links" >
          <img src={require("./media/dev.to-icon.svg")} alt='' className="icons" />
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
