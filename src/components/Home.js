import React from 'react';

function Home() {

  return (

    <div className="components" id="home-div">
      <p className="p" id="hi-there" >Hi there! I'm</p>
      <h1 className="h1" >Iona Brabender</h1>
      <h2 className="h2" >I'm a Software Engineer</h2>
      <p className="p" id="intro" >I have experience in Ruby on Rails, JavaScript, React, Redux, and more.</p>
      <a href={`mailto:ionabrabender@gmail.com`} >
        <button className="buttons">Get in touch</button>
      </a>
    </div>
    
  );
  
}

export default Home;