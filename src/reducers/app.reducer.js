import { ActionTypes as types } from '../constants';

import initialState from './initialState';

export default function appData(state = initialState.appData, action) {
  if (action.type === types.LOAD_APP_DATA_SUCCESS) {
    return action.data;
  }
  return state;
}
