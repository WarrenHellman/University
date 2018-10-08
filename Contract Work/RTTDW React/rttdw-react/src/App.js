import React, { Component } from 'react';
import './App.css';
import { Row, Grid, Col } from 'react-bootstrap';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CardBody from './CardBody/CardBody';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    const titles = ["Who we Are", 'Getting Started'];
    let title;
    title = (
      <div className='sidebarFormat'>
        {titles.map((sideBarTitle)=>{
          return <div>
            <Sidebar 
            title={sideBarTitle}/>
          </div>
          
        })}

      </div>
    )
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          {/* Currently have the z-index up to get the box shadow. Better way? */}
          {title}
        </div>
        <div>
          <CardBody/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
