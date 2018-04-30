const express = require('express');

const app = express();
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const DIST_DIR = path.join(__dirname, '/dist');

const { DEBUG, PORT = process.argv[2] || 3000 } = process.env;

if (DEBUG === '1') app.use(morgan('combined'));

const checkDistDirectory = () => {
  try {
    fs.accessSync(`${DIST_DIR}/index.html`);
    return true;
  } catch (e) {
    return false;
  }
};

if (checkDistDirectory()) {
  app.use(express.static(DIST_DIR));

  app.get('*', (req, res) => (
    res.sendFile('index.html', { root: DIST_DIR })));

  app.listen(PORT, () => (
    console.log(`
 _____           _         _   _            _____
|  _  |___ ___ _| |_ _ ___| |_|_|___ ___   |   __|___ ___ _ _ ___ ___
|   __|  _| . | . | | |  _|  _| | . |   |  |__   | -_|  _| | | -_|  _|
|__|  |_| |___|___|___|___|_| |_|___|_|_|  |_____|___|_|  \\_/|___|_|
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
/**
 * Server is running on port ${PORT}
 * Files are served from '${__dirname}/dist'
 */\n`)));
} else {
  console.log('Error: Build project first!!!');
}
