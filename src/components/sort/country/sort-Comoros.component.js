import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import userService from "../../../utils/userService";

const Voyage = props => (
  <tr>
    <td>{props.voyage.location}</td>
    <td>  {props.voyage.date.substring(5,7)}/{props.voyage.date.substring(8,10)}/{props.voyage.date.substring(2,4)} </td>
    <td>
      <Link className="main-view-btn" to={"/view/"+props.voyage._id}>view</Link>
    </td>
    <td>
      <Link className="main-edit-btn" to={"/edit/"+props.voyage._id}>edit</Link>
    </td>
    <td>
      <a className="main-delete-btn" href="/" onClick={() => { props.deleteVoyage(props.voyage._id) }}>x</a>
    </td>
  </tr>
)

export default class VoyagesList extends Component {
  constructor(props) {
    super(props);
    this.deleteVoyage = this.deleteVoyage.bind(this);
    this.state = {
      voyages: [],
      user: userService.getUser(),
    };
  }


  componentDidMount() {
    console.log(this.state)
    var userId = this.state.user._id;
    var self = this;

     fetch(`/voyages?userId=${userId}`).then(function(res) {
       return res.json();
     }).then(function(json) {
       self.setState({voyages: json});
       console.log(self.state.voyages)
     })
  }

  deleteVoyage(id) {
    axios.delete('/voyages/'+id)
      .then(res => console.log(res.data));
    this.setState({
      voyages: this.state.voyages.filter(el => el._id !== id)
    })
  }

  voyageList() {
    return this.state.voyages.map(currentvoyage => {
      if (currentvoyage.country === "Comoros") {
      return <Voyage voyage={currentvoyage} deleteVoyage={this.deleteVoyage} key={currentvoyage._id}/>;
    }
  })
  }

  render() {
    return (
      <div>
        <h2 className="my-voyages-header">My Voyages</h2> 
        <h6>
          <Link to="/sort" className="table-filters-first">Sort by: </Link>
        </h6>
        <table className="table table-striped">
          <thead style={{backgroundColor: "#e3fdee"}}>
            <tr>
              <th>Destination</th>
              <th>Date</th>
              <th>View</th>
              <th>Edit</th>
              <th>Undo</th>
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
