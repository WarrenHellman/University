import React from 'react';

const userInput = (props) => {
  return(
    <div>
      <input className="UserInputField" type='text' placeholder='Change User Name' onChange = {props.changeName}></input>
    </div>
  )
}

export default userInput;