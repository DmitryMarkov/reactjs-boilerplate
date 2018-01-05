import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home/Home';
import HelloWorld from './HelloWorld/HelloWorld';

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <div className="routes">
        <Route exact path="/" component={Home} />
        <Route path="/hello-world" component={HelloWorld} />
      </div>
    </Router>
  </Provider>
);

export default Routes;
