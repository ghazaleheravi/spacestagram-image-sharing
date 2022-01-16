import React from 'react'
import Like from './Like';

function Image(props) {
  
  return (
    <div>
      <div className="container">
        <div className="image-header">
          <img src={process.env.PUBLIC_URL + '/nasaLogo2.png'} className="logo" alt="Nasa's Logo"/>
          <div id="image-header">
            <h3 id="image-title">{props.title}</h3>
            <p className="image-date">{props.date}</p>
          </div>
        </div>
        <img className="image" src={props.url} alt="Not Avalaibe!" loading="lazy" width="480" height="360"
          srcSet=
            {`${props.url} 480w,
              ${props.url} 960w,
              ${props.url} 1440w,
              ${props.url} 1920w,
            `} 
            sizes="
              (max-width: 480px) 240px,
              (max-width: 960px) 480px,
              (max-width: 1440px) 960px,
              1920px" 
          />
          <Like data={props} />
        <span>{props.explanation}</span>
       </div>
      
    </div>
  );
}

export default Image;