import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VoyagesList extends Component {

  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Sort Voyages By:</h2> 
        <br />
        <br />
        <table className="sort-by--table table-striped">
          <tbody>
            <tr>
              <Link to="/sort-region" className="sort-by">Region </Link>
            </tr>
            <tr>
              <Link to="/sort-country" className="sort-by">Country </Link>
            </tr>
            <tr>
              <Link to="/sort-state" className="sort-by">State </Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
