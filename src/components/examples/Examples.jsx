import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLinks } from '../shared';
import { ReduxExamples } from './components';

export class Examples extends Component {
  exampleLinks = [
    {
      route: 'reduxexamples',
      description: 'Redux examples',
      component: ReduxExamples
    }
  ];

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <NavLinks {...this.props} links={this.exampleLinks} />
        </div>
        <div className="col-md-10">
          {this.exampleLinks.map(link => (
            <Route
              key={link.route}
              path={`${this.props.match.url}/${link.route}`}
              component={link.component}
            />
          ))}
          <Route
            exact
            path={this.props.match.url}
            render={() => (
              <div>
                <h3>Please select an example.</h3>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
