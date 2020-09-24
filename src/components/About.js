import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <div id="about-p" >
        <p className="p" id="about" >I've recently completed the full-time Software Engineering program at Flatiron School and am excited to have discovered my passion in life. Without knowing it, I think I've always been a coder at heart - having the chance to learn and develop myself is what motivates me more than anything else, and I love being able to combine my creative side with my problem solving skills. I'm organized, detail-oriented, and motivated, and my international background in both cultural institutions and the food industry means that I am highly adaptable and bring a unique perspective to all of my coding projects. I'm eager to continue building on my skills, and am looking for a progressive and energetic team who will foster my desire to learn and grow.</p> 
      </div>
      <div id="profile-picture-div">
        <img src={require("../media/iona.png")} alt='' id="profile-picture" />
      </div>      
    </div>
    
  );
  
}

export default About;