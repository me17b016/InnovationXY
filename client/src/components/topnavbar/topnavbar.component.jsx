import React, { Fragment } from 'react';
import './topnavbar.styles.css';

import Footer from '../footer/footer.component'

import { Paper } from '@material-ui/core';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const TopNavBar = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef = React.useRef(null);

  const logout = () => {
    localStorage.setItem('isLoggedIn', 0);
    console.log('click')
    history.push('/login')
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle2 = () => {
    setOpen2((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClose2 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const PatientOrHospital = () => {
    if (localStorage.getItem('ispatient') == 1) {
      return (
        <div>
          <div style={{cursor:'pointer', border:'solid 2px #01579b', borderRadius: "50%", height : 34, width:34, background: "#039be5", color : "white", marginTop:-4}} onClick={handleToggle2}> <center>{localStorage.getItem('login-name')}</center> </div>
          <Popper open={open2} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose2}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose2}><Link to="/profile"> Profile </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/dashboard"> Dashboard </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><div onClick={logout}>Logout</div></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
          </Popper>
        </div> 
      );
    }
    else {
      return (
        <div>
          <div style={{cursor:'pointer', border:'solid 2px #01579b', borderRadius: "50%", height : 34, width:34, background: "#039be5", color : "white", marginTop:-4}} onClick={handleToggle2}> <center>{localStorage.getItem('login-name')}</center> </div>
          <Popper open={open2} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose2}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose2}><Link to="/hospitalprofile"> Profile </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/hospitaldiagnosis"> Diagnosis </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/hospitalposts"> Posts </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/hospitalarticles"> Articles </Link></MenuItem>
                    <MenuItem onClick={handleClose2}><div onClick={logout}>Logout</div></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
          </Popper>
        </div> 
      );
    }
  }

  return (
  <Fragment>
    <Paper elevation={1} square className="topnavbar-nav"> 
      <div className="topnavbar-box-logo">
        <div className="topnavbar-logo">
          <Link to="/" >XYInnovation</Link>
        </div>
      </div>
      <div className="topnavbar-box-navigations">
        <div className="topnavbar-navigations">
          <div className="topnavbar-apps">
            <AppsTwoToneIcon color="primary" 
              style={{ fontSize: 30 }}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            />
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}><Link to="/statistics"> Statistics </Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/documentaion"> Documentaion </Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/support"> Support </Link></MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <div className="topnavbar-login">
            {
            localStorage.getItem("isLoggedIn") == 1 ? 
            <PatientOrHospital />
              : <Link to="/login"> LOGIN </Link>}
          </div>
        </div>
      </div>
    </Paper>
  </Fragment>
  );
}

export default TopNavBar;