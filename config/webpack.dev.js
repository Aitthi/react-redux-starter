const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
var helpers = require('./helpers')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root(''),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  }
})