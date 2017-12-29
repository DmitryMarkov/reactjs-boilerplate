'use strict';

const express = require('express');

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const morgan = require('morgan');
const config = require('./webpack.config.middle.js');

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
/************ DEV SERVER *************/
/*************************************/
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
Server is running on http://localhost:${PORT}`)));
