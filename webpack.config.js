const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

const appName = require('./package.json').name;
const appVersion = require('./package.json').version;

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.jsx'
    ],
    vendor: [
      'lodash',
      'react',
      'react-dom',
      'normalize.css'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      prefix: 'assets/images/icons-[hash]/',
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: appName,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      // favicon: './src/favicon.ico', // Bundle original .ico file
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      /*
       * Export .js files into different location
       * filename: 'js/[name].[hash].min.js'
       */
      filename: '[name].[hash].min.js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      APP_NAME: JSON.stringify(appName),
      APP_VERSION: JSON.stringify(appVersion),
      HOT_MIDDLEWARE: false
    }),
    new ExtractTextPlugin('assets/css/[name].[hash].min.css'),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true,
        comments: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    /*
     * Export .js files into different location
     * filename: 'js/[name].[hash].min.js'
     */
    filename: '[name].[hash].min.js',
    path: DIST_DIR
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
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        /*
         * url-loader images converted to base64
         * file-loader images stored in images directory
         */
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images/'
            }
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
            /*
             * To bundle fonts into .js file use url-loader
             */
            loader: 'file-loader',
            options: {
              // name: '[name].[ext]',
              publicPath: DIST_DIR,
              outputPath: '/assets/fonts/'
            }
          }
        ]
      }
    ]
  }
};
