import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './UserOutput/UserOutput.css'
import './UserInput/UserInput.css'

class App extends Component {
  state = {
    userNames : [
      {name: 'Sharpizoid'},
      {name: 'Tuna Boat'}
    ],
    quotes: [
      {quote: '"Each cat must walk over the human every morning to activate them"'},
      {quote: '"Failure to do so may result in never being fed EVER again"'},
      {quote: '"If it ain\'t tuna, it ain\'t getting et"'},
      {quote: '"Failure to wake a human may result in never being fed EVER again"'},
      {quote: '"Of all of the people, Warren is my fave"'},
      {quote: '"It\'s on my rider, I need at least 10 comfy spots to sleep"'},
      {quote: '"When is this house going to get automatic doors and an escalator?"'},
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
