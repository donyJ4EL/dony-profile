import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Music from './pages/Music';
import Mv from './pages/Mv';
import Experience from './pages/Experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Top navigation bar */}
      <Navbar />

      {/* Route mapping */}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/education" element = {<Education />}/>
        <Route path = '/experience' element = {<Experience />}/>
        <Route path = '/music' element = {<Music />}/>
        <Route path = '/mv' element = {<Mv />}/>
      </Routes>
    </Router>
  );
}

export default App;
