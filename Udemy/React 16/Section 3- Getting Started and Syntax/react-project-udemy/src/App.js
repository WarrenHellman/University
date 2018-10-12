import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import './Person/Person.css'


class App extends Component {
  // State is a property of the Component class (available here by extending it through App). It is only available in class based components It is an object that we can access in our login through this.state.key). The great thing about state is when it changes, it will re-render the component.
  state = {
    persons: [
      { id:'123', name: 'Warren', age: 34},
      { id:'133',name: 'Erin', age: 39},
      { id:'143',name: 'Sharps', age: 13}
    ],
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   //console.log('clicked')
  //   //Don't do this: this.state.persons[1].name = "Erin the Terrific"
  //   this.setState({persons: [
  //     {name: 'Warren', age: 34},
  //     {name: 'Erin the Terrific', age: 39},
  //     {name: newName, age: 1}
  //   ]})
  // }

  nameChangeHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.name;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

  
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //Both methods below are good practice. They make a copy of the referenced array (state) instead of directly manipulating the original object/array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    console.log('clicked'+personIndex)
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    // This statement essentially toggles the boolean state of showPersons. Pretty tricky!
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // When the render method is invoked, all code inside is triggered. Below we can show our content using a ternary (inside of JSX) or an if statement inside render method (which is JS) and more elegant

  render() {
    // adding inline style
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // }
    let persons= null;
    let btnClass='';
    if (this.state.showPersons){
      persons = (
        <div>
          {/* Dynamic rendering of our state list */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              // unique key for each element in the object
              key={person.id}
              changed={(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      btnClass = classes.Red;
    };

    let assignedClasses = [];
    if (this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
  

    return (

      <div className={classes.App}>
        <h1>Hey there handsome!</h1>
        <p className={assignedClasses.join(' ')}>I'm dynamically styled text!</p>
        <button 
        
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>

        {/* If persons !null, persons will render here */}
        {persons}


        {/* props can be hard coded or accessed through the state property */}

        {/* We can execute JS logic in between curly braces with ternaries. Not block statements like if or for loops however */}
        {/* Below, we've wrapped our render in a saying if showPersons is true in state, render the Person objects (it looks like html but we know this is just syntactic sugar for React.createElement which is a JS operation). After the colon is else condition, null, or do nothing */}
        {/* { 
          this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                changed ={this.nameChangeHandler}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Sharpie-brah')}>What it do</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        } */}
        
      </div>
    );

    // Both the above step and below do the same thing but the above is easier to write with JSX and will compile down to the below. 

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m the text!'))
  }
}

export default App;
