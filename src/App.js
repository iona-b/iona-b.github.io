import React from 'react';
import './App.css';

function App() {
  return (
    <div className="homepage">
      <div id="upper-navbar">
        <h1 className="h1" >Iona Brabender</h1>
        <h2 className="h2" >Full-Stack Software Engineer | Ruby on Rails, JavaScript, React, Redux</h2>
      </div>
      <div id="navbar">
        <a href="https://github.com/iona-b" className="navbar-links" >github</a><br></br>
        <a href="https://www.linkedin.com/in/iona-brabender" className="navbar-links" >LinkedIn</a><br></br>
        <a href="https://dev.to/ionab" className="navbar-links" >Blog</a>
      </div>      
      <h1 id="under-construction" >Under Construction</h1>
    </div>
  );
}

export default App;
