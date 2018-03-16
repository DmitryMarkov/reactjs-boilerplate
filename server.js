const express = require('express');

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const morgan = require('morgan');
const config = require('./webpack.config.dev.js')({ MIDDLEWARE: true });

const compiler = webpack(config);

const { DEBUG, PORT = 3000 } = process.env;

if (DEBUG === '1') app.use(morgan('combined'));

app.use((req, res, next) => {
  if (!/(\.(?!html)\w+$|__webpack.*)/.test(req.url)) req.url = '/';
  next();
});

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, () => (
  console.log(`
/*************************************/
/***** HOT MIDDLEWARE DEV SERVER *****/
/*************************************/
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
Server is running on port ${PORT}
Open a URL http://localhost:${PORT} in browser`)));
