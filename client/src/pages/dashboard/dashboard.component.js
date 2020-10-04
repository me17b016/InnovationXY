import React, { useState, useEffect, Fragment } from 'react'
import './dashboard.styles.css'

import { useHistory } from 'react-router-dom'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Footer from '../../components/footer/footer.component'
import axios from 'axios';
import Interweave from 'interweave'
import ProfilePhoto from '../../assests/news1.jpg'
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import { Helmet } from 'react-helmet';

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

const recents = [
  {recent: "#heart disease"},
  {recent: "#myopia"},
  {recent: "#orthopedics"},
  {recent: "#health"},
  {recent: "#cancer"},
  {recent: "#phthalmology"},
]
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
  const [hospitalSearch, setHospitalSearch] = useState({city: "All", speciality: "Multi Specialist"})
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
    <Fragment>
      <Helmet>
          <title>Dashboard</title>
        </Helmet>
      <TopNavBar/>
      <div className="patient-dashboard-box">
        <div className="patient-dashboard-left">
          <div className="patient-dashboard-recent-list">
            <h3 style={{margin: 0}}>Recent</h3>
            <div style={{marginTop: 10, marginBottom : 30, borderBottom: "1px solid #cfd8dc"}}></div>
            <div>
              {
                recents.map(recent => <div style={{marginBottom:13, marginLeft:12, fontSize:14, color:"#455a64"}}>{recent.recent}</div>)
              }
            </div>
          </div>
          <div className="patient-dashboard-searchfordoctor-box">
            <div className="patient-dashboard-searchfordoctor">
              <center>Search for doctors, clinics, hospitals, etc. </center>
            </div>
            <div>
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
                <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:-17, marginLeft:"5%", marginTop:40, fontSize:20}}>
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
                <button className="patient-dashboard-hospital-search" onClick={onSearchButtonClick}>SEARCH</button>
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
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div className="patient-feed-content"><Interweave content={feed.body} /></div>
                <div style={{marginTop: 0, marginBottom : 0, borderBottom: "1px solid #cfd8dc"}}></div>
                <div style={{paddingTop: 10,height:40, backgroundColor:"#e1f5fe"}}> 
                  <Checkbox icon={<ThumbUpIcon />} checkedIcon={<ThumbUpIcon />} name="checkedH" style={{marginTop:-15, marginLeft:20, fontSize:20}} />
                  <ChatOutlinedIcon style={{marginLeft:50}}/>
                  <ShareOutlinedIcon style={{marginLeft:50}}/>
                  <MoreVertOutlinedIcon style={{marginRight:15, float:"right"}} />
                </div>
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