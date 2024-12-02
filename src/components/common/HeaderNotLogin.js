import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap";

const HeaderNotLogin = () => {
    return (
      <header style={{ width: '100%' }}>
        <Navbar className="navbar navbar-expand-md ml-auto navbar-light" style={{ backgroundColor: "#022601", height: '40px', padding: '10px' }}>
          <div className="ml-auto" id="navbarSupportedContent">
            <Nav>
              <ul className="navbar-nav ml-auto">
                <NavItem>
                  <NavLink href="/signin">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                      <button className="btn" style={{ color: 'white' }} type="button">Login</button>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">
                    <button className="btn" type="button" style={{ color: 'white' }}>Sign Up</button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://fupre.edu.ng/">
                    <button className="btn" type="button" style={{ color: 'white' }}>Our School</button>
                  </NavLink>
                </NavItem>
              </ul>
            </Nav>
          </div>
        </Navbar>
      </header>
    );
}

export default HeaderNotLogin;
