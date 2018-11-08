import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Distribution from './Distribution/Distribution'
import Team from './Team/Team'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
        <About/>
        <Distribution/>
        <Team/>
      </div>
    );
  }
}

export default App;
