import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>

    </div>
  );
}

export default App;
