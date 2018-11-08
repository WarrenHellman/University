import React, { Component } from 'react';
import './About.css';

class About extends Component {
  
    story(){
    
    // Can't define a global variable?
    
    // Defines variables for different text sections in about. Removes previous text if it is displayed
    const story = document.getElementById("about-story");    
    const brewing = document.getElementById("about-brewing");
    const mission = document.getElementById("about-mission");

    if (!brewing.classList.contains("about-hide")){
        brewing.classList.toggle("about-hide");
    }
    if (!mission.classList.contains("about-hide")){
        mission.classList.toggle("about-hide");
    }
    if (story.classList.contains("about-hide")){
        story.classList.toggle("about-hide");
    }

    var storyTab = document.getElementById("story-tab");
    var breweryTab = document.getElementById("brewing-tab");
    var missionTab = document.getElementById("mission-tab");
    storyTab.classList.toggle("underline-tab")
    breweryTab.classList.remove("underline-tab")
    missionTab.classList.remove("underline-tab")
  }

  brewing() {

    var story = document.getElementById("about-story");    
    var brewing = document.getElementById("about-brewing");
    var mission = document.getElementById("about-mission");

    if (brewing.classList.contains("about-hide")){
        brewing.classList.toggle("about-hide");
    }
    if (!mission.classList.contains("about-hide")){
        mission.classList.toggle("about-hide");
    }
    if (!story.classList.contains("about-hide")){
        story.classList.toggle("about-hide");
    }

    var storyTab = document.getElementById("story-tab");
    var breweryTab = document.getElementById("brewing-tab");
    var missionTab = document.getElementById("mission-tab");
    storyTab.classList.remove("underline-tab")
    breweryTab.classList.toggle("underline-tab")
    missionTab.classList.remove("underline-tab")
  }

  mission() {

    var story = document.getElementById("about-story");    
    var brewing = document.getElementById("about-brewing");
    var mission = document.getElementById("about-mission");

    if (!brewing.classList.contains("about-hide")){
        brewing.classList.toggle("about-hide");
    }
    if (mission.classList.contains("about-hide")){
        mission.classList.toggle("about-hide");
    }
    if (!story.classList.contains("about-hide")){
        story.classList.toggle("about-hide");
    }
    var storyTab = document.getElementById("story-tab");
    var breweryTab = document.getElementById("brewing-tab");
    var missionTab = document.getElementById("mission-tab");
    storyTab.classList.remove("underline-tab")
    breweryTab.classList.remove("underline-tab")
    missionTab.classList.toggle("underline-tab")
  }

  render() {
    return (
      <div className="About">
        <div className="about-tabs">
          <button id="story-tab"  className="underline-tab" onClick={this.story}>Our Story</button>
          <button id="brewing-tab" onClick={this.brewing}>Our Brewing</button>
          <button id="mission-tab" onClick={this.mission}>Our Mission</button>
            {/* <a id="story-tab" onClick={this.story}>Our Story</a>
            <a id="brewing-tab" onClick={this.brewing}>Our Brewing</a>
            <a id="mission-tab" onClick={this.mission}>Our Mission</a> */}
        </div> 
        <hr></hr>
        <div>
          <div id="about" className="about-text">
            <p id="about-story">
                We canned our first beer in 2016 with a mission: To create a beer that does more than just taste great, but also supports the Pacific Northwest and its amazing outdoors. We know there are other options out there but we are proud to be independent and locally owned.  Without any corporate backing, we have to start small but appreciate sharing our beer with you.
                <br></br>
                <br></br>
                Each of our lagers are crafted with the Pacific Northwest in mind and with every beer or gear purchase, a portion of the proceeds will go towards one of our rotating outdoor non-profits. So next time you go on an adventure in Washington, Oregon, or Alaska, make sure to support the environment and grab a pack of Premium Northwest beer first.
            </p>

            <p id="about-brewing" className="about-hide">
                Sure, you may be asking "Why aren't you currently brewing in the Pacific Northwest?"
                <br></br>
                <br></br>
                It's a tough question. Currently, no beers like ours are done in the NW (Rainier and Olympia are brewed outside of Los Angeles by MillerCoors). We are still very small and have to start humbly. When we were looking where to brew, we had 3 options. Buy/build a brewery for a few million, brew locally through another brewery or use our current facility in WI. 
                <br></br>
                <br></br>
                We didn't have a few million so that is out (darn!). The local breweries in the northwest don't currently have the room to brew our beer and maintain the price. We would have to raise the six pack price by a few dollars that's no good! In short, to use the recipe we wanted and keep our price low, we currently have to use WI. However as we get bigger, we will be able to use a brewery that is much closer but that will take a little time! 
            </p>
            <p id="about-mission" className="about-hide">
                We are committed to donating a healthy portion of our proceeds to a rotating list of environmental and conservation non-profits in each state that we operate. We are currently in support of state chapters of the <a href="https://www.sierraclub.org" target='_blank' rel="noopener noreferrer"><span className="sierra-link">Sierra Club</span></a>.
            </p>
            <p></p>
          </div>
            
        </div>   
        <div className="bottom-container">   
          <h4 className="about-thanks">Thanks for your support and cheers to you!</h4>
          
          <h4 className="abv">ABV 4.3%</h4>
            
        </div>

      </div>
    );
  }
}

export default About;