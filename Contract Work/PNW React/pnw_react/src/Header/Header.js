import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <nav>
              <div className="flex-container main-nav">
                  <ul className="main-nav-1">
                      <li><a href="#about">ABOUT</a></li>
                      <li><a href="#photos">PHOTOS</a></li>
                  </ul>
                  <img src={require("../images/Sticker.png")} alt="" className="logo"></img>
                  <ul className="main-nav-2">
                      <li><a href="#contact">CONTACT US</a></li>
                      <li><a href="#store">AVAILABILITY</a></li>
                  </ul>
              </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
