import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userNames : [
      {name: 'Warren H'},
      {name: 'Erin Michael'}
    ]
  }
  makeClick = () => {
    this.setState({
      userNames : [
        {name: '********'}
      ]
    })
  }
  changeUserName = (e) => {
    this.setState({
      userNames : [
        {name: e.target.value}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Interactive React Fields</h1>
        <hr></hr>
        <UserOutput 
          click={this.makeClick}
          name= {"Click me! "+this.state.userNames[0].name}/>
        <UserInput
          changeName={this.changeUserName.bind(this)}/>
        <UserOutput
          name='Erin Michael'/>
        <UserOutput 
          name='Warren G'/>
        
      </div>
    );
  }
}

export default App;
