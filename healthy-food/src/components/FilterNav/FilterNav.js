import React from "react";
import { Nav, NavItem, NavLink,Jumbotron } from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";

const FilterNav = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink  to="/categories/all" tag={RRNavLink} >All</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/categories/vegan"  tag={RRNavLink}>Vegan</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/categories/vegetarian"  tag={RRNavLink}>Vegetarian</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/categories/meat"  tag={RRNavLink}>Meat</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default FilterNav;
