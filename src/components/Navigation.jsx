import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services';
import { Cultures } from './Cultures';

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
      <nav className="navbar navbar-expand-sm navbar-light top-nav">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/icons/icon-72x72.png"
            alt="icon"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp;React playground
        </NavLink>
        <button
          onClick={this.toggle}
          className={'navbar-toggler ' + (this.state.isOpen ? '' : 'collapsed')}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            'collapse navbar-collapse ' + (this.state.isOpen ? 'show' : '')
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/examples"
                activeClassName="active"
              >
                Examples
              </NavLink>
            </li>

            <Cultures />
          </ul>
          <ul className="navbar-nav ml-auto">
            {this.props.authed
              ? [
                  <li className="nav-item" key="profile">
                    <NavLink
                      className="nav-link"
                      to="/profile"
                      activeClassName="active"
                    >
                      {this.props.user.email}
                    </NavLink>
                  </li>,
                  <li className="nav-item" key="logout">
                    <a
                      className="nav-link"
                      href=""
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                ]
              : [
                  <li className="nav-item" key="login">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      activeClassName="active"
                    >
                      Login
                    </NavLink>
                  </li>,
                  <li className="nav-item" key="register">
                    <NavLink
                      className="nav-link"
                      to="/register"
                      activeClassName="active"
                    >
                      Register
                    </NavLink>
                  </li>
                ]}
          </ul>
        </div>
      </nav>
    );
  }
}
