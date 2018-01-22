import React, { Component } from 'react';

import { FormWrapper, TextInput, validations } from '../components';
import { reduxForm, Field } from 'redux-form';
import { register } from '../services';

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

class Register extends Component {
  state = { registerError: null };
  handleSubmit = values => {
    register(values.email, values.password).catch(e =>
      this.setState(setErrorMsg(e))
    );
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)} noValidate>
        {this.state.registerError && (
          <div className="alert alert-danger">{this.state.registerError}</div>
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
          Register
        </button>
      </form>
    );
  }
}

Register = reduxForm({
  form: 'registerForm'
})(FormWrapper(Register, 'Register'));

export { Register };
