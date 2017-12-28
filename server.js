'use strict';

const express = require('express');

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const morgan = require('morgan');
const config = require('./webpack.config.middle.js');

const compiler = webpack(config);

const PORT = 3000;

app.use(morgan('combined'));

/*
 * React Router v4 browserRouter historyApiFallback
 */
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
/*************************************/\n
Server is running on http://localhost:${PORT}`)));
