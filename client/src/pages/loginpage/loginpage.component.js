import React from 'react'
import './loginpage.styles.css'

import TopNavBar from '../../components/topnavbar/topnavbar.component'
import Login from '../../components/login/login.component'
import Footer from '../../components/footer/footer.component'
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div className="loginpage">
      <Helmet>
          <title>Login</title>
        </Helmet>
      <TopNavBar/>
      <center><Login /></center>
      <Footer />
    </div>
  );
}

export default LoginPage