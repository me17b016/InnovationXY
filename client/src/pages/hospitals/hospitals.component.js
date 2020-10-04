import React, { useState, useEffect} from 'react';
import './hospitals.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component';

import Paper from '@material-ui/core/Paper';

import axios from 'axios'

const Hospitals =  props => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    axios.get('/api/hospitalprofile')
    .then(response => {
      const temHospitals = response.data;
      setHospitals(temHospitals)
    })
    .catch(err => console.log(err));
  }, [props])
  return (
    <div>
      <TopNavBar />
      <div>{props.match.params.city}</div>
      <div>
        {
          hospitals.map(hospital => 
            <Paper variant="outlined" className="hospital-summary-box">
              <div className="hospital-find-card">
                <div className="hospital-find-logo"><img src={hospital.logo} height="150" width="150" style={{borderRadius:5}} /></div>
                <div className="hospital-find-name">{hospital.hospitalname}</div>
                <div className="hospital-find-details"></div>
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