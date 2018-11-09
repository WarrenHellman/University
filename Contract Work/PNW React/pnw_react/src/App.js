import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Distribution from './Distribution/Distribution'
import Team from './Team/Team'
import Slideshow from './Slideshow/Slideshow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
        <About/>
        <Distribution/>
        <Team/>
        <Slideshow/>
      </div>
    );
  }
}

export default App;
