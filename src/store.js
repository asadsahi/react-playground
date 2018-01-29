import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { rootReducer, initialState } from './reducers';
import { history } from './constants';

const isDev = process.env.NODE_ENV === 'development';
let logger = createLogger({
  collapsed: true
});

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

function storeSetup() {
  const store = createStore(rootReducer(), initialState, composedEnhancers);
  store.asyncReducers = {};
  return store;
}
const store = storeSetup();

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(rootReducer(store.asyncReducers));
}

export default store;
