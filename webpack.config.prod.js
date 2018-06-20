const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const appInfo = require('./package.json');

module.exports = (env) => {
  const ANALYZE = env.ANALYZE === 1;
  const SOURCE_MAP = env.SOURCE_MAP === 1;
  return {
    entry: {
      main: [
        'babel-polyfill',
        './src/app.jsx'
      ],
      vendor: [
        'lodash',
        'react',
        'react-dom',
        'normalize.css'
      ]
    },
    mode: 'production',
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          parallel: true,
          sourceMap: SOURCE_MAP,
          uglifyOptions: {
            cache: true,
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: SOURCE_MAP && 'source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
        inject: 'body'
      }),
      new webpack.DefinePlugin({
        APP_NAME: JSON.stringify(appInfo.name),
        APP_VERSION: JSON.stringify(appInfo.version)
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[hash].min.css',
        chunkFilename: 'assets/css/[name].[hash].css'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: ANALYZE ? 'server' : 'disabled'
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
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-react-remove-prop-types']
            }
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
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: SOURCE_MAP
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                minimize: true,
                sourceMap: SOURCE_MAP
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1,
                sourceMap: SOURCE_MAP
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: SOURCE_MAP
              }
            }
          ]
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
                outputPath: 'assets/images',
                publicPath: '../../assets/images'
              }
            }
          ]
        },
        {
          test: /\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              /*
               * For more browser support use file-loader
               * To bundle fonts inline into .js file use url-loader
               */
              loader: 'file-loader',
              options: {
                // name: '[name].[ext]',
                outputPath: 'assets/fonts',
                publicPath: '../../assets/fonts'
              }
            }
          ]
        }
      ]
    }
  };
};
