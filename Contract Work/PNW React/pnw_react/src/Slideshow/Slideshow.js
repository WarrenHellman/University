import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css';



class Slideshow extends Component {
  render() {
    return (
      <div className="carouselContainer">
        <Carousel
          autoPlay>
          <div className="photoHeight">
            <img src={require('../images/toshi-temp.jpeg') } alt="Warren"/>
            <p className="legend">Legend 1</p>
          </div>
          <div className="photoHeight">
            <img src={require('../images/warren-temp.jpg') } alt="Toshi"/>
            <p className="legend">Legend 2</p>
          </div>
          <div className="photoHeight">
            <img src={require('../images/Sticker.png') } alt="Toshi" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    )
  }
}


export default Slideshow;