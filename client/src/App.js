import React, { Component } from 'react';
import BlogEditor from './components/blogeditor/blogeditor.component'

import './App.css'

import LandingPage from './pages/landingpage/landingpage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import PatientProfile from './pages/patientprofile/patientprofile.component';
import HospitalProfile from './pages/hospitalprofile/hospitalprofile.component';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={PatientProfile} />
        <Route path="/hospitalprofile" component={HospitalProfile} />
      </Switch>
    </Router>
  );
  
  export default App;