import React, { Component } from 'react';
// import { render } from 'react-dom';
import Carousel from 'react-image-carousel';
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
            <Carousel 
              images={images} 
              thumb={true}
              loop={true}
              autoplay={3000}/>
        </div>
      </div>
    )
  }
}

export default Slideshow;