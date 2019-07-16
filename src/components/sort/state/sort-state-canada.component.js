import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Voyage = props => (
  <tr>
    <td>{props.voyage.location}</td>
    <td>{props.voyage.date.substring(0,10)}</td>
    <td>
      <Link className="main-edit-btn" to={"/view/"+props.voyage._id}>view</Link> | 
      <Link className="main-edit-btn" to={"/edit/"+props.voyage._id}>edit</Link> | 
      <a className="main-delete-btn" href="/" onClick={() => { props.deleteVoyage(props.voyage._id) }}>delete</a>
    </td>
  </tr>
)

export default class VoyagesList extends Component {
  constructor(props) {
    super(props);
    this.deleteVoyage = this.deleteVoyage.bind(this);
    this.state = {voyages: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/voyages/')
     .then(response => {
       this.setState({ voyages: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteVoyage(id) {
    axios.delete('http://localhost:3001/voyages/'+id)
      .then(res => console.log(res.data));
    this.setState({
      voyages: this.state.voyages.filter(el => el._id !== id)
    })
  }

  voyageList() {
    return this.state.voyages.map(currentvoyage => {
      return <Voyage voyage={currentvoyage} deleteVoyage={this.deleteVoyage} key={currentvoyage._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Select Province or Territory:</h2> 
        <h6>
        </h6>
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
