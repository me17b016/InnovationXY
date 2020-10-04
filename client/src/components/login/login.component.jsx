import React, { useState, useEffect } from 'react'
import './login.styles.css'

import  { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import axios from 'axios'

const useStyles = makeStyles({
  root: {
    minWidth: 475,
    maxWidth: 475,
    maxHeight : 300,
    flex : 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Login = (props) => {

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 1) {
      history.push('/dashboard');
    }
  }, [props])

  
  const classes = useStyles();
  let history = useHistory();
  const [formDate, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('loginerror-not-visible')
  const { email, password} = formDate;

  const onChange = e => {
    setFormData({ ...formDate, [e.target.name] : e.target.value })
    //console.log(e.target.value);
  }
  
  const onClick = async e => {
    e.preventDefault();
    // console.log(email, password)
    axios.post('/api/auth', {email, password})
    .then(response => {
      const data = response.data;
      if (data.valid) {
        setLoginError('loginerror-not-visible')
        // setting login status
        localStorage.setItem('isLoggedIn', 1)
        // setting login name first letter
        let name = data.name;
        name = name[0];
        name = name.toUpperCase()
        localStorage.setItem('login-name', name)
        // setting ispatient status
        localStorage.setItem('userid', data.id);
        if (data.ispatient) {
          localStorage.setItem('ispatient', 1)
          history.push('/dashboard')
        }
        else {
          localStorage.setItem('ispatient', 0)
          history.push('/hospitalprofile')
        }
      }
      else {
        localStorage.setItem('isLoggedIn', 0)
        setLoginError('loginerror-visible')
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="login-box">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" color="primary" style={{fontFamily:"'Playfair Display', serif", fontWeight:500}}>LOGIN</Typography>
          <div style={{marginTop: 10}}>
            <TextField required label="Username" name="email" onChange={e => onChange(e)}/>
          </div>
          <div style={{marginTop: 5}}>
            <TextField required type="password" label="Password" name="password" onChange={e => onChange(e)}/>
          </div>
        </CardContent>
        <CardActions style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div ><button className="login-submit" onClick={e => onClick(e)}>LOGIN</button></div>
        </CardActions>
        <div className={loginError}>Check your email and password</div>
      </Card>
    </div>
  )
}

export default Login