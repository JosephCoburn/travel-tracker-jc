import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditVoyage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      date: new Date(),
      region: '',
      country: '',
      territory: '',
      location: '',
      rating: 0,
      companions: '',
      duration: 0,
      cost: 0,
      notes: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/voyages/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          date: new Date(response.data.date),
          region: response.data.region,
          country: response.data.country,
          territory: response.data.territory,
          location: response.data.location,
          rating: response.data.rating,
          companions: response.data.companions,
          duration: response.data.duration,
          cost: response.data.cost,
          notes: response.data.notes,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    return (
      <div>
        <h3>View Voyage</h3>

        <table class="table table-striped">
          <tbody>
            <tr>
              <th scope="row">Date:</th>
              <td></td>
              <td></td>
              <td>            
                <DatePicker
                  readOnly={true} 
                  selected={this.state.date} 
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Region:</th>
              <td></td>
              <td></td>
              <td>{this.state.region}</td>
            </tr>
            <tr>
              <th scope="row">Country:</th>
              <td></td>
              <td></td>
              <td>{this.state.country}</td>
            </tr>
            <tr>
              <th scope="row">State/Territory:</th>
              <td></td>
              <td></td>
              <td>{this.state.territory}</td>
            </tr>
            <tr>
              <th scope="row">Location:</th>
              <td></td>
              <td></td>
              <td>{this.state.location}</td>
            </tr>
            <tr>
              <th scope="row">Rating:</th>
              <td></td>
              <td></td>
              <td>{this.state.rating}</td>
            </tr>
            <tr>
              <th scope="row">Companions:</th>
              <td></td>
              <td></td>
              <td>{this.state.companions}</td>
            </tr>
            <tr>
              <th scope="row">Duration (in days):</th>
              <td></td>
              <td></td>
              <td>{this.state.duration}</td>
            </tr>
            <tr>
              <th scope="row">Cost:</th>
              <td></td>
              <td></td>
              <td>{this.state.cost}</td>
            </tr>
            <tr>
              <th scope="row">Notes:</th>
              <td></td>
              <td></td>
              <td>{this.state.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
