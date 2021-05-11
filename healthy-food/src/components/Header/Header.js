import React, { Component } from "react";
import { Link as RRNavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Nav, NavItem, NavLink,Jumbotron } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.context);
    return (
      <div>
        <h1>Healthy Food application</h1>

        {this.context.isAuthenticated ? (
          <div>
            <Nav>
              <NavItem>
                Welcome,{" "}
                <NavLink className="mr-5" to="/dashboard">
                  {this.context.username.substring(
                    0,
                    this.context.username.indexOf("@")
                  )}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/logout"  tag={RRNavLink}>Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/add-food"  tag={RRNavLink}>Add Food</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/"  tag={RRNavLink}>Public Food</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/categories/all"  tag={RRNavLink}>Food By Category</NavLink>
              </NavItem>
            </Nav>
          </div>
        ) : (
          <div>
            <Nav>
              <NavItem>
                <NavLink to="/register"  tag={RRNavLink}>Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login"  tag={RRNavLink}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/categories/all"  tag={RRNavLink}>Food By Category</NavLink>
              </NavItem>
            </Nav>
          </div>
        )}
      </div>
    );
  }
}

Header.contextType = UserContext;

export default Header;
