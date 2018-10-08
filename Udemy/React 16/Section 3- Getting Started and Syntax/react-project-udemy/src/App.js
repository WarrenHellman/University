import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component {
  // State is a property of the Component class (available here by extending it through App). It is only available in class based components It is an object that we can access in our login through this.state.key). The great thing about state is when it changes, it will re-render the component.
  state = {
    persons: [
      {name: 'Warren', age: 34},
      {name: 'Erin', age: 39},
      {name: 'Sharps', age: 13}
    ]
  }
  switchNameHandler = (newName) => {
    //console.log('clicked')
    //Don't do this: this.state.persons[1].name = "Erin the Terrific"
    this.setState({persons: [
      {name: 'Warren', age: 34},
      {name: 'Erin the Terrific', age: 39},
      {name: newName, age: 1}
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 34},
      {name: 'Erin', age: 39},
      {name: 'Sharpizoid', age: 13}
    ]})
  }
  render() {
    // adding inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px;',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hey there handsome!</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Sick Anon')}>Switch Name</button>
        {/* props can be hard coded or accessed through the state property */}
        <Person 
          name={this.state.persons[0].name} 
          age="28"
          changed ={this.nameChangeHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sharpie-brah')}>What it do</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    // Both the above step and below do the same thing but the above is easier to write with JSX and will compile down to the below. 

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m the text!'))
  }
}

export default App;
