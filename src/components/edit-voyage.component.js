import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditVoyage extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeRegion = this.onChangeRegion.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeTerritory = this.onChangeTerritory.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeCompanions = this.onChangeCompanions.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
    axios.get('/voyages/'+this.props.match.params.id)
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

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }
  onChangeRegion(e) {
    this.setState({
      region: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value
    });
  }
  onChangeTerritory(e) {
    this.setState({
      territory: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeRating(e) {
    this.setState({
      rating: e.target.value
    });
  }
  onChangeCompanions(e) {
    this.setState({
      companions: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    });
  }
  onChangeNotes(e) {
    this.setState({
      notes: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const voyage = {
      date: this.state.date,
      region: this.state.region,
      country: this.state.country,
      territory: this.state.territory,
      location: this.state.location,
      rating: this.state.rating,
      companions: this.state.companions,
      duration: this.state.duration,
      cost: this.state.cost,
      notes: this.state.notes,
    };

    console.log(voyage);

    axios.post('/voyages/update/'+this.props.match.params.id, voyage)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h2 className="my-voyages-header">Edit Voyage</h2>
        <br />
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group"> 
            <label className="label-title">Region: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.region}
                onChange={this.onChangeRegion}
                />
          </div>
          <div className="form-group"> 
            <label>Country: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.country}
                onChange={this.onChangeCountry}
                />
          </div>
          <div className="form-group"> 
            <label>State/Territory: </label>
            <input  type="text"
                className="form-control"
                value={this.state.territory}
                onChange={this.onChangeTerritory}
                />
          </div>
          <div className="form-group"> 
            <label>Destination: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label>Rating: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.rating}
                onChange={this.onChangeRating}
                />
          </div>
          <div className="form-group"> 
            <label>Companions: </label>
            <input  type="text"
                className="form-control"
                value={this.state.companions}
                onChange={this.onChangeCompanions}
                />
          </div>
          <div className="form-group">
            <label>Duration (in days): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Cost: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.cost}
                onChange={this.onChangeCost}
                />
          </div>
          <div className="form-group"> 
            <label>Notes: </label>
            <input  type="text"
                className="form-control"
                value={this.state.notes}
                onChange={this.onChangeNotes}
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