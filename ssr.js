'use strict';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HelloWorld from './src/components/HelloWorld/HelloWorld';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const content = renderToString(<HelloWorld />);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ReactJS Sandbox</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `;
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// const app = express();
// const fs = require('fs');
// const path = require('path');
// const morgan = require('morgan');

// const DIST_DIR = path.join(__dirname, '/dist');

// const { DEBUG, PORT = 3000 } = process.env;

// if (DEBUG === '1') app.use(morgan('combined'));

// const checkDistDirectory = () => {
//   try {
//     fs.accessSync(`${DIST_DIR}/index.html`);
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

// if (checkDistDirectory()) {
//   app.use(express.static(DIST_DIR));

//   app.get('*', (req, res) => (
//     res.sendFile('index.html', { root: DIST_DIR })));

//   app.listen(PORT, () => (
//     console.log(`
// /*************************************/
// /********* PRODUCTION SERVER *********/
// /*************************************/
// ${DEBUG === '1' ? '\nDEBUG MODE' : ''}
// Server is running on port ${PORT}
// Files are served from '${__dirname}/dist'\n`)));
// } else {
//   console.log('Error: Build project first!!!');
// }
