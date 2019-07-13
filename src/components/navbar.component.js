import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand" style={{backgroundColor: "#e3f2fd"}}>
        <div className="mr-auto">
          <Link to="/" className="page-title navbar-brand">Travel Tracker</Link>
        </div>
        <div className="mx-auto">
          <svg id="i-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
            <circle cx="10" cy="9" r="3" />
          </svg>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Voyages</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Voyage</Link>
          </li>
        </ul>
      </nav>
    );
  }
}