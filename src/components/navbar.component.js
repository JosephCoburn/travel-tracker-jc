import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
let nav = props.user ?
  <nav className="navbar navbar-light navbar-expand">
  <div className="mr-auto">
    <Link to="/" className="page-title navbar-brand">Travel Tracker</Link>
  </div>
  <ul className="navbar-nav ml-auto">
    <li className="navbar-item">
      <Link to='' className='nav-link' onClick={props.handleLogout}>Logout</Link>
    </li>
  </ul>
  <ul className="navbar-nav">
    <li className="navbar-item">
      <div className="nav-link">|</div>
    </li>
  </ul>
  <ul className="navbar-nav">
    <li className="navbar-item">
      <Link to="/create" className="nav-link">Add Voyage</Link>
    </li>
  </ul>
  </nav>
:
  <nav className="navbar navbar-light navbar-expand">
  <div className="mr-auto">
    <Link to="/" className="page-title navbar-brand">Travel Tracker</Link>
  </div>
  <ul className="navbar-nav ml-auto">
    <li className="navbar-item">
      <Link to='/login' className='nav-link'>Login</Link>
    </li>
    <li className="navbar-item">
      <Link to='/signup' className='nav-link'>Signup</Link>
    </li>
  </ul>
  </nav>
  ;
return (
  <div>
    {nav}
  </div>
)};

export default Navbar;