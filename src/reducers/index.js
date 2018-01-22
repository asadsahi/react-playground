import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

// App Reducers
// Examples reducers
import * as exampleReducers from '../containers/examples/reducers';

const rootReducer = combineReducers({
  //---------------
  form: reduxFormReducer, // mounted under "form"
  router: routerReducer,
  ...exampleReducers
});

export { rootReducer };
