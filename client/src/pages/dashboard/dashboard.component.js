import React, { useState, useEffect, Fragment } from 'react'
import './dashboard.styles.css'

import { useHistory } from 'react-router-dom'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Footer from '../../components/footer/footer.component'
import axios from 'axios';
import Interweave from 'interweave'
import ProfilePhoto from '../../assests/news1.jpg'
const Dashboard = props => {
  let history = useHistory()
  const [news, setNews] = useState([
    {heading : "The end of the business card?", id : "23456", daysago : 3},
    {heading : "Ruin your day in one easy step", id : "23456", daysago : 1},
    {heading : "TikTok influencers turn actors", id : "23456", daysago : 3},
    {heading : "How salaries are changing", id : "23456", daysago : 3},
    {heading : "The key to smart hiring", id : "23456", daysago : 3}
  ])

  const [topArticles, setTopArticles] = useState([{}])
  const [dummy, setDummy] = useState(0);
  const [feeds, setFeeds] = useState([
    {organisation : "Mehta's group of hospitals", place : "Agra, Delhi", content : ""},
    {organisation : "Reddy Clinic", place : "Gwalior", content : ""},
    {organisation : "Sharma group of Hospitals", place : "Agra, Meerut", content : ""},
    {organisation : "Shri Venkata groups", place : "Noida", content : ""},
    {organisation : "Shiv Hospital", place : "Chennai", content : ""}
  ])
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') != 1) {

      history.push('/login')
    }
    else {
      axios.get('/api/post')
      .then(response => {
        const posts = response.data;
        let temFeeds = [];
        for (let i = 0; i < posts.length; i++) {
          const post = posts[i];
          let feed = {
            profilephoto : post.profilephoto,
            organisation : post.organisationname,
            place : post.city,
            title: post.title,
            body : post.body,
          }
          temFeeds.push(feed);
        }
        setFeeds(temFeeds);
        if (dummy) {
          setDummy(1);
        }
        else {setDummy(0)}
      })
    }
  }, [props])

  return (
    <Fragment>
      <TopNavBar/>
      <div className="patient-dashboard-box">
        <div className="patient-dashboard-left">
          <div className="patient-dashboard-recent-list">
            <h3 style={{margin: 0}}>Recent</h3>
            <div style={{marginTop: 10, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
          </div>
          <div className="patient-dashboard-searchfordoctor-box">
            <div className="patient-dashboard-searchfordoctor">
              <center>Search for doctors, clinics, hospitals, etc. </center>
            </div>
          </div>
        </div>
        <div className="patient-dashboard-middle">
          {
            feeds.map(feed => (
              <div className="patient-feed-box"> 
                <div className="patient-feed-organisation">
                  <div style={{marginRight: 20}}><img src={feed.profilephoto} height="50" width="50" style={{borderRadius:"50%"}}/></div>
                  <div>
                    <div>{feed.organisation} </div>
                    <div style={{fontSize : "0.7rem"}}>{feed.place} </div>
                  </div>
                </div>
                <div style={{marginTop: 0, marginBottom : 15, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="patient-feed-content"><Interweave content={feed.body} /></div>
              </div>
            ))
          }
        </div>
        <div className="patient-dashboard-right">
          <div className="patient-dashboard-news-list">
            <h3 style={{margin : 0}}>Recent News</h3>
            <div style={{marginTop: 10, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
            <ul>
            {
              news.map(news => (
                <li className="patient-dashboard-news"> 
                  <div className="patient-dashboard-news-heading">{news.heading}</div>
                  <div className="patient-news-days-ago">{news.daysago}d ago</div>
                </li>
              ))
            }
            </ul>
          </div>
          <div className="patient-dashboard-toparticles-list">
            <h3 style={{margin : 0}}>Top Articles</h3>
            <div style={{marginTop: 10, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
            <ul className="patient-dashboard-toparticles-items">

            </ul>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </Fragment>
  )
}

export default Dashboard;