// StickyHeader.js

import React from 'react';
import './Navbar.scss';

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <div className="logo">EduVators</div>
      <ul className="nav-links">
      
      <li><a href="/login"><div>Login</div></a></li>
        <li> <a href="/signup"><div>Signup</div></a></li>
      </ul>
    </div>
  );
};

export default StickyHeader;
