import { ActionTypes as types } from '../constants';

export function loadAppData() {
  return dispatch => {
    dispatch({ type: types.BEGIN_API_CALL });
    dispatch({ type: types.LOAD_APP_DATA_START });

    fetch('api/applicationdata')
      .then(res => res.json())
      .then(appData => {
        dispatch({ type: types.LOAD_APP_DATA_SUCCESS, data: appData });
      })
      .catch(error => {
        dispatch({ type: types.API_CALL_ERROR, data: error });
      });
  };
}
