import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { PrivateRoute, PublicRoute, Navigation, Loading } from '../components';
import { Home, Examples } from './';
import { loadAppData } from '../actions';

const Login = Loadable({
  loader: () => import('./Login'),
  loading: () => <Loading />
});

const Register = Loadable({
  loader: () => import('./Register'),
  loading: () => <Loading />
});

const Profile = Loadable({
  loader: () => import('./Profile'),
  loading: () => <Loading />
});

class App extends React.Component {
  componentDidMount() {
    this.props.loadAppData();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const timeout = { enter: 300, exit: 200 };
    const currentKey = window.location.pathname.split('/')[1] || '/';
    return !this.props.appData ? (
      <Loading />
    ) : (
      <div>
        <Navigation auth={this.props.auth} />
        <TransitionGroup component="main" className="page-main">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="fade"
            appear
          >
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/examples" component={Examples} />
                <PublicRoute
                  authenticated={this.props.auth.authenticated}
                  path="/login"
                  component={Login}
                />
                <PublicRoute
                  authenticated={this.props.auth.authenticated}
                  path="/register"
                  component={Register}
                />
                <PrivateRoute
                  authenticated={this.props.auth.authenticated}
                  path="/profile"
                  component={Profile}
                />
                <Route render={() => <h3>404</h3>} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth);
  return {
    appData: state.appData,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  loadAppData() {
    dispatch(loadAppData());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
