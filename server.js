const express = require('express');

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const morgan = require('morgan');
const config = require('./webpack.config.dev.js')({
  MIDDLEWARE: true,
  ANALYZE: process.env.npm_config_env_ANALYZE === '1'
});

const compiler = webpack(config);

const { DEBUG = process.argv[3], PORT = process.argv[2] || 3000 } = process.env;

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
 ____             _____
|    \\ ___ _ _   |   __|___ ___ _ _ ___ ___
|  |  | -_| | |  |__   | -_|  _| | | -_|  _|
|____/|___|\\_/   |_____|___|_|  \\_/|___|_|
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
/**
 * Server is running on port ${PORT}
 * Open a URL http://localhost:${PORT} in browser
 */\n`)));
