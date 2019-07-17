import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VoyagesList extends Component {
  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Select Province or Territory:</h2> 
        <br />
        <br />
        <table className="sort-by-region--table table-striped">
          <tbody>
            <tr>
              <Link to="/sort-alberta" className="sort-by-region">Alberta </Link>
            </tr>
            <tr>
              <Link to="/sort-british-columbia" className="sort-by-region">British Columbia </Link>
            </tr>
            <tr>
              <Link to="/sort-manitoba" className="sort-by-region">Manitoba </Link>
            </tr>
            <tr>
              <Link to="/sort-new-brunswick" className="sort-by-region">New Brunswick </Link>
            </tr>
            <tr>
              <Link to="/sort-newfoundland" className="sort-by-region">Newfoundland </Link>
            </tr>
            <tr>
              <Link to="/sort-nova-scotia" className="sort-by-region">Nova Scotia </Link>
            </tr>
            <tr>
              <Link to="/sort-ontario" className="sort-by-region">Ontario </Link>
            </tr>
            <tr>
              <Link to="/sort-prince-edward-island" className="sort-by-region">Prince Edward Island </Link>
            </tr>
            <tr>
              <Link to="/sort-quebec" className="sort-by-region">Quebec </Link>
            </tr>
            <tr>
              <Link to="/sort-saskatchewan" className="sort-by-region">Saskatchewan </Link>
            </tr>
            
            <tr>
              <Link to="/sort-northwest-territories" className="sort-by-region">Northwest Territories </Link>
            </tr>
            <tr>
              <Link to="/sort-nunavut" className="sort-by-region">Nunavut </Link>
            </tr>
            <tr>
              <Link to="/sort-yukon" className="sort-by-region">Yukon </Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}