import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="home-info">
      {`${APP_NAME} v${APP_VERSION} hot-middleware=${HOT_MIDDLEWARE}`}
    </div>
  </div>
);

export default Home;
