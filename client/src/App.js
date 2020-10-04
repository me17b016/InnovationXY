import React, { Component } from 'react';
import BlogEditor from './components/blogeditor/blogeditor.component'

import './App.css'

import LandingPage from './pages/landingpage/landingpage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import PatientProfile from './pages/patientprofile/patientprofile.component';
import HospitalProfile from './pages/hospitalprofile/hospitalprofile.component';
import Diagnosis from './pages/diagnosis/diagnosis.component';

import Hospitals from './pages/hospitals/hospitals.component';

import HospitalPosts from './pages/hospitalposts/hospitalposts.component';
import HospitalArticles from './pages/hospitalarticles/hospitalarticles.component';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={PatientProfile} />
        <Route path="/hospitalprofile" component={HospitalProfile} />
        <Route path="/hospitaldiagnosis" component={Diagnosis} />
        <Route path="/hospitals/:city/:speciality" component={Hospitals} />
        <Route exact path="/hospitalposts" component={HospitalPosts} />
        <Route exact path="/hospitalarticles" component={HospitalArticles} />
      </Switch>
    </Router>
  );
  
  export default App;