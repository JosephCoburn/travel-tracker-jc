import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VoyagesList extends Component {
  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Sort Region By:</h2> 
        <br />
        <br />
        <table className="sort-by-region--table table-striped">
          <tbody>
            <tr>
              <Link to="/sort-region-africa" className="sort-by-region">Africa </Link>
            </tr>
            <tr>
              <Link to="/sort-region-asia" className="sort-by-region">Asia </Link>
            </tr>
            <tr>
              <Link to="/sort-region-the-caribbean" className="sort-by-region">The Caribbean </Link>
            </tr>
            <tr>
              <Link to="/sort-region-central-america" className="sort-by-region">Central America </Link>
            </tr>
            <tr>
              <Link to="/sort-region-eastern-europe" className="sort-by-region">Eastern Europe </Link>
            </tr>
            <tr>
              <Link to="/sort-region-european-union" className="sort-by-region">European Union </Link>
            </tr>
            <tr>
              <Link to="/sort-region-middle-east" className="sort-by-region">Middle East </Link>
            </tr>
            <tr>
              <Link to="/sort-region-north-america" className="sort-by-region">North America </Link>
            </tr>
            <tr>
              <Link to="/sort-region-oceania" className="sort-by-region">Oceania </Link>
            </tr>
            <tr>
              <Link to="/sort-region-south-america" className="sort-by-region">South America </Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}