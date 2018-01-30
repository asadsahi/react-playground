import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

// App Reducers
import appData from './app.reducer';
import auth from './login.reducer';
import register from './register.reducer';
// Examples Reducers
import { exampleReducers } from '../containers/examples/reducers';
// This allows to add dynamically reducers from lazily loaded modules
// https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application

const rootReducer = asyncReducers => {
  return combineReducers({
    form: reduxFormReducer, // mounted under "form"
    router: routerReducer,
    appData,
    auth,
    register,
    ...exampleReducers,
    ...asyncReducers
  });
};

export { rootReducer };
