import { ActionTypes as types, history, AUTH_TOKEN } from '../constants';
import { dataService } from '../services/data.service';

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
        history.push('/');
        dispatch({ type: types.LOGIN.LOGIN_SUCCESS, data: res.data });
      })
      .catch(error => dispatch({ type: types.LOGIN.LOGIN_ERROR, data: error }));
  };
};

export const logoutAction = dispatch => {
  localStorage.removeItem(AUTH_TOKEN);
  dispatch({ type: types.LOGOUT });
};
