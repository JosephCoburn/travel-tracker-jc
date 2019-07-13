import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateVoyage extends Component {
	constructor(props) {
		super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeCompanions = this.onChangeCompanions.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

		this.state = {
      location: '',
      date: new Date(),
      rating: 0,
      companions: '',
      duration: 0,
      cost: 0,
      notes: '',
		}
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
			location: this.state.location,
      date: this.state.date,
      rating: this.state.rating,
      companions: this.state.companions,
      duration: this.state.duration,
      cost: this.state.cost,
      notes: this.state.notes,
		};
    console.log(voyage);
    axios.post('http://localhost:3001/voyages/add', voyage)
  .then(res => console.log(res.data));
		window.location = '/';
	}

	render() {
    return (
      <div>
        <h3>Add New Voyage</h3>
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
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
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
            <input type="submit" value="Add" className="btn btn-info" />
          </div>
        </form>
      </div>
    )
  }
}