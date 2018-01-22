import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

// App Reducers

// Examples reducers
// Shopping cart reducer
import {
  cart,
  products
} from '../containers/examples/components/redux/shopping-cart/reducers';
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
  visibilityFilter,
  cart,
  products
});

export { rootReducer };
