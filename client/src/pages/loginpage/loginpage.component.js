import React from 'react'
import './loginpage.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Login from '../../components/login/login.component'
import Footer from '../../components/footer/footer.component'

const LoginPage = () => {
  return (
    <div className="loginpage">
      <TopNavBar/>
      <center><Login /></center>
      <Footer />
    </div>
  );
}

export default LoginPage