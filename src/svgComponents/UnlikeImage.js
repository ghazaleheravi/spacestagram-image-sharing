import React from 'react';
import unlike from '../images/unlikeButton.svg';
import pngUnlike from '../images/unlike.png';

function UnlikeImage() {
  return (
    <img 
      src={pngUnlike} 
      srcSet={unlike}
      alt="unlike" 
      width="65" 
      height="65"
    />
  );
}

export default UnlikeImage;