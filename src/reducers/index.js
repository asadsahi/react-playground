import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import exampleReducers from '../containers/examples/reducers';
// App Reducers

// This allows to add dynamically reducers from lazily loaded modules
// https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
const rootReducer = function createReducer(asyncReducers) {
  console.log(asyncReducers);
  return combineReducers({
    form: reduxFormReducer, // mounted under "form"
    router: routerReducer,
    ...asyncReducers,
    ...exampleReducers
  });
};

export { rootReducer };
