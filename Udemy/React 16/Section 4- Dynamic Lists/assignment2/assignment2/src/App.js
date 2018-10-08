import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    length: 0,
    message:''
  }

  showLength = (e) => {
    const length = e.target.value.length;
    this.setState({length : length})
    this.setState({message : e.target.value})
  }
  deleteLetter = (index) => {
    console.log('index');
    const message = [...this.state.message];
    message.splice(index,1);
    const newMessage = message.join("");
    this.setState({message : newMessage})
    this.setState({length: newMessage.length})
  }

  render() {
    let letters = null;
    if(this.state.message) {
      const currentMessage = [...this.state.message]
      letters = (
        <div>
          {currentMessage.map((letter, index) => {
            return <CharComponent 
            letter = {letter}
            click = {() => this.deleteLetter(index)}
            />
          })}  
        </div>
        
      )
      

    }
    return (
      <div className="App">
        <input 
          type='text'
          placeholder="Type here"
          onChange={(e)=>this.showLength(e)}
          value={this.state.message}/>
        <p 
          className = 'length'
          >{this.state.length}</p>
        <div>
          <ValidationComponent
            length={this.state.length}/>
        </div>
        <div>
          {letters}
        </div>
      </div>
    );
  }
}

export default App;
