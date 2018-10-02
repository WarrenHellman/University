import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userNames : [
      {name: 'Warren H'}
    ]
  }
  censorName = (censored) => {
    console.log('clicked')
    this.setState({
      userNames : [
        {name: '********'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <UserOutput 
          onClick={this.censorName} 
          name= {this.state.userNames[0].name}/>
        <UserOutput/>
        <UserOutput name='Warren G'/>
      </div>
    );
  }
}

export default App;
