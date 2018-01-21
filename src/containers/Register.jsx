import React, { Component } from 'react';

import { FormWrapper } from '../components';

import { auth } from '../services';

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

class Register extends Component {
  state = { registerError: null };
  handleSubmit = e => {
    e.preventDefault();
    auth(this.email.value, this.pw.value).catch(e =>
      this.setState(setErrorMsg(e))
    );
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Register</div>
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
            {this.state.registerError && (
              <div className="alert alert-danger">
                {this.state.registerError}
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Register = FormWrapper(Register);

export { Register };
