import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Todolist from './Todolist';
import Loginpages from './Loginpages';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <nav className='header'>
        <Link to="/" className='home' >Home</Link>
        <Link to="/portfolio" className='ports'>Portfolio</Link>
        <Link to="/skills" className='skills' >Skills</Link>
        <Link to="/contact" className='contactus'>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/loginpages" element={<Loginpages />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
