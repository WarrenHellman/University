import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="landingBackground">
          <div className="landing-text">
            <img src={require('../images/Script-01.png')} alt="PNW Script"></img>
            <h2>"Great <span>Majestic</span> Taste"</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;