'use strict';

const express = require('express');

const app = express();
const path = require('path');
const morgan = require('morgan');

const { DEBUG, PORT = 3000 } = process.env;

if (DEBUG === '1') app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => (
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') })));

app.listen(PORT, () => (
  console.log(`
/*************************************/
/********* PRODUCTION SERVER *********/
/*************************************/
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
Server is running on port ${PORT}
Files are served from '${__dirname}/dist'\n`)));
