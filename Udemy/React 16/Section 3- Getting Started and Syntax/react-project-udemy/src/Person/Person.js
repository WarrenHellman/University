import React from 'react';
import classes from './Person.css'

const person = (props) => {
  
  return (
    <div className={classes.Person}>
      {/* below we are passing a click function as a prop from our App class where the switchNameHandler method was defined. This is the preferred way to pass methods from our class without give access to the state. This is very important because our functional components cannot create methods and are state-less */}
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;