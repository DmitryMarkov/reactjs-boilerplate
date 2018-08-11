import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import morgan from 'morgan'
import Config from './webpack.config.dev.babel'

const app = express()
const config = Config({
  MIDDLEWARE: true,
  ANALYZE: process.env.npm_config_env_ANALYZE === '1'
})

const compiler = webpack(config)
const { DEBUG = process.argv[3], PORT = process.argv[2] || 3000 } = process.env

if (DEBUG === '1') app.use(morgan('combined'))

app.use((req, res, next) => {
  if (!/(\.(?!html)\w+$|__webpack.*)/.test(req.url)) req.url = '/'
  next()
})

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  })
)

app.use(webpackHotMiddleware(compiler))

/* eslint-disable */
app.listen(PORT, () =>
  console.log(`
 ____             _____
|    \\ ___ _ _   |   __|___ ___ _ _ ___ ___
|  |  | -_| | |  |__   | -_|  _| | | -_|  _|
|____/|___|\\_/   |_____|___|_|  \\_/|___|_|
${DEBUG === '1' ? '\nDEBUG MODE' : ''}
/**
 * Server is running on port ${PORT}
 * Open a URL http://localhost:${PORT} in browser
 */\n`)
)
/* eslint-enable */
