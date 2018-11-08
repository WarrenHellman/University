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
            <h3>Warren</h3>
          </div>
          <div className='toshi'>
            <h3>Toshi</h3>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Team;