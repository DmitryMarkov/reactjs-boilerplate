import webpack from 'webpack'
import BundleAnalyzer from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import appInfo from './package.json'

const { BundleAnalyzerPlugin } = BundleAnalyzer

module.exports = env => {
  const MIDDLEWARE = env.MIDDLEWARE !== 0
  return {
    entry: [
      'babel-polyfill',
      MIDDLEWARE ? 'webpack-hot-middleware/client?reload=true' : 'react-hot-loader/patch',
      './src/app.js'
    ],
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      historyApiFallback: true,
      hot: true
    },
    plugins: [
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
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: env.ANALYZE ? 'server' : 'disabled'
      })
    ],
    resolve: {
      extensions: ['.js']
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
          test: /\.js$/,
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
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1,
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
}
