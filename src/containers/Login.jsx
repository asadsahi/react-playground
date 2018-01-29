import React, { Component } from 'react';
import { FormWrapper, TextInput, validations } from '../components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends Component {
  state = { loginMessage: null };
  submitHandler = values => {
    this.props.login(values.email, values.password);
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
          <div className="alert alert-danger">{this.state.loginMessage} </div>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login(username, email) {
    dispatch(loginAction(username, email));
  }
});

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

Login = reduxForm({
  form: 'loginForm'
})(FormWrapper(Login, 'Login'));

export default Login;
