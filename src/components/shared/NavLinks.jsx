import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NavLinks extends Component {
  render() {
    return (
      <ul>
        {this.props.links.map(link => (
          <li key={link.route}>
            <NavLink
              to={`${this.props.match.url}/${link.route}`}
              activeClassName="active"
            >
              {link.description}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
