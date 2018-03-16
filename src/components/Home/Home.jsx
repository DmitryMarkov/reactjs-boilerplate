import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="home-info">
      {`${APP_NAME} v${APP_VERSION} hot-middleware=${MIDDLEWARE}`}
    </div>
    <Link to="/hello-world">Go to HelloWorld</Link>
  </div>
);

export default Home;
