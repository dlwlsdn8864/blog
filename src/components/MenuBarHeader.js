import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBarHeader.css';

function Header() {
  return (
    <header className="header">
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/moneychange">Money Change</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;