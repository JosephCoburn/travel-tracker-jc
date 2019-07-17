import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VoyagesList extends Component {

  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Select Country:</h2> 
        <br />
        <br />
        <table className="sort-by-region--table table-striped">
          <tbody>
            <tr>
              <Link to="/sort-state-usa" className="sort-by-region">USA </Link>
            </tr>
            <tr>
              <Link to="/sort-state-canada" className="sort-by-region">Canada </Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}