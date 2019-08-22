import React, { Component } from "react";
import Link from "react-router-dom/Link";

//Material-UI
import { AppBar, Toolbar, Button } from "@material-ui/core";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            LogIn
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
