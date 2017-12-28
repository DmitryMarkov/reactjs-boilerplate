import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import Home from './Home/Home';
import HelloWorld from './HelloWorld/HelloWorld';

const Routes = () => (
  <Router history={browserHistory}>
    <div className="routes">
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
    </div>
  </Router>
);

export default Routes;
