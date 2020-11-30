
import React, { Component } from 'react'
import logo_white from '../images/logo_white.png';
import { Button } from '@material-ui/core';

import history from '../history';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <navigator className="navigator">
        <div className="logo">
          <img src={logo_white} alt="" height="50px" onClick={() => history.push('/')}/>
        </div>
        <div className="navivation_buttons">
          <Button varient="default" className="nav_buttons" onClick={() => history.push('/Login')}>
            Admin Login
          </Button>
          <Button varient="default" className="nav_buttons" onClick={() => history.push('/UserLogin')}>
            User Login
          </Button>
          <Button varient="default" className="nav_buttons" onClick={() => history.push('/UserReg')}>
            User Registration
          </Button>
        </div>
      </navigator>
            </div>
        )
    }
}
