const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'webpack/index.js'),
    // planes: path.resolve(__dirname, 'webpack/planes.js'),
  },
  output: {
    path: path.resolve(__dirname, '../../dist/js/webpack'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      
      // {
      //   test: /\.(jpg|png|jpeg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //      limit: 100000
      //     }
      //   }
      // },
      
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // use: ['style-loader', 'css-loader']
          // use: 'css-loader'
          use: [
            {
              loader: 'css-loader',
              options:{
                modules: false,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
      
  },
  plugins: [
    new ExtractTextPlugin('../../css/webpack/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common'
    })
  ]
}