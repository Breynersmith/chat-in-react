import React, { useState, useEffect } from 'react';
import './Header.css'

const Header = () => {
  const [blur, setBlur] = useState(false);

  
  return (
    <div className={`${blur ? 'blur' : ''} header`} >
      <h1 className="title">CHAT REACT</h1>
     
    </div>
  );
};



export default Header;
