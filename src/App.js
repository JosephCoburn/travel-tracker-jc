import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component"
import VoyagesList from "./components/voyages-list.component";
import EditVoyage from "./components/edit-voyage.component";
import CreateVoyage from "./components/create-voyage.component";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from './utils/userService';
import SelectRegion from "./components/select-region.component";
import AfricaSelectCountry from "./components/regions/africa-select-country.component";
import AsiaSelectCountry from "./components/regions/asia-select-country.component";
import CentralAmericaSelectCountry from "./components/regions/central-america-select-country.component";
import EuropeSelectCountry from "./components/regions/europe-select-country.component";
import EuropeanUnionSelectCountry from "./components/regions/european-union-select-country.component";
import MiddleEastSelectCountry from "./components/regions/middle-east-select-country.component";
import NorthAmericaSelectCountry from "./components/regions/north-america-select-country.component";
import OceaniaSelectCountry from "./components/regions/oceania-select-country.component";
import SouthAmericaSelectCountry from "./components/regions/south-america-select-country.component";
import TheCaribbeanSelectCountry from "./components/regions/the-caribbean-select-country.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={VoyagesList} />
          <Route path="/edit/:id" component={EditVoyage} />
          <Route path="/create" component={CreateVoyage} />
          <div style={{margin: '16px', position: 'relative'}}>
            <SelectRegion 
              items={[
                { value: 'Africa', id: 0 },
                { value: 'North America', id: 1 },
                { value: 'Central America', id: 2 },
                { value: 'The Caribbean', id: 3 },
                { value: 'South America', id: 4 },
                { value: 'Asia', id: 5 },
                { value: 'Europe', id: 6 },
                { value: 'European Union', id: 7 },
                { value: 'Middle East', id: 8 },
                { value: 'Oceania', id: 9 },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <AfricaSelectCountry 
              items={[
                { value: 'Burundi', id: 'd0' },
                { value: 'Comoros', id: 'd1' },
                { value: 'Djibouti', id: 'd2' },
                { value: 'Eritrea', id: 'd3' },
                { value: 'Ethiopia', id: 'd4' },
                { value: 'Kenya', id: 'd5' },
                { value: 'Madagascar', id: 'd6' },
                { value: 'Malawi', id: 'd7' },
                { value: 'Mauritius', id: 'd8' },
                { value: 'Mayotte', id: 'd9' },
                { value: 'Mozambique', id: 'd10' },
                { value: 'Reunion', id: 'd11' },
                { value: 'Rwanda', id: 'd12' },
                { value: 'Seychelles', id: 'd13' },
                { value: 'Somalia', id: 'd14' },
                { value: 'Tanzania', id: 'd15' },
                { value: 'Uganda', id: 'd16' },
                { value: 'Zambia', id: 'd17' },
                { value: 'Zimbabwe', id: 'd18' },
                { value: 'Angola', id: 'd19' },
                { value: 'Cameroon', id: 'd20' },
                { value: 'Central African Republic', id: 'd21' },
                { value: 'Chad', id: 'd22' },
                { value: 'Congo', id: 'd23' },
                { value: 'Equatorial Guinea', id: 'd24' },
                { value: 'Gabon', id: 'd25' },
                { value: 'Sao Tome and Principe', id: 'd26' },
                { value: 'Algeria', id: 'd27' },
                { value: 'Canary Islands', id: 'd28' },
                { value: 'Egypt', id: 'd29' },
                { value: 'Libya', id: 'd30' },
                { value: 'Morocco', id: 'd31' },
                { value: 'South Sudan', id: 'd32' },
                { value: 'Tunisia', id: 'd33' },
                { value: 'Western Sahara', id: 'd34' },
                { value: 'Botswana', id: 'd35' },
                { value: 'Lesotho', id: 'd36' },
                { value: 'Namibia', id: 'd37' },
                { value: 'South Africa', id: 'd38' },
                { value: 'Swaziland', id: 'd39' },
                { value: 'Benin', id: 'd40' },
                { value: 'Burkina Faso', id: 'd41' },
                { value: 'Cape Verde', id: 'd42' },
                { value: "Cote D'Ivorie", id: 'd43' },
                { value: 'Gambia', id: 'd44' },
                { value: 'Ghana', id: 'd45' },
                { value: 'Guinea', id: 'd46' },
                { value: 'Guinea-Bissau', id: 'd47' },
                { value: 'Liberia', id: 'd48' },
                { value: 'Mali', id: 'd49' },
                { value: 'Mauritania', id: 'd50' },
                { value: 'Niger', id: 'd51' },
                { value: 'Nigeria', id: 'd52' },
                { value: 'Saint Helens', id: 'd53' },
                { value: 'Senegal', id: 'd54' },
                { value: 'Sierra Leone', id: 'd55' },
                { value: 'Togo', id: 'd56' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <NorthAmericaSelectCountry 
              items={[
                { value: 'Bermuda', id: 'b0' },
                { value: 'Canada', id: 'b1' },
                { value: 'Greenland', id: 'b2' },
                { value: 'Saint Pierre and Miquelon', id: 'b3' },
                { value: 'The United States', id: 'b4' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <CentralAmericaSelectCountry 
              items={[
                { value: 'Belize', id: 'c0' },
                { value: 'Costa Rica', id: 'c1' },
                { value: 'El Salvador', id: 'c2' },
                { value: 'Guatemala', id: 'c3' },
                { value: 'Honduras', id: 'c4' },
                { value: 'Mexico', id: 'c5' },
                { value: 'Nicaragua', id: 'c6' },
                { value: 'Panama', id: 'c7' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <TheCaribbeanSelectCountry 
              items={[
                { value: 'Antigua and Barbuda', id: 'd0' },
                { value: 'Aruba', id: 'd1' },
                { value: 'Bahamas', id: 'd2' },
                { value: 'Barbados', id: 'd3' },
                { value: 'Bonaire', id: 'd4' },
                { value: 'British Virgin Islands', id: 'd5' },
                { value: 'Cayman Islands', id: 'd6' },
                { value: 'Cuba', id: 'd7' },
                { value: 'Curacao', id: 'd8' },
                { value: 'Dominica', id: 'd9' },
                { value: 'Dominican Republic', id: 'd10' },
                { value: 'Grenada', id: 'd11' },
                { value: 'Guadeloupe', id: 'd12' },
                { value: 'Haiti', id: 'd13' },
                { value: 'Jamaica', id: 'd14' },
                { value: 'Martinique', id: 'd15' },
                { value: 'Montserrat', id: 'd16' },
                { value: 'Puerto Rico', id: 'd17' },
                { value: 'Saba', id: 'd18' },
                { value: 'Saint Barthelemy', id: 'd19' },
                { value: 'Saint Kitts and Nevis', id: 'd20' },
                { value: 'Saint Lucia', id: 'd21' },
                { value: 'Saint Martin', id: 'd22' },
                { value: 'Saint Vincent and the Grenadines', id: 'd23' },
                { value: 'Sint Eustatius', id: 'd24' },
                { value: 'Sint Maarten', id: 'd25' },
                { value: 'Trinidad and Tobago', id: 'd26' },
                { value: 'Turks and Caicos', id: 'd27' },
                { value: 'US Virgin Islands', id: 'd28' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <SouthAmericaSelectCountry 
              items={[
                { value: 'Argentina', id: 'e0' },
                { value: 'Bolivia', id: 'e1' },
                { value: 'Brazil', id: 'e2' },
                { value: 'Chile', id: 'e3' },
                { value: 'Colombia', id: 'e4' },
                { value: 'Ecuador', id: 'e5' },
                { value: 'Falkland Islands', id: 'e6' },
                { value: 'French Guiana', id: 'e7' },
                { value: 'Guyana', id: 'e8' },
                { value: 'Paraguay', id: 'e9' },
                { value: 'Peru', id: 'e10' },
                { value: 'Suriname', id: 'e11' },
                { value: 'Uruguay', id: 'e12' },
                { value: 'Venezuela', id: 'e13' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <AsiaSelectCountry 
              items={[
                { value: 'Afghanistan', id: 'f0' },
                { value: 'Armenia', id: 'f1' },
                { value: 'Azerbaijan', id: 'f2' },
                { value: 'Bangladesh', id: 'f3' },
                { value: 'Bhutan', id: 'f4' },
                { value: 'Brunei Darussalam', id: 'f5' },
                { value: 'Cambodia', id: 'f6' },
                { value: 'China', id: 'f7' },
                { value: 'Georgia', id: 'f8' },
                { value: 'Hong Kong', id: 'f9' },
                { value: 'India', id: 'f10' },
                { value: 'Indonesia', id: 'f11' },
                { value: 'Japan', id: 'f12' },
                { value: 'Kazakhastan', id: 'f13' },
                { value: 'North Korea', id: 'f14' },
                { value: 'South Korea', id: 'f15' },
                { value: 'Kyrgystan', id: 'f16' },
                { value: 'Laos', id: 'f17' },
                { value: 'Macao', id: 'f18' },
                { value: 'Malaysia', id: 'f19' },
                { value: 'Maldives', id: 'f20' },
                { value: 'Mongolia', id: 'f21' },
                { value: 'Myanmar', id: 'f22' },
                { value: 'Nepal', id: 'f23' },
                { value: 'Pakistan', id: 'f24' },
                { value: 'Philippines', id: 'f25' },
                { value: 'Singapore', id: 'f26' },
                { value: 'Sri Lanka', id: 'f27' },
                { value: 'Taiwan', id: 'f28' },
                { value: 'Tajikistan', id: 'f29' },
                { value: 'Thailand', id: 'f30' },
                { value: 'Timor Leste', id: 'f31' },
                { value: 'Turkmenistan', id: 'f32' },
                { value: 'Uzbekistan', id: 'f33' },
                { value: 'Vietnam', id: 'f34' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <EuropeSelectCountry 
              items={[
                { value: 'Albania', id: 'g0' },
                { value: 'Andorra', id: 'g1' },
                { value: 'Belarus', id: 'g2' },
                { value: 'Bosnia', id: 'g3' },
                { value: 'European Union', id: 'g4' },
                { value: 'Faroe Islands', id: 'g5' },
                { value: 'Gibraltar', id: 'g6' },
                { value: 'Guerney and Aderney', id: 'g7' },
                { value: 'Iceland', id: 'g8' },
                { value: 'Jersey', id: 'g9' },
                { value: 'Kosovo', id: 'g10' },
                { value: 'Liechtenstein', id: 'g11' },
                { value: 'Macedonia', id: 'g12' },
                { value: 'The Isle of Man', id: 'g13' },
                { value: 'Moldova', id: 'g14' },
                { value: 'Monaco', id: 'g15' },
                { value: 'Montenegro', id: 'g16' },
                { value: 'Norway', id: 'g17' },
                { value: 'Russia', id: 'g18' },
                { value: 'San Marino', id: 'g19' },
                { value: 'Serbia', id: 'g20' },
                { value: 'Svalbard and Jan Mayen Islands', id: 'g21' },
                { value: 'Switzerland', id: 'g22' },
                { value: 'Turkey', id: 'g23' },
                { value: 'United Kingdom', id: 'g24' },
                { value: 'Turkey', id: 'g25' },
                { value: 'Ukraine', id: 'g26' },
                { value: 'Vatican City', id: 'g27' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <EuropeanUnionSelectCountry 
              items={[
                { value: 'Austria', id: 'h0' },
                { value: 'Belgium', id: 'h1' },
                { value: 'Bulgaria', id: 'h2' },
                { value: 'Croatia', id: 'h3' },
                { value: 'Czech Republic', id: 'h4' },
                { value: 'Denmark', id: 'h5' },
                { value: 'Estonia', id: 'h6' },
                { value: 'Finland', id: 'h7' },
                { value: 'France', id: 'h8' },
                { value: 'Germany', id: 'h9' },
                { value: 'Greece', id: 'h10' },
                { value: 'Hungary', id: 'h11' },
                { value: 'Ireland', id: 'h12' },
                { value: 'Italy', id: 'h13' },
                { value: 'Latvia', id: 'h14' },
                { value: 'Lithuania', id: 'h15' },
                { value: 'Luxembourg', id: 'h16' },
                { value: 'Malta', id: 'h17' },
                { value: 'Netherlands', id: 'h18' },
                { value: 'Poland', id: 'h19' },
                { value: 'Portugal', id: 'h20' },
                { value: 'Romania', id: 'h21' },
                { value: 'Solvakia', id: 'h22' },
                { value: 'Slovenia', id: 'h23' },
                { value: 'Spain', id: 'h24' },
                { value: 'Sweden', id: 'h25' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <MiddleEastSelectCountry 
              items={[
                { value: 'Bahrain', id: 'i0' },
                { value: 'Iraq', id: 'i1' },
                { value: 'Iran', id: 'i2' },
                { value: 'Israel', id: 'i3' },
                { value: 'Jordan', id: 'i4' },
                { value: 'Kuwait', id: 'i5' },
                { value: 'Lebanon', id: 'i6' },
                { value: 'Oman', id: 'i7' },
                { value: 'Palestine', id: 'i8' },
                { value: 'Qatar', id: 'i9' },
                { value: 'Saudi Arabia', id: 'i10' },
                { value: 'Syria', id: 'i11' },
                { value: 'United Arab Emirates', id: 'i12' },
                { value: 'Yemen', id: 'i13' },
              ]}
            />
          </div>
          <br />
          <br />
          <div style={{margin: '16px', position: 'relative'}}>
            <OceaniaSelectCountry 
              items={[
                { value: 'Australia', id: 'j0' },
                { value: 'Fiji', id: 'j1' },
                { value: 'French Polynesia', id: 'j2' },
                { value: 'Guam', id: 'j3' },
                { value: 'Kiribati', id: 'j4' },
                { value: 'The Marshall Islands', id: 'j5' },
                { value: 'Micronesia', id: 'j6' },
                { value: 'New Calcedonia', id: 'j7' },
                { value: 'New Zealand', id: 'j8' },
                { value: 'Papua New Guinea', id: 'j9' },
                { value: 'Samoa', id: 'j10' },
                { value: 'American Samoa', id: 'j11' },
                { value: 'Solomon Islands', id: 'j12' },
                { value: 'Vanuatu', id: 'j13' },
              ]}
            />
          </div>
          <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </div>
      </Router>
    );
  }
}
 
export default App;