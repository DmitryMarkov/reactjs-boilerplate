const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');

const appInfo = require('./package.json');

module.exports = {
  target: 'node',
  entry: {
    main: [
      'babel-polyfill',
      // 'react-hot-loader/patch',
      './ssr.js'
    ]

    // vendor: [
    //   'lodash',
    //   'react',
    //   'react-dom',
    //   'normalize.css'
    // ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    // new FaviconsWebpackPlugin({
    //   logo: './src/assets/images/favicon.png',
    //   prefix: 'assets/images/icons-[hash]/',
    //   emitStats: false,
    //   statsFilename: 'iconstats-[hash].json',
    //   persistentCache: true,
    //   inject: true,
    //   background: '#fff',
    //   title: appInfo.name,
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: false,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: './index.html',
    //   // favicon: './src/favicon.ico', // Bundle original .ico file
    //   inject: 'body'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',

    //    * Export .js files into different location
    //    * filename: 'js/[name].[hash].min.js'

    //   filename: '[name].[hash].min.js',
    //   minChunks: Infinity
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      APP_NAME: JSON.stringify(appInfo.name),
      APP_VERSION: JSON.stringify(appInfo.version),
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
    filename: '[name].min.js',
    path: BUILD_DIR
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
             * More browser support use file-loader
             * Bundle fonts inline into .js file use url-loader
             */
            loader: 'file-loader',
            options: {
              // name: '[name].[ext]',
              outputPath: './assets/fonts/',
              publicPath: '../../'
            }
          }
        ]
      }
    ]
  }
};
