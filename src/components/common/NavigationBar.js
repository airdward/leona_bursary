import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { NavLink as NL } from 'react-router-dom';
import { IoIosSchool } from "react-icons/io";

import Main from "../Main";
import SignUp from "../SignUp";

import LoginForm from '../../containers/LoginForm';
import HeaderContainer from '../../containers/common/HeaderContainer';
import ScholarEditorContainer from "../../containers/ScholarEditorContainer";
import SelectionContainer from "../../containers/SelectionContainer";
import StudentListContainer from "../../containers/StudentListContainer";
import StudentDetailContainer from "../../containers/StudentDetailContainer";

const NavigationBar = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.auth }));

  const iconStyle = {
    margin: '10px',
    width: '30px',
    height: '30px',
  };

  const brandStyle = {
    textColor: 'black',
  };

  return (
    <div>
      <HeaderContainer />
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
          <Nav className="mr-auto" navbar>
            <NavbarBrand className="nav-link ml-5" style={brandStyle}>
              <NavLink href="/main"><IoIosSchool style={iconStyle} />FUPRE Bursary Awards</NavLink>
            </NavbarBrand>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <NavItem className="nav-link ml-5">
                  <NavLink exact to="/addScholar" tag={NL}>Register Scholarship</NavLink>
                </NavItem>
                <NavItem className="nav-link ml-5">
                  <NavLink exact to="/selections" tag={NL}>Select Scholars</NavLink>
                </NavItem>
                <NavItem className="nav-link ml-5">
                  <NavLink exact to="/main" tag={NL}>How to Use the Site</NavLink>
                </NavItem>
              </ul>
            </div>
          </Nav>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
        <Route path="/addScholar" component={ScholarEditorContainer} />
        <Route path="/selections/:id" component={StudentListContainer} />
        <Route path="/selections" component={SelectionContainer} />
        <Route path="/students/:id/:scholarId" component={StudentDetailContainer} />
      </Switch>
    </div>
  );
}

export default NavigationBar;
