import React, { Component } from 'react';
import { FormWrapper } from '../components';

import { login, resetPassword } from '../services';

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

class Login extends Component {
  state = { loginMessage: null };
  handleSubmit = e => {
    e.preventDefault();
    login(this.email.value, this.pw.value).catch(error => {
      this.setState(setErrorMsg('Invalid username/password.'));
    });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-block container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                ref={email => (this.email = email)}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={pw => (this.pw = pw)}
              />
            </div>
            {this.state.loginMessage && (
              <div className="alert alert-danger">
                {this.state.loginMessage}{' '}
                <a href="" onClick={this.resetPassword} className="alert-link">
                  Forgot Password?
                </a>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login = FormWrapper(Login);
export { Login };
