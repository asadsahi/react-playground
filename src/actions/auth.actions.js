import { ActionTypes as types, history, AUTH_TOKEN } from '../constants';
import { dataService, decode } from '../services';

export const loginAction = (usernameOrEmail, password) => {
  return dispatch => {
    dispatch({ type: types.LOGIN.LOGIN_START });

    dataService
      .post('/api/auth/signin', {
        usernameOrEmail: usernameOrEmail,
        password: password
      })
      .then(res => {
        localStorage.setItem('auth_token', res.data);
        dispatch({ type: types.LOGIN.LOGIN_SUCCESS, data: decode(res.data) });
        history.push('/');
      })
      .catch(error => {
        dispatch({
          type: types.LOGIN.LOGIN_ERROR,
          data: error.response.data[0]
        });
      });
  };
};

export const registerAction = values => {
  return dispatch => {
    dispatch({ type: types.REGISTER.REGISTER_START });

    dataService
      .post('/api/auth/signup', values)
      .then(res => {
        dispatch({ type: types.REGISTER.REGISTER_SUCCESS });
        history.push('/login');
      })
      .catch(error => {
        dispatch({
          type: types.REGISTER.REGISTER_ERROR,
          data: error.response.data[0]
        });
      });
  };
};

export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({ type: types.LOGOUT });
  };
};
