import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div style={{marginLeft:50}}>
      <div>
        <h2>Portfolio</h2>
        <p>Display at least three projects with details, including project descriptions and technologies used.</p>
      </div>
      <div>
        <h1>Project-1</h1>
        <Link to="/todolist">
        <button>Project-1</button>
      </Link>
      </div>
      <div>
       <h1>Project-2</h1> 
        <Link to="/calculator">
        <button>Project-2</button>
      </Link>
      </div>
      <div>
        <h1>Project-3</h1>
        <Link to="/loginpages">
        <button>Project-3</button>
      </Link>
       </div>
    </div>
  );
}

export default Portfolio;
