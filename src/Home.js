import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{marginLeft:100}}>
      <h1>Welcome to My Portfolio!</h1>
      <p>Of course! Your portfolio is a curated showcase of your best work, accomplishments,
         and skills. It's a dynamic reflection of your expertise and experiences, offering 
         a glimpse into what you bring to the table professionally.</p>

<h1> Skills of Summary</h1>
      
        <p1>Web Development: HTML, CSS, JavaScript, frameworks like React, Angular, etc.
            Database Management: SQL, MongoDB, PostgreSQL, etc.</p1>
            <h2>portfolio section</h2>
            <Link to="/portfolio">
        <button>View Portfolio</button>
      </Link>
    </div>
  );
}

export default Home;
