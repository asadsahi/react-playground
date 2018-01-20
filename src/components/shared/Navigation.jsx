import React, { Component } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap';

import { logout } from '../../services';

export class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand tag={RouterNavLink} to="/">
            React playground
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RouterNavLink} to="/" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/examples"
                  activeClassName="active"
                >
                  Examples
                </NavLink>
              </NavItem>
              {this.props.authed
                ? [
                    <NavItem key="profile">
                      <NavLink
                        tag={RouterNavLink}
                        to="/profile"
                        activeClassName="active"
                      >
                        Profile
                      </NavLink>
                    </NavItem>,
                    <NavItem key="logout">
                      <NavLink
                        href="#"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </NavLink>
                    </NavItem>
                  ]
                : [
                    <NavItem key="login">
                      <NavLink
                        tag={RouterNavLink}
                        to="/login"
                        activeClassName="active"
                      >
                        Login
                      </NavLink>
                    </NavItem>,
                    <NavItem key="register">
                      <NavLink
                        tag={RouterNavLink}
                        to="/register"
                        activeClassName="active"
                      >
                        Register
                      </NavLink>
                    </NavItem>
                  ]}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
