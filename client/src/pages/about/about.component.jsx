import React from 'react';
import './about.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component'
import { Helmet } from 'react-helmet'

import rajgargimg from '../../assests/rajgargimg.png'
import prateekimg from '../../assests/prateekimg.jpeg'

const About = props => {

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div>
        <TopNavBar/>
        <div style={{marginTop:50}}><div style={{marginLeft:50, fontSize:35, fontFamily: "'Playfair Display', serif", fontWeight:600}}>Description</div></div>
        <div style={{marginLeft:50, marginTop:-10, padding:30,fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:500}}>We are here to create an impact. We believe in using 
          whatever resource are available and reengineer them to create 
          a new innovative and competent product that can fulfil the 
          needs of the market. We are not only restricted to the 
          competition but have the vision to create a change by providing our small contribution 
          to Technological advancement of the medical field.
        </div>
        <div style={{marginTop:50}}><div style={{marginLeft:50, fontSize:35, fontFamily: "'Playfair Display', serif", fontWeight:600}}>Developers</div></div>
        <div style={{display:"flex", flexDirection:"row", marginTop:40, marginBottom: 100, overflowY:"auto"}}>
          <div style={{flex: 1}}>
            <div style={{width:"90%", marginLeft:"5%", fontFamily: "'Playfair Display', serif", fontWeight:600}}>
              <center>
                <img height={300} width={240} src={rajgargimg} alt="Raj Garg"/>
                <p style={{marginTop:5, fontSize:20}}>RAJ GARG</p>
                <p style={{marginTop:-15, fontSize:18}}>IIT, TIRUPATI</p>
                <p style={{marginTop:-15, color:"#546e7a"}}>Frontend (Reactjs, MaterialUI), Backend(Nodejs, Expressjs, MongoDB),</p>
                <p style={{marginTop:-15, color:"#546e7a"}}>Android development</p>
              </center>
            </div>
          </div>
          <div style={{flex: 1}}>
            <div style={{width:"90%", marginLeft:"5%", fontFamily: "'Playfair Display', serif", fontWeight:600}}>
              <center>
                <img height={300} width={290} src={prateekimg} alt="Prateek Singh"/>
                <p style={{marginTop:5, fontSize:20}}>PRATEEK SINGH</p>
                <p style={{marginTop:-15, fontSize:18}}>IIT (ISM), DHANBAD</p>
                <p style={{marginTop:-15, color:"#546e7a"}}>Android development, Data Analytics, Machine Learning, Quality Assurance</p>
                {/* <p style={{marginTop:-15, color:"#546e7a"}}>Android development</p> */}
              </center>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default About;