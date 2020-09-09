import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Login from "./Login";
import ListEmployees from "./ListEmployees";
import CreateEmployee from "./CreateEmployee";
import EditEmployee from "./EditEmployee";

 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>EMS Employee Management System</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Login">Login</NavLink></li>
              <li><NavLink to="/ListEmployees">List Employees</NavLink></li>
              <li><NavLink to="/CreateEmployee">Create Employee</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/ListEmployees" component={ListEmployees}/>
              <Route exact path="/CreateEmployee" component={CreateEmployee}/>
              <Route exact path="/EditEmployee/:id" component={EditEmployee}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;