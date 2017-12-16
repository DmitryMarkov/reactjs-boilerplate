import React from 'react';
import {
  HashRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import App from './App/App';
import HelloWorld from './HelloWorld/HelloWorld';

const Routes = () => (
  <Router history={browserHistory}>
    <div className="routes">
      <Route exact path="/" component={App} />
      <Route path="/hello-world" component={HelloWorld} />
    </div>
  </Router>
);

export default Routes;
