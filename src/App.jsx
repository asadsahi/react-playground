import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Profile,
  Register,
  Dashboard,
  Examples,
  Login
} from './containers';

import { Navigation, Loading, PrivateRoute, PublicRoute } from './components';
import { firebaseAuth } from './services';

export default class App extends React.Component {
  state = {
    authed: false,
    loading: true,
    user: null
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading === true ? (
      <Loading />
    ) : (
      <div>
        <Navigation authed={this.state.authed} />

        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/examples" component={Examples} />
            <PublicRoute
              authed={this.state.authed}
              path="/login"
              component={Login}
            />
            <PublicRoute
              authed={this.state.authed}
              path="/register"
              component={Register}
            />
            <PrivateRoute
              authed={this.state.authed}
              path="/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              authed={this.state.authed}
              path="/profile"
              component={Profile}
            />
            <Route render={() => <h3>404</h3>} />
          </Switch>
        </div>
      </div>
    );
  }
}
