import React from 'react';
import like from '../images/likeButton.svg';
import pngLike from '../images/like.png';

function LikeImage() {
  return ( 
    <img   
      className="like-btn"
      src={pngLike}
      srcSet={like}
      alt="Like" 
      width="65" 
      height="65"
    />
  );
}

export default LikeImage;