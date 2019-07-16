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
        <h2 className="my-voyages-header">Select Country:</h2> 
        <h6>
        </h6>
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
