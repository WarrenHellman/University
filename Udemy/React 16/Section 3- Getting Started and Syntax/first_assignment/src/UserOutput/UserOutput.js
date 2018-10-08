import React from 'react';


const quotes = [
  {quote: '"Each cat must walk over the human every morning to activate them"'},
  {quote: '"Failure to do so may result in never being fed EVER again"'},
  {quote: '"If it ain\'t tuna, it ain\'t getting et"'},
  {quote: '"What can I say. I\'m hungry"'},
  {quote: '"Of all of the people, Warren is my fave"'},
  {quote: '"It\'s on my rider, I need at least 10 comfy spots to sleep"'},
  {quote: '"When is this house going to get automatic doors and an escalator?"'}
]

const randNum = () => {
  const num = Math.floor(Math.random()*(quotes.length))
  return num;
}

const userOutput = (props) => {
  return(
    <div>
      <p>{quotes[randNum()].quote}</p>
      <p>{quotes[randNum()].quote}</p>
      <p>{quotes[randNum()].quote}</p>
      <p onClick={props.click}>{props.name}</p>
    </div>
  )
}

export default userOutput;