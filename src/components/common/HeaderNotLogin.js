import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap"

const HeaderNotLogin = () =>{
    return(
      <header style={{ width:'100%' }}>
        <Navbar className="navbar navbar-expand-md ml-auto navbar-light" style={{backgroundColor: "#022601", height: '40px', padding:'10px'}}>
        <div className="ml-auto" id="navbarSupportedContent">
          <Nav >
          <ul className="navbar-nav ml-auto">
            <NavItem>
            <NavLink href="/signin">
              <div className="btn-group mr-2" role="group" area-label="First group">
              <button className="btn" style={{color: 'white'}} type="button">로그인</button>
              </div>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/signup"><button className="btn" type="button" style={{color: 'white'}}>회원가입</button></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://www.ewha.ac.kr"><button className="btn" type="button" style={{color: 'white'}}>울학교~</button></NavLink>
            </NavItem>
            </ul>
          </Nav>
          </div>
        </Navbar>
      </header>
    );
}

export default HeaderNotLogin;