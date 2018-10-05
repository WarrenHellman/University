import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './UserOutput/UserOutput.css'

class App extends Component {
  state = {
    userNames : [
      {name: 'Sharpizoid'},
      {name: 'Tuna Boat'}
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
        <h1>Kitty Quotes</h1>
        <hr></hr>
        <div className="UserCard">
          <UserOutput 
            click={this.makeClick}
            name= {"Click me! -"+this.state.userNames[0].name}/>
          <UserInput
            changeName={this.changeUserName.bind(this)}/>
        </div>
        <div className="UserCard">
          <UserOutput
            name='-Jub Jub'/>
        </div>
        <div className="UserCard">
          <UserOutput 
            name='-Shippy'/>
        </div>
      </div>
    );
  }
}

export default App;
