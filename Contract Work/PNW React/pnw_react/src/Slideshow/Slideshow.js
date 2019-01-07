import React, { Component } from 'react';

import './Slideshow.css';


let images = [
  '../images/warren-temp.jpg',
  '../images/toshi-temp.jpeg'
]
class Slideshow extends Component {

  render(){
    return(
      <div classname='Slideshow'>
        <div className="my-carousel">
        </div>
      </div>
    )
  }
}

export default Slideshow;