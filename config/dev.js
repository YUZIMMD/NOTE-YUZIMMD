const webpack = require('webpack');
const base = require('./base.js')
const merge = require('webpack-merge')
const icont = require('./context.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(base,{
  devtool: 'source-map',
  output:{
    filename: '[name].js',
    chunkFilename:'[name].managenode.js'
  },
	plugins:[
    new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
      'process.env':  merge(icont,{
        context: '"local"',
      }),
    }),
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    })
	]
})
