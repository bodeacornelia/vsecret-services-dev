import { createStore, applyMiddleware, compose } from 'redux';
import { default as thunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  let middleware = applyMiddleware(...middlewares);

  const devTools = (window as any).devToolsExtension();

  middleware = compose(middleware, devTools);

  const store = middleware(createStore)(rootReducer);

  return store;
}

