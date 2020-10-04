import React, { useState, useEffect } from 'react'
import './diagnosis.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Footer from '../../components/footer/footer.component'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import TablePagination from '../../components/tablepagination/tablepagination.component';

import PieChartGender from '../../components/genderpiechart/genderpiechart.component';
import PieChartBloodType from '../../components/bloodtypepiechart/bloodtypepiechart.component';

import { Helmet } from 'react-helmet';

import img11 from '../../assests/img1.1.jpeg';
import img12 from '../../assests/img1.2.jpeg';
import img13 from '../../assests/img1.3.jpeg';
import img21 from '../../assests/img2.1.jpeg';
import img22 from '../../assests/img2.2.jpeg';
import img23 from '../../assests/img2.3.jpeg';
import img31 from '../../assests/img3.1.jpeg';
import img32 from '../../assests/img3.2.jpeg';
import img33 from '../../assests/img3.3.jpeg';
import img41 from '../../assests/img4.1.jpeg';
import img42 from '../../assests/img4.2.jpeg';
import img43 from '../../assests/img4.3.jpeg';
import img44 from '../../assests/img4.4.jpeg';
import imgg1 from '../../assests/g1.png';
import imgg2 from '../../assests/g2.jpg';
import imgg3 from '../../assests/g3.png';

import axios from 'axios';

