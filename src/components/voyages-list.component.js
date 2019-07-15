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
        <h2 className="my-voyages-header">My Voyages</h2>
        <h6>
          <Link to="/" className="table-filters">Past</Link>
          <p className="table-filters">|</p>
          <Link to="/" className="table-filters">Future</Link>
          <p className="table-filters">|</p>
          <Link to="/" className="table-filters">All</Link>
        </h6>
        <table className="table table-striped">
          <thead style={{backgroundColor: "#e3fdee"}}>
            <tr>
              <th>Location</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date</th>
              <th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.voyageList() }
          </tbody>
        </table>
      </div>
    )
  }
}
