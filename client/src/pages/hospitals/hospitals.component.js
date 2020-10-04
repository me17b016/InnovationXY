import React, { useState, useEffect} from 'react';
import './hospitals.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component';

import { useHistory } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import { Helmet } from 'react-helmet';

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

import axios from 'axios'

const cities = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Delhi',
    label: 'Delhi',
  },
  {
    value: 'Agra',
    label: 'Agra',
  }
];

const specilities = [
  {
    value: 'Multi Specialist',
    label: 'Multi Speciality',
  },
  {
    value: 'Orthopedics',
    label: 'Orthopedics',
  },
  {
    value: 'Ophthalmology',
    label: 'Ophthalmology',
  }
]

const Hospitals =  props => {
  let history = useHistory()

  const [hospitals, setHospitals] = useState([]);
  const [results, setResults] = useState(0);
  const [hospitalSearch, setHospitalSearch] = useState({city: "All", speciality: "Multi Specialist"})

  useEffect(() => {
    axios.get('/api/hospitalprofile')
    .then(response => {
      let temHospitals = response.data;
      const city = props.match.params.city;
      let speciality = props.match.params.speciality;
      //speciality = speciality.replace(/%20/g, " ")
      console.log(speciality)
      if (city == 'All') {
        
      }
      else {
        let temData = [];
        for (let i = 0; i < temHospitals.length; i++) {
          if (temHospitals[i].city == city) temData.push(temHospitals[i]);
        }
        temHospitals = temData;
      }
      let temData = [];
      for (let i = 0; i < temHospitals.length; i++) {
        if (temHospitals[i].speciality == speciality && speciality !== "Multi Specialist") temData.push(temHospitals[i]);
      }
      for (let i = 0; i < temHospitals.length; i++) {
        if (temHospitals[i].speciality == "Multi Specialist") temData.push(temHospitals[i]);
      }
      temHospitals = temData;
      setHospitals(temHospitals);
      setResults(temHospitals.length);
    })
    .catch(err => console.log(err));
  }, [props])

  const hospitalSearchChange = (name, value) => {
    let temData = hospitalSearch;
    temData[name] = value;
    setHospitalSearch(temData);
  }

  const onSearchButtonClick = () => {
    const link = `/hospitals/${hospitalSearch.city}/${hospitalSearch.speciality}`;
    history.push(link);
  }

  return (
    <div>
      <Helmet>
          <title>Hospitals</title>
        </Helmet>
      <TopNavBar />
      <div style={{width:600, display:"flex", flexDirection:"row", marginLeft:100}}>
        <div style={{flex : 1}}>
          <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17, marginLeft:"5%", marginTop:20, fontSize:20}}>
            City
          </InputLabel>
          <TextField 
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            style={{marginTop: 20, height: 5, width : "90%", marginLeft:"5%"}}
            size="small"
            onChange={e => hospitalSearchChange("city", e.target.value)}
          >
            {cities.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </TextField>
        </div>
        <div style={{flex : 1}}>
          <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17, marginLeft:"5%", marginTop:20, fontSize:20}}>
            Speciality
          </InputLabel>
          <TextField 
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            style={{marginTop: 20, height: 5, width : "90%", marginLeft:"5%"}}
            size="small"
            onChange={e => hospitalSearchChange("speciality", e.target.value)}
          >
          {specilities.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </TextField>
          </div>
           <div style={{flex : 1, marginTop:-20}}><button className="patient-dashboard-hospital-search" onClick={onSearchButtonClick}>SEARCH</button></div>
          </div>
      
      <div style={{marginTop:30}}>
        <div style={{fontSize:14, marginBottom:0, marginLeft:100, color:"#607d8b"}}>{results} results</div>
        {
          hospitals.map(hospital => 
            <Paper variant="outlined" className="hospital-summary-box">
              <div className="hospital-find-card">
                <div className="hospital-find-logo"><img src={hospital.logo} height="150" width="150" style={{borderRadius:5}} /></div>
                <div className="hospital-find-name">
                  <div>{hospital.hospitalname}</div>
                  <div style={{fontSize: 14, fontWeight:500, color: "#455a64"}}>{hospital.speciality} Hospital</div>
                </div>
                <div className="hospital-find-details">
                  <div style={{marginTop:15,marginBottom:20, fontFamily: "'Playfair Display', serif"}}><LocationOnOutlinedIcon style={{marginBottom:-6}}/> {hospital.city}</div>
                  {
                    hospital.anytimeopen ? <div style={{color: "#00c853", fontFamily: "'Playfair Display', serif"}}><ScheduleOutlinedIcon style={{marginBottom:-6}}/> Open 24 x 7 </div> : 
                    <div style={{fontFamily: "'Playfair Display', serif"}}>
                      <div style={{}}><ScheduleOutlinedIcon style={{marginBottom:-6}}/> {hospital.timings[0].days}</div> 
                      <div style={{marginLeft:24, fontSize:15}}> {hospital.timings[0].time} </div>
                    </div>
                  }
                  <div style={{marginTop: 15, fontFamily: "'Playfair Display', serif"}}><PhoneOutlinedIcon style={{marginBottom:-6}}/> Contact No. {hospital.contactno}</div>
                </div>
              </div>
            </Paper>
          )
        }
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Hospitals;