import React, { Component } from "react";
import UserContext from "../../context/UserContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link as RRNavLink } from "react-router-dom";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <div className="mb-2">
        {this.context.isAuthenticated ? (
          <Navbar color="light" light expand="md">
            <NavbarToggler  />
            <Collapse navbar className="justify-content-around">
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink to="/dashboard" tag={RRNavLink}>
                    {this.context.username.substring(
                      0,
                      this.context.username.indexOf("@")
                    )}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/dashboard" tag={RRNavLink}>
                    My Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/logout" tag={RRNavLink}>
                    Logout
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/add-food" tag={RRNavLink}>
                    Add-Food
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" tag={RRNavLink}>
                    Public Food
                  </NavLink>{" "}
                </NavItem>
                <NavItem>
                  <NavLink to="/categories/all" tag={RRNavLink}>
                    Food By Category
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>Healthy Food application</NavbarText>
            </Collapse>
          </Navbar>
        ) : (
          <Navbar color="light" light expand="md">
            <NavbarToggler />
            <Collapse navbar  className="justify-content-around">
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink to="/register" tag={RRNavLink}>
                    Register
                  </NavLink>
                </NavItem>{" "}
                <NavItem>
                  <NavLink to="/login" tag={RRNavLink}>
                    Login
                  </NavLink>
                </NavItem>{" "}
                <NavItem>
                  <NavLink to="/" tag={RRNavLink}>
                    Public Food
                  </NavLink>{" "}
                </NavItem>
                <NavItem>
                  <NavLink to="/categories/all" tag={RRNavLink}>
                    Food By Category
                  </NavLink>
                </NavItem>{" "}
              </Nav>
              <NavbarText>Healthy Food application</NavbarText>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}

NavbarComponent.contextType = UserContext;

export default NavbarComponent;
