import React, { Component } from 'react'
import './landingpage.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'

// Testing 
import { Markup } from 'interweave'
import BlogEditor from '../../components/blogeditor/blogeditor.component'
import TwoWayBinding from '../../components/blog/blog.component'
import Footer from '../../components/footer/footer.component'
import landingimg from '../../assests/landingimg.jpeg';
import { Helmet } from 'react-helmet';

class LandingPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      str : ""
    };
  }
  
  handleChange = val => {
    this.setState({str : val});
  }

  render() {
    
    return (
      <div>
        <Helmet>
          <title>InnovationXY</title>
        </Helmet>
        <TopNavBar/>
        <img className="landingimg" src={landingimg} width="100%" alt="landingimg"/>
        <Footer />
      </div>
    );
  }
}

export default LandingPage