import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLinks } from '../../components';

import {
  ReduxExamples,
  ReactCastsExamples,
  EggheadExamples
} from './components';

export default class Examples extends Component {
  exampleLinks = [
    {
      route: 'reactcasts',
      description: 'ReactCasts',
      component: ReactCastsExamples
    },
    {
      route: 'reduxexamples',
      description: 'Redux',
      component: ReduxExamples
    },
    {
      route: 'eggheadexamples',
      description: 'Egghead examples',
      component: EggheadExamples
    }
  ];

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <NavLinks {...this.props} links={this.exampleLinks} />
        </div>
        <div className="col-md-9">
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
