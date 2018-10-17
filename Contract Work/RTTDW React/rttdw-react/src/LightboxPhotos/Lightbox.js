import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
const images = [
  'images/committing1.jpg',
  'images/committing2.jpg',
  'images/committing3.jpg',
  'images/committing4.jpg'
]

const smallImages = [
  './images/committing1.jpg',
  './images/committing2.jpg',
  './images/committing3.jpg',
  './images/committing4.jpg'
]

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    console.log("properties: "+this.props.imageIndex)
    return (
      <div>
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}
        <img src={require('./images/committing1.jpg')} alt="The untracked files are displayed in red." onClick={() => this.setState({ isOpen: true })}></img>
        {isOpen && (
          <Lightbox
            mainSrc={images[this.props.imageIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}