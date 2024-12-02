import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap";

const HeaderNotLogin = ({ onClick }) => {
  return (
    <header style={{ width: '100%' }}>
      <Navbar className="navbar navbar-expand-md ml-auto navbar-light" style={{ backgroundColor: "#022601", height: '40px', padding: '10px' }}>
        <div className="ml-auto" id="navbarSupportedContent">
          <Nav>
            <ul className="navbar-nav">
              <NavItem>
                <NavLink href="/signin">
                  <div className="btn-group mr-2" role="group" area-label="First group">
                    <button className="btn" type="button" style={{ color: 'white' }}>My Page</button>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><button className="btn" style={{ color: 'white' }} type="button" onClick={onClick}>Logout</button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><button className="btn" style={{ color: 'white' }} type="button">FUPRE Bursary Awards</button></NavLink>
              </NavItem>
            </ul>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
}

export default HeaderNotLogin;
