import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import PortflioJumbotron from './components/PortfolioJumbotron.js';
import PortfolioContainer from './containers/PortfolioContainer.js'
import Contact from './components/Contact.js'
import Skills from './components/Skills.js'
import About from './components/About.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PortflioJumbotron />
        <PortfolioContainer />
        <Skills />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
