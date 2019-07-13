import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.component"
import VoyagesList from "./components/voyages-list.component";
import EditVoyage from "./components/edit-voyage.component";
import CreateVoyage from "./components/create-voyage.component";
 


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={VoyagesList} />
        <Route path="/edit/:id" component={EditVoyage} />
        <Route path="/create" component={CreateVoyage} />
      </div>
    </Router>
  );
}
 
export default App;