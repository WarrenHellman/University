import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  
  
  render() {
    return (
      <div className="Team">
        <div className="team-heading">
          <h1>Meet the Owners</h1>
        </div>
        <hr></hr>
        <div className="team-members">
          <div className='warren'>
            <img src={require('../images/warren-temp.jpg')} alt='Warren'></img>
            <h3>Warren</h3>
            <p>This west coast boy has traveled all around Washington, Oregon, Idaho and Alaska before settling on Washington as home. Having worked over 5 years in the beer industry (we can ignore the time he spent as a research entomologist, it doesn't help this narrative), Premium Northwest is the intersection of his love of cold beer and awe of the great outdoors. When not working, you can probably find him climbing or cycling. </p>
          </div>
          <div className='toshi'>
            <img src={require('../images/toshi-temp.jpeg')} alt='Toshi'></img>
            <h3>Toshi</h3>
            <p>Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here. Well it's gonna cost you. How much money you got on you?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;