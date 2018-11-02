import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
        <About/>
      </div>
    );
  }
}

export default App;
