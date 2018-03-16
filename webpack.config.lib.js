const path = require('path');
const webpack = require('webpack');

const appInfo = require('./package.json');

module.exports = (env) => {
  const MINIFY = env.MINIFY === 1;
  return {
    entry: [
      `./src/components/${appInfo.appName}/${appInfo.appName}.jsx`
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        APP_NAME: JSON.stringify(appInfo.name),
        APP_VERSION: JSON.stringify(appInfo.version)
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      filename: `${appInfo.appName}${MINIFY ? '.min.js' : '.js'}`,
      library: appInfo.appName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      path: path.resolve(__dirname, 'lib')
    },
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React'
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM'
      },
      'react-router-dom': {
        commonjs: 'react-router-dom',
        commonjs2: 'react-router-dom',
        amd: 'react-router-dom',
        root: 'ReactRouterDOM'
      },
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'PropTypes'
      },
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: MINIFY
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                minimize: MINIFY
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                minimize: MINIFY
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        },
        {
          test: /\.ico$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        }
      ]
    }
  };
};
