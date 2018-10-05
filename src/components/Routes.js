import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'Components/Home/Home'
import HelloWorld from 'Components/HelloWorld/HelloWorld'

const Routes = () => (
  <Router>
    <div className="routes">
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
    </div>
  </Router>
)

export default Routes
