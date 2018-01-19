import {
  applyMiddleware,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": false}] */
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/';

const devTools = process.env.NODE_ENV === undefined
  ? composeWithDevTools(applyMiddleware(thunk))
  : '';

const store = createStore(
  reducers,
  devTools
);

export default store;
