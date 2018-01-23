import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import { rootReducer } from './reducers';
const isDev = process.env.NODE_ENV === 'development';
let logger = createLogger({
  collapsed: true
});

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (isDev) {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  middleware.push(logger);
  middleware.push(reduxImmutableStateInvariant());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

let store = createStore(rootReducer(), initialState, composedEnhancers);

export { store };