const Diagnosis = props => {
  const [dummy, setDummy] = useState(0);
  const [patientsData, setPatientsData] = useState([]);
  const [diseaseCategory, setDiseaseCategory] = useState({_102 : false, _101:false, _100:false, _110:false, _108:false, _111:false,_112:false});
  const [sexCategory, setSexCategory] = useState({male: false, female: false, other: false, all: false});
  const [ageCategory, setAgeCategory] = useState({min : 0, max: 110});
  const [bloodCategory, setBloodCategory] = useState({ABP : false, APN : false, AP: false, AN: false, BP: false, BN: false, OP: false, ON: false})
  const [availableCategory, setAvaiableCategory] = useState({ medification: false, surgery: false, immunization: false})
  useEffect(() => {
    axios.get('/api/patientdatainsert')
    .then(res => {
      const data = res.data;
      // console.log(data)
      setPatientsData(data);
    })
  }, [props])

  const onFilterClick = () => {
    axios.post('/api/patientdatainsert/filter', {diseaseCategory, sexCategory, ageCategory, bloodCategory, availableCategory})
    .then(res => {
      const data = res.data;
      //console.log(data)
      setPatientsData(data);
      if (dummy) setDummy(0);
      else setDummy(1);
    })
  }

  const clearAllFilters = () => {
    setDiseaseCategory({_102 : false, _101:false, _100:false, _110:false, _108:false, _111:false,_112:false});
    setSexCategory({male: false, female: false, other: false, all: false});
    setAgeCategory({min : 0, max: 110});
    setBloodCategory({ABP : false, APN : false, AP: false, AN: false, BP: false, BN: false, OP: false, ON: false})
    setAvaiableCategory({ medification: false, surgery: false, immunization: false})
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  const diseaseCategoryChange = (name, value) => {
    let temDiseaseCategory = diseaseCategory;
    temDiseaseCategory[name] = value;
    console.log(temDiseaseCategory)
    setDiseaseCategory(temDiseaseCategory);
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  const sexCategoryChange = (name, value) => {
    let temSexCategory = sexCategory;
    temSexCategory[name] = value;
    setSexCategory(temSexCategory);
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  const ageCategoryChange = (name, value) => {
    let temAgeCategory = ageCategory;
    temAgeCategory[name] = value;
    setAgeCategory(temAgeCategory);
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  const bloodCategoryChange = (name, value) => {
    let temBloodCategory = bloodCategory;
    temBloodCategory[name] = value;
    setBloodCategory(temBloodCategory);
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  const availableCategoryChange = (name, value) => {
    let temAvailableCategory = availableCategory;
    temAvailableCategory[name] = value;
    setAvaiableCategory(temAvailableCategory);
    if (dummy) setDummy(0);
    else setDummy(1);
  }

  return (
    <div style={{height:"100%", overflow:"hidden"}}>
      <Helmet>
          <title>Discharge Summary</title>
        </Helmet>
      <TopNavBar />
      <div className="diagnosis-outerbox">
        <div className="diagnosis-filter-box">
            <div className="diagnosis-title">Discharge Summary</div>
            <div className="diagnosis-filters-overflow">
              <div className="diagnosis-filters">
                <div className="diagnosis-filters-sec-1">
                  <div style={{flex: 2}}>Filters</div>
                  <button onClick={clearAllFilters} style={{marginleft:10, flex: 1, backgroundColor:"#f44336", color:"white"}}>clear all</button>
                </div>
                
                <button style={{flex: 1, backgroundColor:"#1de9b6", color:"white", outline: "none", borderRadius:6, height: 30, width:"80%", marginLeft:"10%", marginTop:20, marginBottom:10, fontWeight:"bold" ,fontSize:16, border:"1px solid #bdbdbd"}} onClick={onFilterClick}>Done</button>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-2">
                    Categories Diseases/Illness
                    <div style={{fontSize:12, fontWeight:"bold"}}>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_102", e.target.checked)} checked={diseaseCategory._102} color="primary" /> Leukemia</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_101", e.target.checked)} checked={diseaseCategory._101} color="primary" /> Blood Cancer</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_100", e.target.checked)} checked={diseaseCategory._100} color="primary" /> Cancer</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_110", e.target.checked)} checked={diseaseCategory._110} color="primary" /> Arrhythmia</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_108", e.target.checked)} checked={diseaseCategory._108} color="primary" /> Heart Disease</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_111", e.target.checked)} checked={diseaseCategory._111} color="primary" /> Tachycardia</div>
                      <div style={{marginBottom:-10}}><Checkbox onChange={e => diseaseCategoryChange("_112", e.target.checked)} checked={diseaseCategory._112} color="primary" /> Bradycardia</div>
                    </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-3">
                    Gender
                    <div style={{fontSize:12, fontWeight:"bold"}}>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => sexCategoryChange("male", e.target.checked)} color="primary" checked={sexCategory.male}/> Male</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => sexCategoryChange("female", e.target.checked)} color="primary" checked={sexCategory.female}/> Female</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => sexCategoryChange("other", e.target.checked)} color="primary" checked={sexCategory.other}/> Others</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => sexCategoryChange("all", e.target.checked)} color="primary" checked={sexCategory.all}/> All</div>
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
                        value={ageCategory.min}
                        onChange={e => ageCategoryChange("min", e.target.value)}
                        size="small"
                      />
                    </div>
                    <div style={{marginTop: 10,fontSize:12, fontWeight:"bold", flex:1}}>
                      <div>Max</div>
                      <TextField 
                        variant="outlined"
                        style={{marginTop: 5, width : 80}}
                        value={ageCategory.max}
                        onChange={e => ageCategoryChange("max", e.target.value)}
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
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("ABP", e.target.checked)} checked={bloodCategory.ABP} color="primary" /> AB+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("ABN", e.target.checked)} checked={bloodCategory.ABN} color="primary" /> AB-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("AP", e.target.checked)} checked={bloodCategory.AP} color="primary" /> A+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("AN", e.target.checked)} checked={bloodCategory.AN} color="primary" /> A-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("BP", e.target.checked)} checked={bloodCategory.BP} color="primary" /> B+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("BN", e.target.checked)} checked={bloodCategory.BN} color="primary" /> B-</div>
                      </div>
                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("OP", e.target.checked)} checked={bloodCategory.OP} color="primary" /> O+</div>
                        <div style={{marginBottom:-10, flex:1}}><Checkbox onChange={e => bloodCategoryChange("ON", e.target.checked)} checked={bloodCategory.ON} color="primary" /> O-</div>
                      </div>
                    </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="diagnosis-filters-sec-6">
                  Availability
                  <div style={{fontSize:12, fontWeight:"bold"}}>
                    <div style={{marginBottom:-10}}><Checkbox onChange={e => availableCategoryChange("medification", e.target.checked)} checked={availableCategory.medification} color="primary" /> Medification data available</div>
                    <div style={{marginBottom:-10}}><Checkbox onChange={e => availableCategoryChange("surgery", e.target.checked)} checked={availableCategory.surgery} color="primary" /> Surgery history available</div>
                    <div style={{marginBottom:-10}}><Checkbox onChange={e => availableCategoryChange("immunization", e.target.checked)} checked={availableCategory.immunization} color="primary" /> Immunization record available</div>
                  </div>
                </div> 
              </div> 
            </div>
        </div>
        <div className="diagnosis-charts-box">
          <div style={{marginTop:20, marginBottom:40}}>
            <div style={{marginLeft:20, marginBottom: 15, fontSize: 18, fontWeight: 600, fontFamily: "'Playfair Display', serif"}}>Global Trends/Charts related to query </div>
            <div style={{display:"flex", flexDirection:"row", overflowX:"auto"}}>
              <div style={{flex: 1, marginRight:20}}><img height={350} width={450} src={imgg1} alt="imgg1" /></div>
              <div style={{flex: 1, marginRight:20}}><img height={400} width={450} src={imgg2} alt="imgg2" /></div>
              <div style={{flex : 1}}><img height={350} width={550} src={imgg3} alt="imgg3" /></div>
            </div>
          </div>
          <div style={{fontSize:14, marginBottom:5, marginLeft:10, color:"#607d8b"}}>{patientsData.length} results</div>
          <div style={{marginLeft:10,marginBottom:100, display:"flex", flexDirection:"row"}}>
            <div className="diagnosis-table"><TablePagination data={patientsData}/></div>
            <div className="diagnosis-dynamic-charts">
              <PieChartGender data={patientsData}/>
              <PieChartBloodType data={patientsData}/>
            </div>
          </div>
          <div>
            <center><div style={{fontSize:19, color: "#f44336",fontWeight:600, fontFamily: "'Playfair Display', serif", marginBottom:20, width:"50%",border:"1px solid #78909c", backgroundColor:"#cfd8dc", borderRadius:4}}>Agewise distribution in relation with a disease</div></center>
            <div style={{ display: "flex", color:"#6200ea",flexDirection:"row", fontSize: 15, fontWeight: 600, fontFamily: "'Playfair Display', serif"}}>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Frequency of people form different age-group having DISEASE_110</div><img height={300} width="95%" src={img11} alt="img11"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Frequency of people from different age-group having and not having DISEASE_110</div><img height={300} width="95%" src={img12} alt="img12"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>How Likely it is to have or not have disease_110 among different age groups</div><img height={300} width="95%" src={img13} alt="img13"/></div>
            </div>
          </div>
          <div style={{marginTop:40}}>
            <center><div style={{fontSize:19, color: "#f44336",fontWeight:600, fontFamily: "'Playfair Display', serif", marginBottom:20, width:"50%",border:"1px solid #78909c", backgroundColor:"#cfd8dc", borderRadius:4}}>Highly correlated factor associated with a disease</div></center>
            <div style={{ display: "flex", color:"#6200ea",flexDirection:"row", fontSize: 15, fontWeight: 600, fontFamily: "'Playfair Display', serif"}}>
              <div style={{flex: 1}}><div style={{width:"95%"}}>TOP 10 Positively Correlated features associated with DISEASE_110</div><img height={280} width="95%" src={img21} alt="img21"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>TOP 10 Negatively Correlated features associated with DISEASE_110</div><img height={280} width="95%" src={img22} alt="img22"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>TOP 10 Correlated features(both + and -) associated with DISEASE_110</div><img height={280} width="95%" src={img23} alt="img23"/></div>
            </div>
          </div>
          <div style={{marginTop:40}}>
            <center><div style={{fontSize:19, color: "#f44336",fontWeight:600, fontFamily: "'Playfair Display', serif", marginBottom:20, width:"50%",border:"1px solid #78909c", backgroundColor:"#cfd8dc", borderRadius:4}}>Probability of having other disease when already having one</div></center>
            <div style={{ display: "flex", color:"#6200ea",flexDirection:"row", fontSize: 15, fontWeight: 600, fontFamily: "'Playfair Display', serif"}}>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Distribution of Population</div><img height={300} width="95%" src={img31} alt="img31"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>% of people having other disease when already having DISEASE_100</div><img height={300} width="95%" src={img32} alt="img32"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Relation of DISEASE_100 with other diseases</div><img height={300} width="95%" src={img33} alt="img33"/></div>
            </div>
          </div>
          <div style={{marginTop:40, marginBottom:100}}>
            <center><div style={{fontSize:19, color: "#f44336",fontWeight:600, fontFamily: "'Playfair Display', serif", marginBottom:20, width:"65%",border:"1px solid #78909c", backgroundColor:"#cfd8dc", borderRadius:4}}>Visualizing relationship amongst factors in association with the disease</div></center>
            <div style={{ display: "flex", color:"#6200ea",flexDirection:"row", fontSize: 15, fontWeight: 600, fontFamily: "'Playfair Display', serif"}}>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Frequency of people form different age-group having DISEASE_110</div><img height={300} width="95%" src={img41} alt="img41"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>Frequency of people from different age-group having and not having DISEASE_110</div><img height={300} width="95%" src={img42} alt="img42"/></div>
              <div style={{flex: 1}}><div style={{width:"95%"}}>How Likely it is to have or not have disease_110 among different age groups</div><img height={300} width="95%" src={img43} alt="img43"/></div>
            </div>
            <div style={{marginTop: 15,fontSize:15, color: "#6200ea",fontWeight:600, fontFamily: "'Playfair Display', serif", width:"50%"}}><div style={{width:"95%"}}>How likely we are to see different combination of BUN and URIC_ACID in peopel having disease_110</div><img height={400} width="95%" src={img44} alt="img44"/></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Diagnosis;