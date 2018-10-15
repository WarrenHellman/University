import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
  "./image/committing1.jpg"
];

class LightboxImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      photoIndex: 0
    };  
  }
  
  render() {
    // const { photoIndex, isOpen } = this.state;
    const { photoIndex} = this.state;
    return(
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })}
          />
        )}
      </div>
    )
  }


}

export default LightboxImage;