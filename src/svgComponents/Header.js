import React from 'react';
import headerImage from '../images/headerBackground.svg';
import pngheaderImage from '../images/headerBackground.png';

function Header() {
  return (
    <header className="header">
      <img
        src={pngheaderImage} 
        srcSet={headerImage} 
        alt="header" 
        id="header-Img" 
      />
    </header> 
  );
}

export default Header;