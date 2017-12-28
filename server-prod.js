'use strict';

const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '/dist')));

//!TODO: Add console log with colors
//!react router cannot get fix

app.get('/', (req, res) => (
  res.sendfile('index.html', { root: path.join(__dirname, '/dist') })));

app.listen(port, () => (
  console.log(`Production server is running on port ${port}
Files are server from '${__dirname}/dist'`)));
