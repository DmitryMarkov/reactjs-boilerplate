import path from 'path'
import webpack from 'webpack'
import BundleAnalyzer from 'webpack-bundle-analyzer'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import resolve from './webpack.config.resolve'
import appInfo from './package.json'

const { BundleAnalyzerPlugin } = BundleAnalyzer

module.exports = env => {
  const ANALYZE = env.ANALYZE === 1
  const SOURCE_MAP = env.SOURCE_MAP === 1
  return {
    entry: ['@babel/polyfill', './src/app.js'],
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
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
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
        chunkFilename: 'assets/css/[name].[hash].min.css'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: ANALYZE ? 'server' : 'disabled'
      })
    ],
    resolve,
    output: {
      filename: '[name].[hash].min.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
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
                minimize: true
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
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
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
              loader: 'url-loader',
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
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[hash].[ext]',
                outputPath: 'assets/fonts',
                publicPath: '../../assets/fonts'
              }
            }
          ]
        }
      ]
    }
  }
}
