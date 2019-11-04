import React from 'react'
import {Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li className="latest">
        <Link to="/">Latest</Link>
      </li>
      <li className="search">
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </div>
);

export default NavBar