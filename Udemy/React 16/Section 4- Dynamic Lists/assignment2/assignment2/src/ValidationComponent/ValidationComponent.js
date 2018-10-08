import React from 'react';

const ValidationComponent = (props) => {
  let message;
  if (props.length<5){
    message="Text too short"
  }
  else if (props.length>=5) {
    message="Text long enough"
  }
  
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default ValidationComponent