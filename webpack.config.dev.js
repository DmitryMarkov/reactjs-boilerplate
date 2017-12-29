const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const appInfo = require('./package.json');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/app.jsx'
  ],
  devtool: 'inline-source-map',
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
      template: './src/index.html',
      filename: './index.html',
      // favicon: './src/favicon.ico', // Bundle original .ico file
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(appInfo.name),
      APP_VERSION: JSON.stringify(appInfo.version),
      HOT_MIDDLEWARE: false
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
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
        /*
         * url-loader images converted to base64
         * file-loader images stored in images directory
         */
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
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
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
