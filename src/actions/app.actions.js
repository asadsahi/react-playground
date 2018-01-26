import { beginApiCall } from '../CONSTANTS';

export function loadAppData() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return fetch('api/applicationdata')
      .then(res => res.json())
      .then(appData => {
        dispatch(loadAppDataSuccess(appData));
      })
      .catch(error => {
        throw error;
      });
  };
}
