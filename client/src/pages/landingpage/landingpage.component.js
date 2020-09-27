import React, { Component } from 'react'
import './landingpage.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'

// Testing 
import { Markup } from 'interweave'
import BlogEditor from '../../components/blogeditor/blogeditor.component'
import TwoWayBinding from '../../components/blog/blog.component'
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
        <TopNavBar/>
        <Markup content={this.state.str} />
        {/* <div dangerouslySetInnerHTML={{__html: this.state.str}} /> */}
        {/* <TwoWayBinding/> */}
        {/* < */}
        <BlogEditor handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default LandingPage