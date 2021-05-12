import React, { Component } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.context);
    return (
      <>
        <NavbarComponent />
      </>
    );
  }
}


export default Header;
