import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

// App Reducers
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

// Examples reducers
// Counter example reducers
import counter from '../containers/examples/components/redux/counter/counter';
// Currency convertor example reducers
import amount from '../containers/examples/components/redux/currency-convertor/reducers/amount';
import error from '../containers/examples/components/redux/currency-convertor/reducers/error';
// Course example reducers
import courses from '../containers/examples/components/redux/course-management/reducers/courseReducer';
import authors from '../containers/examples/components/redux/course-management/reducers/authorReducer';
import ajaxCallsInProgress from '../containers/examples/components/redux/course-management/reducers/ajaxStatusReducer';
// Todos
import {
  todos,
  visibilityFilter
} from '../containers/examples/components/redux/Todo';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  //---------------
  form: reduxFormReducer, // mounted under "form"
  router: routerReducer,
  counter,
  amount,
  error,
  courses,
  authors,
  ajaxCallsInProgress,
  todos,
  visibilityFilter
});

export { rootReducer };
