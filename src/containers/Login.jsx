import React, { Component } from 'react';
import { FormWrapper, TextInput, validations } from '../components';
import { reduxForm, Field } from 'redux-form';
import { login, resetPassword } from '../services';

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

class Login extends Component {
  state = { loginMessage: null };
  submitHandler = values => {
    login(values.email, values.password).catch(error => {
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
    const { handleSubmit } = this.props;
    return (
      <form
        key={'loginForm'}
        onSubmit={handleSubmit(this.submitHandler)}
        noValidate
      >
        {this.state.loginMessage && (
          <div className="alert alert-danger">
            {this.state.loginMessage}{' '}
            <a href="" onClick={this.resetPassword} className="alert-link">
              Forgot Password?
            </a>
          </div>
        )}
        <Field
          name="email"
          type="email"
          component={TextInput}
          label="Email"
          validate={[validations.required, validations.email]}
        />
        <Field
          name="password"
          type="password"
          component={TextInput}
          label="Password"
          validate={[validations.required]}
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

Login = reduxForm({
  form: 'loginForm'
})(FormWrapper(Login, 'Login'));

export default Login;
