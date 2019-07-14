import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

return (
  <nav className="navbar navbar-light navbar-expand">
    <div className="mr-auto">
      <Link to="/" className="page-title navbar-brand">Travel Tracker</Link>
    </div>
    <ul className="navbar-nav ml-auto">
      <li className="navbar-item">
        <Link to='' className='nav-link' onClick={props.handleLogout}>Logout</Link>
      </li>
      <li className="navbar-item">
        <Link to='/login' className='nav-link'>Login</Link>
      </li>
      <li className="navbar-item">
        <Link to='/signup' className='nav-link'>Signup</Link>
      </li>
      <li className="navbar-item">
        <div className="nav-link">|</div>
      </li>
      <li className="navbar-item">
      <Link to="/" className="nav-link">Voyages</Link>
      </li>
      <li className="navbar-item">
      <Link to="/create" className="nav-link">Add Voyage</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    </ul>
  </nav>
)};

export default Navbar;