import React, { useState } from 'react'
import './patientprofile.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Footer from '../../components/footer/footer.component'

import Paper from '@material-ui/core/Paper';

import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  }
];

const bloodgroups = [
  {
    value: 'O+',
    label: 'O+',
  },
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'O-',
    label: 'O-',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B-',
    label: 'B-',
  },
  {
    value: 'AB+',
    label: 'AB+',
  },
  {
    value: 'AB-',
    label: 'AB-',
  }
];


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const PatientProfile = props => {

  const [data, setData] = useState({
    name : "", phoneno : "", email : "",
    gender : "", dob: Date, bloodgroup : "",
    houseno : "", street : "", city : "", 
    state : "", country : "", pincode : ""
  })

  const onChange = e => {
    console.log(e.target.value);
  }

   return (
     <React.Fragment>
       <TopNavBar />
      <div className="patient-profile-box">
        <Paper className="patient-profile-card">
          <h1>User's Profile</h1>
          <hr style={{width:"100%",textAlign:"left",marginLeft:0, marginBottom:35}}/>
          <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
              Name
          </InputLabel>
          <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}
          />
          <button className="user-profile-save-button">SAVE</button>
          <div style={{marginTop: 30, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
          <div className="patient-profile-basic">
            <div className="patient-profile-basic-box1">
              <div className="patient-profile-phnumber">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Phone number
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-email">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Email Address
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-gender">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Gender
                </InputLabel>
                <TextField
                  select
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  style={{marginTop: 25, width : 215}}
                  size="small"
                >
                  {genders.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="patient-profile-basic-box2">
              <div className="patient-profile-phnumber">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Date of Birth
                </InputLabel>
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  style={{marginTop: 25, width : 215}}
                  size="small"
                />
              </div>
              <div className="patient-profile-email">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Blood Group
                </InputLabel>
                <TextField
                  select
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  style={{marginTop: 25, height: 5, width : 215}}
                  size="small"
                >
                  {bloodgroups.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
              <div className="patient-profile-gender">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Occupation
                </InputLabel>
                <TextField
                  variant="outlined"
                  style={{marginTop: 25, height: 5, width : 215}}
                  size="small"
                />
              </div>
            </div>
            <div style={{marginTop: 30, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
          </div>
          <div>
            <div className="patient-profile-basic-box1">
              <div className="patient-profile-phnumber">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  House No./ Street Name/ Area
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-email">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Colony / Street / Locality
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-gender">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  City
                </InputLabel>
                <TextField
                  variant="outlined"
                  style={{marginTop: 25, width : 215}}
                  size="small"
                />
              </div>
            </div>
            <div className="patient-profile-basic-box1">
              <div className="patient-profile-phnumber">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  State
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-email">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Country
                </InputLabel>
                <BootstrapInput defaultValue={localStorage.getItem('login-name')} onChange={e => onChange(e)}/>
              </div>
              <div className="patient-profile-gender">
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                  Pincode
                </InputLabel>
                <TextField
                  variant="outlined"
                  style={{marginTop: 25, width : 215}}
                  size="small"
                />
              </div>
            </div>
            <div style={{marginTop: 30, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
          </div>
          <div>
            <div>
              <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                Phone No.
              </InputLabel>
              <TextField
                variant="outlined"
                style={{marginTop: 25, width : 215}}
                size="small"
              />
            </div>
            <div style={{marginTop:20}}>
              <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17}}>
                Disease (Comma seperated value)
              </InputLabel>
              <TextField
                variant="outlined"
                style={{marginTop: 25, width : 415}}
                size="small"
              />
            </div>
          </div>
        </Paper>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PatientProfile;