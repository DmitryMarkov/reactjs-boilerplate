const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const appInfo = require('./package.json');

module.exports = (env) => {
  const MIDDLEWARE = env.MIDDLEWARE !== 0;
  return {
    entry: [
      'babel-polyfill',
      MIDDLEWARE
        ? 'webpack-hot-middleware/client?reload=true'
        : 'react-hot-loader/patch',
      './src/app.jsx'
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './src/assets/images/favicon.png',
        emitStats: false,
        persistentCache: true,
        inject: true,
        background: '#fff',
        title: appInfo.name,
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
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
        inject: 'body'
      }),
      new webpack.DefinePlugin({
        APP_NAME: JSON.stringify(appInfo.name),
        APP_VERSION: JSON.stringify(appInfo.version),
        MIDDLEWARE
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    /*
    * Only for WebpackHotMiddleware
    */
    output: {
      filename: '[name].js',
      path: __dirname,
      publicPath: '/'
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
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
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
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
};
