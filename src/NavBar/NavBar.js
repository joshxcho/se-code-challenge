import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li className="latest">
        <Link to="/">LATEST</Link>
      </li>
      <li className="search">
        <Link to="/search">SEARCH</Link>
      </li>
    </ul>
  </div>
);

export default NavBar