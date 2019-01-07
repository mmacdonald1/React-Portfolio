import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import PortflioJumbotron from './components/PortfolioJumbotron.js';
import PortfolioContainer from './containers/PortfolioContainer.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PortflioJumbotron />
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;
