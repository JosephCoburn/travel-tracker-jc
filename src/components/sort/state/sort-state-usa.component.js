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
        <h2 className="my-voyages-header">Select State:</h2> 
        <h6>
        </h6>
        <br />
        <br />
        <table className="sort-by-region--table table-striped">
          <tbody>
            <tr>
              <Link to="/sort-alabama" className="sort-by-region">Alabama </Link>
            </tr>
            <tr>
              <Link to="/sort-alaska" className="sort-by-region">Alaska </Link>
            </tr>
            <tr>
              <Link to="/sort-arizona" className="sort-by-region">Arizona </Link>
            </tr>
            <tr>
              <Link to="/sort-arkansas" className="sort-by-region">Arkansas </Link>
            </tr>
            <tr>
              <Link to="/sort-california" className="sort-by-region">California </Link>
            </tr>
            <tr>
              <Link to="/sort-colorado" className="sort-by-region">Colorado </Link>
            </tr>
            <tr>
              <Link to="/sort-connecticut" className="sort-by-region">Connecticut </Link>
            </tr>
            <tr>
              <Link to="/sort-delaware" className="sort-by-region">Delaware </Link>
            </tr>
            <tr>
              <Link to="/sort-florida" className="sort-by-region">Florida </Link>
            </tr>
            <tr>
              <Link to="/sort-georgia" className="sort-by-region">Georgia </Link>
            </tr>
            <tr>
              <Link to="/sort-hawaii" className="sort-by-region">Hawaii </Link>
            </tr>
            <tr>
              <Link to="/sort-idaho" className="sort-by-region">Idaho </Link>
            </tr>
            <tr>
              <Link to="/sort-illinois" className="sort-by-region">Illinois </Link>
            </tr>
            <tr>
              <Link to="/sort-indiana" className="sort-by-region">Indiana </Link>
            </tr>
            <tr>
              <Link to="/sort-iowa" className="sort-by-region">Iowa </Link>
            </tr>
            <tr>
              <Link to="/sort-kansas" className="sort-by-region">Kansas </Link>
            </tr>
            <tr>
              <Link to="/sort-kentucky" className="sort-by-region">Kentucky </Link>
            </tr>
            <tr>
              <Link to="/sort-louisiana" className="sort-by-region">Louisiana </Link>
            </tr>
            <tr>
              <Link to="/sort-maine" className="sort-by-region">Maine </Link>
            </tr>
            <tr>
              <Link to="/sort-maryland" className="sort-by-region">Maryland </Link>
            </tr>
            <tr>
              <Link to="/sort-massachusetts" className="sort-by-region">Massachusetts </Link>
            </tr>
            <tr>
              <Link to="/sort-michigan" className="sort-by-region">Michigan </Link>
            </tr>
            <tr>
              <Link to="/sort-minnesota" className="sort-by-region">Minnesota </Link>
            </tr>
            <tr>
              <Link to="/sort-mississippi" className="sort-by-region">Mississippi </Link>
            </tr>
            <tr>
              <Link to="/sort-missouri" className="sort-by-region">Missouri </Link>
            </tr>
            <tr>
              <Link to="/sort-montana" className="sort-by-region">Montana </Link>
            </tr>
            <tr>
              <Link to="/sort-nebraska" className="sort-by-region">Nebraska </Link>
            </tr>
            <tr>
              <Link to="/sort-nevada" className="sort-by-region">Nevada </Link>
            </tr>
            <tr>
              <Link to="/sort-new-hampshire" className="sort-by-region">New Hampshire </Link>
            </tr>
            <tr>
              <Link to="/sort-new-jersey" className="sort-by-region">New Jersey </Link>
            </tr>
            <tr>
              <Link to="/sort-new-mexico" className="sort-by-region">New Mexico </Link>
            </tr>
            <tr>
              <Link to="/sort-new-york" className="sort-by-region">New York </Link>
            </tr>
            <tr>
              <Link to="/sort-north-carolina" className="sort-by-region">North Carolina </Link>
            </tr>
            <tr>
              <Link to="/sort-north-dakota" className="sort-by-region">North Dakota </Link>
            </tr>
            <tr>
              <Link to="/sort-ohio" className="sort-by-region">Ohio </Link>
            </tr>
            <tr>
              <Link to="/sort-oklahoma" className="sort-by-region">Oklahoma </Link>
            </tr>
            <tr>
              <Link to="/sort-oregon" className="sort-by-region">Oregon </Link>
            </tr>
            <tr>
              <Link to="/sort-pennsylvania" className="sort-by-region">Pennsylvania </Link>
            </tr>
            <tr>
              <Link to="/sort-rhode-island" className="sort-by-region">Rhode Island </Link>
            </tr>
            <tr>
              <Link to="/sort-south-carolina" className="sort-by-region">South Carolina </Link>
            </tr>
            <tr>
              <Link to="/sort-south-dakota" className="sort-by-region">South Dakota </Link>
            </tr>
            <tr>
              <Link to="/sort-tennessee" className="sort-by-region">Tennessee </Link>
            </tr>
            <tr>
              <Link to="/sort-texas" className="sort-by-region">Texas </Link>
            </tr>
            <tr>
              <Link to="/sort-utah" className="sort-by-region">Utah </Link>
            </tr>
            <tr>
              <Link to="/sort-vermont" className="sort-by-region">Vermont </Link>
            </tr>
            <tr>
              <Link to="/sort-virginia" className="sort-by-region">Virginia </Link>
            </tr>
            <tr>
              <Link to="/sort-washington" className="sort-by-region">Washington </Link>
            </tr>
            <tr>
              <Link to="/sort-west-virginia" className="sort-by-region">West Virginia </Link>
            </tr>
            <tr>
              <Link to="/sort-wisconsin" className="sort-by-region">Wisconin </Link>
            </tr>
            <tr>
              <Link to="/sort-wyoming" className="sort-by-region">Wyoming </Link>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
