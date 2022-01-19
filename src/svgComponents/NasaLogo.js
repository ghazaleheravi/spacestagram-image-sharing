import React from 'react';
import nasaLogo from '../images/nasa-logo.svg';
import pngNasaLogo from '../images/nasaLogo.png';

function NasaLogo() {
  return ( 
    <img 
      src={pngNasaLogo}
      srcSet={nasaLogo} 
      alt="NASA's logo" 
      className="logo" 
      width="60" 
      heitgh="60"
    />
  );
}

export default NasaLogo;