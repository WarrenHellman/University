import React, { Component } from 'react';
import './Distribution.css';

class Distribution extends Component {


  
  render() {
    return (
      <div className="Distribution">
        <div class="availability-header-container">
            <h1 class="availability-header">Our Distribution</h1>
            <h3>We are committed to serving the Pacific Northwest. Please hover over your area to find the correct distributor!</h3>
        </div>
        <hr></hr>
        <div class="availability-map">
            {/* <!-- https://mapchart.net/usa.html --> */}
            {/* <img src={require('../images/distro-map.png')} alt="distro-map"></img> */}
            
            {/* https://www.image-map.net/ */}
            <img id='distributorClick'src={require('../images/distro-map-900px.png')} alt="distro-map" usemap="#image-map"></img>

            <map name="image-map">
              <area target="_blank" alt="Bill's Distributing Alaska" title="Bill's Distributing Alaska" href="https://www.facebook.com/Bills-Distributing-151836918698922/" coords="143,56,283,68,283,198,117,251" shape="poly"/>
              <area target="_blank" alt="Point Blank Distributing Oregon" title="Point Blank Distributing Oregon" href="http://pointblankdistributing.com/" coords="458,228,605,266,570,382,411,349" shape="poly"/>
              <area target="_blank" alt="Idaho Wine Merchant Idaho" title="Idaho Wine Merchant Idaho" href="https://idahowinemerchant.com" coords="651,178,610,386,726,408,733,340,684,289" shape="poly"/>
              <area target="_blank" alt="Olympic Eagle Washington (Pierce, Thurston and Peninsula)" title="Olympic Eagle Washington (Pierce, Thurston and Peninsula)" href="https://www.olympiceagle.com/" coords="467,132,505,155,510,167,526,175,515,191,471,177" shape="poly"/>
              <area target="_blank" alt="Orcas Distributing Washington (King and Snohomish)" title="Orcas Distributing Washington (King and Snohomish)" href="http://www.orcasdistributing.com/" coords="517,147,517,161,533,168,543,152" shape="poly"/>
              <area target="_blank" alt="Dickerson Distributors Washington (Skagit and Whatcom)" title="Dickerson Distributors Washington (Skagit and Whatcom)" href="https://www.dickersondistributors.com/" coords="516,119,517,138,544,146,553,126" shape="poly"/>
          </map>
        </div>
        
      </div>
    );
  }
}

export default Distribution;