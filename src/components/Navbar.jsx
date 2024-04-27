import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
  return (
    <>
    <nav>
      <div className="navbar">
        <ul className="navmenu">
          <li><Link to="/" className="logo">Wave.</Link></li>
          <li><Link to="/"><a href='#home'>Home</a></Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><a href='#services'>Sofa</a></li>
          <li><a href="#home1">Tables</a></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/store"><div className="cart"><img src="./images/cart.png" className="cart" alt="Cart" /></div></Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
};
