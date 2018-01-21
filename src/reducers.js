import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

// Counter example reducers
import counter from './components/examples/components/redux/counter/counter';
// Currency convertor example reducers
import amount from './components/examples/components/redux/currency-convertor/reducers/amount';
import error from './components/examples/components/redux/currency-convertor/reducers/error';
// Course example reducers
import courses from './components/examples/components/redux/course-management/reducers/courseReducer';
import authors from './components/examples/components/redux/course-management/reducers/authorReducer';
import ajaxCallsInProgress from './components/examples/components/redux/course-management/reducers/ajaxStatusReducer';
// Todos
import {
  todos,
  visibilityFilter
} from './components/examples/components/redux/Todo';

export default combineReducers({
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
