import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <div class="about-tabs">
            <a id="story-tab" onclick="story()">Our Story</a>
            <a id="brewing-tab" onclick="brewing()">Our Brewing</a>
            <a id="mission-tab" onclick="mission()">Our Mission</a>
        </div> 
        <div>
          <div class="about-text">
            <p id="about-story" class="about-hide">
                We canned our first beer in 2016 with a mission: To create a beer that does more than just taste great, but also supports the Pacific Northwest and its amazing outdoors. We know there are other options out there but we are proud to be independent and locally owned.  Without any corporate backing, we have to start small but appreciate sharing our beer with you.
                <br></br>
                <br></br>
                Each of our lagers are crafted with the Pacific Northwest in mind and with every beer or gear purchase, a portion of the proceeds will go towards one of our rotating outdoor non-profits. So next time you go on an adventure in Washington, Oregon, or Alaska, make sure to support the environment and grab a pack of Premium Northwest beer first.
            </p>

            <p id="about-brewing" class="about-hide">
                Sure, you may be asking "Why aren't you currently brewing in the Pacific Northwest?"
                <br></br>
                <br></br>
                It's a tough question. Currently, no beers like ours are done in the NW (Rainier and Olympia are brewed outside of Los Angeles by MillerCoors). We are still very small and have to start humbly. When we were looking where to brew, we had 3 options. Buy/build a brewery for a few million, brew locally through another brewery or use our current facility in WI. 
                <br></br>
                <br></br>
                We didn't have a few million so that is out (darn!). The local breweries in the northwest don't currently have the room to brew our beer and maintain the price. We would have to raise the six pack price by a few dollars that's no good! In short, to use the recipe we wanted and keep our price low, we currently have to use WI. However as we get bigger, we will be able to use a brewery that is much closer but that will take a little time! 
            </p>
            <p id="about-mission" class="about-hide">
                We are committed to donating a healthy portion of our proceeds to a rotating list of environmental and conservation non-profits in each state that we operate. We are currently in support of state chapters of the <a href="www.sierraclub.org"><span class="sierra-link">Sierra Club</span></a>.
            </p>
          </div>
            
        </div>   
        <div class="bottom-container">   
          <h4 class="about-thanks">Thanks for your support and cheers to you!</h4>
          
          <h4 class="abv">ABV 4.3%</h4>
            
        </div>

      </div>
    );
  }
}

export default About;