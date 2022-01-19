import React, { useState } from 'react';
import LikeImage from '../svgComponents/LikeImage';
import UnlikeImage from '../svgComponents/UnlikeImage';

function Like(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [unLiked, setUnLiked] = useState(false);
  
  function handleLikeClick() {
    if(!isLiked) {
      setIsLiked(true);
      localStorage.setItem(props.data.title, 'Liked');
    } else {
      setIsLiked(false);
      localStorage.removeItem(props.data.title);
    }
  }

  function handleDisLikeClick() {
    if(unLiked) {
      setUnLiked(false);
    } else {
      setUnLiked(true);
      localStorage.removeItem(props.data.title);
    }
  }

  if (unLiked === false && localStorage.getItem(props.data.title)) {
    return ( 
      <button 
        className="like-btn" 
        type="button" 
        onClick={handleDisLikeClick} 
        name="favorite"
        aria-hidden="true"
      >
        {unLiked === true ? <UnlikeImage /> : <LikeImage />}
      </button>
    )
  } 
  else {
    return (
      <button 
        className="like-btn"  
        type="button" 
        onClick={handleLikeClick} 
        name="favorite"
        aria-hidden="true"
      >
        {isLiked === false ? <UnlikeImage /> : <LikeImage />}
      </button>
    )
  }
}

export default Like;