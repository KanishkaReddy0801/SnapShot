import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">
        <li className="Logo">
          <Link to="/" className="Nav-link">
            My Gallery
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/mountain" className="Nav-link">
            Mountain
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/beaches" className="Nav-link">
            Beaches
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/birds" className="Nav-link">
            Birds
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/food" className="Nav-link">
            Food
          </Link>
        </li>
        <li className="Nav-item">
          <Link to="/search" className="Nav-link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
