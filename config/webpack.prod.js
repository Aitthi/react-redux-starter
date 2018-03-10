var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.common.js')
var helpers = require('./helpers')

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'bundle.min.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': 'production'
      }
    })
  ]
})