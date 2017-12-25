import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="app-info">
      {`${APP_NAME} v${APP_VERSION} hot-middleware=${HOT_MIDDLEWARE}`}
    </div>
    <Link to="/hello-world">Go to HelloWorld</Link>
  </div>
);

export default App;
