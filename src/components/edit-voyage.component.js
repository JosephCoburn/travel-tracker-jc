import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditVoyage extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      location: '',
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/voyages/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          location: response.data.location,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const voyage = {
      location: this.state.location,
      date: this.state.date,
    };

    console.log(voyage);

    axios.post('http://localhost:3001/voyages/update/'+this.props.match.params.id, voyage)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Voyage</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Location: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-info" />
          </div>
        </form>
      </div>
    )
  }
}