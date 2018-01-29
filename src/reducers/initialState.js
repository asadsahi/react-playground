import { decode } from '../services';
import { AUTH_TOKEN } from '../constants';

let token = localStorage.getItem(AUTH_TOKEN);

let user = token ? decode(token).user : null;

let initialState = {
  appData: null,
  auth: { user, authenticated: !!user }
};

export { initialState };
