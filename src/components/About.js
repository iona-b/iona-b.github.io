import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <img src={require("../media/iona.png")} alt='' id="profile-picture" />
      <p className="p" id="about" >I'm Iona, a recent graduate from the immersive Software Engineering program at Flatiron School. </p>
      <p className="p" id="about" >I think I've always been a coder at heart - I love being able to combine my creative side with my problem solving skills. </p> 
      <p className="p" id="about" >Having the chance to learn and develop myself is what motivates me more than anything else and my varied background gives me a unique perspective in all of my coding projects.</p> 
    </div>
    
  );
  
}

export default About;