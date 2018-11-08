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
            <map name="infographic">
              <area shape="poly" coords="130,147,200,107,254,219,130,228"
                href="https://developer.mozilla.org/docs/Web/HTML"
                target="_blank" alt="HTML" />
              <area shape="poly" coords="130,147,130,228,6,219,59,107"
                href="https://developer.mozilla.org/docs/Web/CSS"
                target="_blank" alt="CSS" />
              <area shape="poly" coords="130,147,200,107,130,4,59,107"
                href="https://developer.mozilla.org/docs/Web/JavaScript"
                target="_blank" alt="JavaScript" />
            </map>
            <img id="distributorClick"usemap="#infographic" src={require('../images/distro-map.png')} alt="distro-map" />
        </div>
        
      </div>
    );
  }
}

export default Distribution;