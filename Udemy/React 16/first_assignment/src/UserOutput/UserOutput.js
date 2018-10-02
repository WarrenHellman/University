import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p>Each cat must walk over the human every morning to activate them</p>
      <p>Failure to do so may result in never being fed EVER again</p>
      <p>{props.name}</p>
    </div>
  )
}

export default userOutput;