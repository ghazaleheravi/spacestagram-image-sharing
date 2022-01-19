import React from 'react'
import NasaLogo from '../svgComponents/NasaLogo';
import Like from './Like';

function Image(props) {
  
  return (
    <article className="container" aria-live="assertive">
      <header className="image-header">
        <NasaLogo />
        <div id="title">
          <h3 id="image-title">{props.title}</h3>
          <p className="image-date">{props.date}</p>
        </div>
      </header>
      {props.media_type === "image" 
        ? <img className="image" 
            src={props.url} 
            alt="Universe"
            title={props.title}
            loading="lazy" 
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
        : <iframe className="video" 
            src={props.url} 
            width= "600" 
            height= "360"
            title= "Youtube video of space"
            allow= "fullscreen"
          >
          </iframe>
      }   
      <Like data={props} />
      <p>{props.explanation}</p>
    </article>
  );
}

export default Image;