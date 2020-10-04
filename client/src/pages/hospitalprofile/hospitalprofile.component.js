import React, { Fragment, useState, useEffect, useReducer } from 'react'
import './hospitalprofile.styles.css'

import { Link, Route, Switch, Redirect } from 'react-router-dom'

import TopNavBar from '../../components/topnavbar/topnavbar.component'

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Helmet } from 'react-helmet';

import axios from 'axios';

const HospitalProfile = props => {

  // For Overview
  const [ismulti, setMulti] = useState(false);
  const [data, setData] = useState({
    id : "",
    hospitalname: "",
    logo : "",
    speciality: "",
    anytimeopen : true,
    timings : [],
    city : "",
    contactno : ""
  });
  const [dummy, setDummy] = useState(1);
  useEffect(() => {
    let temData = {
      id : localStorage.getItem('userid'),
      hospitalname: "",
      logo : "",
      speciality: "",
      anytimeopen : true,
      timings : [],
      city : "",
      contactno : ""
    }
    //let body = {id : localStorage.getItem('userid')} 
    axios.get(`/api/hospitalprofile/${localStorage.getItem('userid')}`)
    .then(response =>{
      let data = response.data;
      temData = data;
      if (data.speciality == "Multi Specialist") {
        setMulti(true);
      }
      console.log(data)
      temData.id = localStorage.getItem('userid');
    }).then(() => {
      setData(temData)
      console.log(temData)
      if (dummy) {
        setDummy(0);
      }
      else {
        setDummy(1);
      }
    })
  }, [props])

  const stateChange = (name, value) => {
    let temData = data;
    if (name == "speciality") {
      if (value === true) {
        setMulti(true)
        temData[name] = "Multi Specialist"
      }
      else if (value === false) {
        temData[name] = document.getElementById('hospitalspecilitycommaseperatedvalue').value
        setMulti(false);
      }
      else {
        temData[name] = value
      }
      setData(temData);
      if (dummy) {
        setDummy(0);
      }
      else {
        setDummy(1);
      }
    }
    else if (name == "logo") {
      const file = value.target.files[0];
      getBase64(file).then(base64 => {
        temData[name] = base64;
      }).then(() => {
          setData(temData);
          if (dummy) {
            setDummy(0);
          }
          else {
            setDummy(1);
          }
      })
    }
    else {
      temData[name] = value;
      setData(temData);
      if (dummy) {
        setDummy(0);
      }
      else {
        setDummy(1);
      }
    }
    //console.log(temData.logo)
    //useState()[1];
  }

  const addTiming = () => {
    console.log("click")
    let newTiming = {
      id : "",
      days : "",
      time : ""
    }
    newTiming.id = data.timings.length
    let temData = data;
    temData.timings.push(newTiming);
    console.log(temData)
    setData(temData)
    if (dummy) {
      setDummy(0);
    }
    else {
      setDummy(1);
    }
  }

  const timingsChange = (id, name, value) => {
    let temData = data;
    for (let i = 0; i < temData.timings.length; i++) {
      if (temData.timings[i].id == id) {
        temData.timings[i][name] = value
      }
    }
    setData(temData)
    if (dummy) {
      setDummy(0);
    }
    else {
      setDummy(1);
    }
  }

  const saveOverview = () => {
    console.log(data)
    axios.post('/api/hospitalprofile', data)
    .then(response => {
      console.log(response.data)
    })
  }

  return (
    <Fragment>
      <Helmet>
          <title>Hospital Profile</title>
        </Helmet>
      <TopNavBar/>
      <div className="hospitalprofile-box">
        <div className="hospitalprofile-sidenavbar">
          <div className="hospitalprofile-sidenavbar-title">Hospital Profile</div>
          <div className="hospitalprofile-sidenavbar-link"><Link to="/hospitalprofile/overview">Overview</Link></div>
          <div className="hospitalprofile-sidenavbar-link"><Link to="/hospitalprofile/details">Details</Link></div>
        </div>
        <div className="hospitalprofile-content-box">
          <Switch>
            <Route exact path="/hospitalprofile" 
            render={() => <Redirect to="/hospitalprofile/overview"/>}/>
            <Route exact path="/hospitalprofile/overview">
              <div className="hospitalprofile-overview-box">
                <div className="hospitalprofile-overview-title">Overview</div>
                <div className="hospitalprofile-overview-content">
                  <div className="hospitalprofile-overview-content-left">
                    <div style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
                      <img src={data.logo} alt="Hospital Logo" height="280" width="250"/>
                    </div>
                    <div style={{textAlign:"center"}}>
                      <input  
                        type="file" 
                        accept="image/x-png,image/gif,image/jpeg" 
                        onChange={e => stateChange("logo", e)}
                      />
                    </div>
                  </div>
                  <div className="hospitalprofile-overview-content-right">
                      <div style={{marginBottom:20}}>
                        <button onClick={saveOverview}>Save</button>
                      </div>
                      <div style={{marginBottom:20}}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                          Hospital Name:
                        </InputLabel>
                        <TextField 
                          variant="outlined"
                          style={{marginTop: 25, width : 415}}
                          size="small"
                          value={data.hospitalname}
                          onChange={e => stateChange("hospitalname", e.target.value)}
                        />
                      </div>
                      <div style={{marginBottom:20}}> 
                        <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-2}}>
                          Speciality:
                        </InputLabel>
                        <div style={{fontFamily:"'Roboto', sans-serif", fontWeight:550}}>
                          <Checkbox 
                          color="primary"
                          checked={ismulti}
                          onChange={e => stateChange("speciality", e.target.checked)}
                          /> Multi Specialist ?
                        </div>
                        <div style={{fontFamily:"'Roboto', sans-serif", fontWeight:600}}>If not then, write speciality(s) with comma seperated value:-</div>
                        <TextField 
                          id ="hospitalspecilitycommaseperatedvalue"
                          variant="outlined"
                          style={{marginTop: 10, width : 415}}
                          size="small"
                          value={data.speciality}
                          onChange={e => stateChange("speciality", e.target.value)}
                        />
                      </div>
                      <div style={{marginBottom:20}}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-2}}>
                          Contact Number:
                        </InputLabel>
                        <TextField 
                          variant="outlined"
                          style={{marginTop: 10, width : 415}}
                          size="small"
                          value={data.contactno}
                          onChange={e => stateChange("contactno", e.target.value)}
                        />
                      </div>
                      <div style={{marginBottom:20}}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-2}}>
                          City:
                        </InputLabel>
                        <TextField 
                          variant="outlined"
                          style={{marginTop: 10, width : 415}}
                          size="small"
                          value={data.city}
                          onChange={e => stateChange("city", e.target.value)}
                        />
                      </div>
                      <div style={{marginBottom:20}}>
                        <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-2}}>
                          Timings:
                        </InputLabel>
                        <div style={{fontFamily:"'Roboto', sans-serif", fontWeight:550}}>
                          <Checkbox 
                          color="primary"
                          checked={data.anytimeopen}
                          onChange={e => stateChange("anytimeopen", e.target.checked)}
                          /> <span style={{color:"#00e676"}}>Open 24 x 7 </span>?
                        </div>
                        <div style={{fontFamily:"'Roboto', sans-serif", fontWeight:600}}>If not then, Add Timings:-</div>
                        <button onClick={addTiming}>Add timing</button>
                        <div>
                          {
                            data.timings.map((timing) => (
                              <div key={timing.id}>
                                <TextField 
                                  variant="outlined"
                                  style={{marginTop: 10, width : 150, marginRight: 20}}
                                  size="small"
                                  defaultValue={timing.days}
                                  onChange={e => timingsChange(timing.id, "days", e.target.value)}
                                />
                                <TextField 
                                  variant="outlined"
                                  style={{marginTop: 10, width : 150}}
                                  size="small"
                                  defaultValue={timing.time}
                                  onChange={e => timingsChange(timing.id, "time", e.target.value)}
                                />
                              </div>
                            ))
                          } 
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/hospitalprofile/details">
            <div className="hospitalprofile-details-box">
                <div className="hospitalprofile-details-title">Details</div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

export default HospitalProfile;