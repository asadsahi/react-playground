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
      .catch(error => dispatch({ type: types.LOGIN.LOGIN_ERROR, data: error }));
  };
};

export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({ type: types.LOGOUT });
  };
};
