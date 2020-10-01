import React, { useEffect } from 'react'
import './diagnosis.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Footer from '../../components/footer/footer.component'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const RADIAN = Math.PI / 180;   
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + 100;
  const y = cy  - radius;

  return (
    <text x={x} y={y + 20 * index} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" style={{fontSize:12}}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Diagnosis = props => {

  return (
    <div style={{height:"100%", overflow:"hidden"}}>
      <TopNavBar />
      <div className="diagnosis-outerbox">
        <div className="diagnosis-filter-box">
            <div className="diagnosis-title">Discharge Summary</div>
            <div className="diagnosis-filters-overflow">
              <div className="diagnosis-filters">
                <div className="diagnosis-filters-sec-1">
                  Filters
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-2">
                    Categories Diseases/Illness
                    <div style={{fontSize:12, fontWeight:"bold"}}>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Leukemia</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Blood Cancer</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Cancer</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Arrhythmia</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Heart Disease</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Tachycardia</div>
                      <div style={{marginBottom:-10}}><Checkbox color="primary" /> Bradycardia</div>
                    </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-3">
                    Gender
                    <div style={{fontSize:12, fontWeight:"bold"}}>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> Male</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> Female</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> Others</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> All</div>
                      </div>
                    </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-4">
                  Age
                  <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{marginTop: 10,fontSize:12, fontWeight:"bold", flex:1}}>
                      <div>Min</div>
                      <TextField 
                        variant="outlined"
                        style={{marginTop: 5, width : 80}}
                        size="small"
                      />
                    </div>
                    <div style={{marginTop: 10,fontSize:12, fontWeight:"bold", flex:1}}>
                      <div>Max</div>
                      <TextField 
                        variant="outlined"
                        style={{marginTop: 5, width : 80}}
                        size="small"
                      />
                    </div>
                  </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-5">
                    Gender
                    <div style={{fontSize:12, fontWeight:"bold"}}>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> AB+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> AB-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> A+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> A-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> B+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> B-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> O+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox color="primary" /> O-</div>
                      </div>
                    </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-6">
                  Categories Diseases/Illness
                  <div style={{fontSize:12, fontWeight:"bold"}}>
                    <div style={{marginBottom:-10}}><Checkbox color="primary" /> Medification data available</div>
                    <div style={{marginBottom:-10}}><Checkbox color="primary" /> Surgery history available</div>
                    <div style={{marginBottom:-10}}><Checkbox color="primary" /> Immunization record available</div>
                  </div>
                </div> 
              </div> 
            </div>
        </div>
        <div className="diagnosis-charts-box">
          <PieChart width={800} height={400} >
            <Pie
              data={data} 
              cx={500} 
              cy={200} 
              style={{fontSize:11}}
              labelLine={true}
              label
              outerRadius={80} 
              fill="#8884d8"
            >
              {
                // data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Diagnosis;