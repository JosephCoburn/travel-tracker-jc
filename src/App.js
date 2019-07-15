import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component"
import VoyagesList from "./components/voyages-list.component";
import ViewVoyage from "./components/view-voyage.component";
import EditVoyage from "./components/edit-voyage.component";
import CreateVoyage from "./components/create-voyage.component";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from './utils/userService';

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
          <Route path="/view/:id" component={ViewVoyage} />
          <Route path="/edit/:id" component={EditVoyage} />
          <Route path="/create" component={CreateVoyage} />
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