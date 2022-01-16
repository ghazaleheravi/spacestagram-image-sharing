import React, { useState } from 'react';

function Like(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [disLike, setDisLike] = useState(false);
  
  function handleLikeClick() {
    if(isLiked === false) {
      setIsLiked(true);
      localStorage.setItem(props.data.title, 'Liked');
    } else {
      setIsLiked(false);
      localStorage.removeItem(props.data.title);
    }
  }

  function handleDisLikeClick() {
    if(disLike === true) {
      setDisLike(false);
    } else {
      setDisLike(true);
      localStorage.removeItem(props.data.title);
    }
  }

  if (disLike === false && localStorage.getItem(props.data.title)) {
    return ( 
      <button className="like-btn" type="button" onClick={handleDisLikeClick}>
        {disLike === true 
          ? <img src={process.env.PUBLIC_URL+'/unlike.png'} alt="like"/> 
          : <img src={process.env.PUBLIC_URL+'/like.png'} alt="liked"/>
        }
      </button>
    )
  } 
  else {
    return (
      <button className="like-btn" type="button" onClick={handleLikeClick}>
        {isLiked === false 
          ? <img src={process.env.PUBLIC_URL+'/unlike.png'} alt="like"/> 
          : <img src={process.env.PUBLIC_URL+'/like.png'} alt="liked"/>
        }
      </button>
    )
  }
}

export default Like;