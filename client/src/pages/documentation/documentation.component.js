import React from 'react';
// import './about.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component'
import { Helmet } from 'react-helmet'

const Documentation = props => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
      <div>
        <TopNavBar/>
        <div>
          <div style={{marginLeft:50, marginTop:20,fontSize:35, fontFamily: "'Playfair Display', serif", fontWeight:600}}>Video <u><a href="https://youtu.be/pJAGZqbwXNU" target="_blank">Link</a></u></div>
          <div style={{marginLeft:50, marginTop:30, fontSize:35, fontFamily: "'Playfair Display', serif", fontWeight:600}}>
            Login from Patient Side
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: rajgarg383@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: 123456</div>
          </div>
          <div style={{marginLeft:50, marginTop:30, fontSize:35, fontFamily: "'Playfair Display', serif", fontWeight:600}}>
            Login from Hospital Side
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: mehtahospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: lifelinehospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: newmeeruthospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: tayalnursinghome@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: tarunsinghalhospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: gyannursinghome@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: lokpriyahospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: bansalhospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: vinodhospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
            <div style={{marginLeft:50, marginTop:20, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>email: indirahospital@gmail.com</div>
            <div style={{marginLeft:50, marginTop:0, fontSize:20, fontFamily: "'Playfair Display', serif", fontWeight:600}}>password: #1234</div>
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Documentation;