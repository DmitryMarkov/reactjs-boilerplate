import path from 'path'
import webpack from 'webpack'
import BundleAnalyzer from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import resolve from './webpack.config.resolve.babel'
import appInfo from './package.json'

const { BundleAnalyzerPlugin } = BundleAnalyzer

module.exports = env => {
  const ANALYZE = env.ANALYZE === 1
  const MINIFY = env.MINIFY === 1
  const SOURCE_MAP = env.SOURCE_MAP === 1
  return {
    entry: [`./src/components/${appInfo.appName}/${appInfo.appName}.js`],
    mode: 'production',
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          parallel: true,
          sourceMap: SOURCE_MAP,
          uglifyOptions: {
            cache: true,
            mangle: MINIFY,
            output: {
              comments: !MINIFY,
              beautify: !MINIFY
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    devtool: SOURCE_MAP && 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        APP_NAME: JSON.stringify(appInfo.name),
        APP_VERSION: JSON.stringify(appInfo.version)
      }),
      new MiniCssExtractPlugin({
        filename: `${appInfo.appName}.min.css`
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: ANALYZE ? 'server' : 'disabled'
      })
    ],
    resolve,
    output: {
      filename: `${appInfo.appName}${MINIFY ? '.min.js' : '.js'}`,
      library: appInfo.appName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      path: path.resolve(__dirname, 'lib')
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      },
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'PropTypes'
      },
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
      'react-hot-loader': {
        commonjs: 'react-hot-loader',
        commonjs2: 'react-hot-loader',
        amd: 'react-hot-loader',
        root: 'hot'
      }
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
            MiniCssExtractPlugin.loader,
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
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                minimize: MINIFY,
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
  }
}
