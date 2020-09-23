import React from 'react';
import {Route, Switch, NavLink, Link} from 'react-router-dom'
import './App.css';
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="homepage">
      <img src={require("./media/watercolour-texture-background.png")} alt='' id="background" />
      <div id="navbar">
        <NavLink to='/about' exact className="navbar-links" >About</NavLink>
        <NavLink to='/resume' exact className="navbar-links" >Resume</NavLink>
        <NavLink to='/projects' exact className="navbar-links" >Projects</NavLink>
        <NavLink to='/contact' exact className="navbar-links" >Contact</NavLink>
      </div >

      <div id="under-construction-div" >
        <h1 className="h1" >Iona Brabender</h1>
        <h2 className="h2" >Full-Stack Software Engineer | Ruby on Rails, JavaScript, React, Redux</h2>
        <br></br>
        <a href="https://github.com/iona-b" className="navbar-links" >GitHub</a><br></br>
        <a href="https://www.linkedin.com/in/iona-brabender" className="navbar-links" >LinkedIn</a><br></br>
        <a href="https://dev.to/ionab" className="navbar-links" >Blog</a>
        <h1 id="under-construction" >Under Construction</h1>
      </div>     

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </div>


  );
}

export default App;
