import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaLinks from './components/contact/SocialMediaLinks'
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        
    </div>
  );
}

export default App;
