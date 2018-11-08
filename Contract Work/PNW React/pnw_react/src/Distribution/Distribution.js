import React, { Component } from 'react';
import './Distribution.css';

class Distribution extends Component {
  
  
  render() {
    return (
      <div className="Distribution">
        <div class="availability-header-container">
            <h1 class="availability-header">Our Distribution</h1>
        </div>
        <hr></hr>
        <div class="availability-map">
            {/* <!-- https://mapchart.net/usa.html --> */}
            <img src={require('../images/distro-map.png')} alt="distro-map"></img>
        </div>
        
      </div>
    );
  }
}

export default Distribution;