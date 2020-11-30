
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";



import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UserLogin from "./Pages/UserLogin";
import UserReg from "./Pages/UserReg";
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/UserLogin" exact component={UserLogin} />
                    <Route path="/UserReg" exact component={UserReg} />
                </Switch>
            </Router>
        )
    }
}