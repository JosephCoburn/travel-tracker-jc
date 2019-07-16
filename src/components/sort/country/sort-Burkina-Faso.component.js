import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import userService from "../../../utils/userService";

const Voyage = props => (
  <tr>
    <td>{props.voyage.location}</td>
    <td>  {props.voyage.date.substring(0,10)}</td>
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
    this.state = {
      voyages: [],
      user: userService.getUser(),
    };
  }


  componentDidMount() {
    console.log(this.state)
    var userId = this.state.user._id;
    var self = this;

     fetch(`http://localhost:3001/voyages?userId=${userId}`).then(function(res) {
       return res.json();
     }).then(function(json) {
       self.setState({voyages: json});
       console.log(self.state.voyages)
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
      if (currentvoyage.country == "Burkina Faso") {
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
              <th>&nbsp;&nbsp;&nbsp;&nbsp;Date</th>
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
