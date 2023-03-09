import React from 'react';
import {Link} from 'react-router-dom'

function Home() {

  return (

    <div id="home-div">
      <p className="p one-second-animation" id="hi-there" >Hi there! I'm</p>
      <h1 className="h1 three-second-animation" >Iona Brabender</h1>
      <h2 className="h2 five-second-animation" >I'm a Software Engineer</h2>
      <Link to='/resume' exact className="p seven-second-animation" id="intro" >
        <p className="p seven-second-animation" id="intro" >I have experience in JavaScript, React, Redux, Java, Ruby on Rails, and more.</p>
      </Link>
      <p className="nine-second-animation">This website was created using React.js and custom CSS.</p>
      <a href={`mailto:ionabrabender@gmail.com`} className="ten-second-animation" >
        <button className="buttons" id="get-in-touch" >Get in touch</button>
      </a>
    </div>
    
  );
  
}

export default Home;