import React from 'react';
import { Link } from 'react-router-dom'

function NotFound() {

  return (

    <div >
      <h2> This page does not exist </h2>
      <Link to='/' >
        <button className="buttons">Home</button>
      </Link>
    </div>
    
  );
  
}

export default NotFound;