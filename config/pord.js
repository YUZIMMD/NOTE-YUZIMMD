const webpack = require('webpack');
const base = require('./base.js')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const happyPack = require('happypack')
const os = require('os')
const icont = require('./context.js')
const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

const createServerConfig = function(compilation) {

    let cfgJson = { api: "" };
    return JSON.stringify(cfgJson);
}

const isContext = process.env.NODE_ENV === 'production' ?
    icont : merge(icont, { context: '"development"' })

const happyPackThread = happyPack.ThreadPool({ size: os.cpus().length });

module.exports = merge(base, {
    devtool: false,
    output: {
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'happypack/loader?id=parcel'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': isContext,
        }),
        new GenerateAssetPlugin({
            filename: 'static/ip-config.json',
            fn: (compilation, cb) => {
                cb(null, createServerConfig(compilation));
            },
            extraFiles: []
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            },
            sourceMap: true,
            parallel: true
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new happyPack({
            id: 'parcel',
            loaders: ['babel-loader'],
            threadPool: happyPackThread
        }),
        new CleanWebpackPlugin(['NOTE-YUZIMMD/*'], {
            root: path.join(__dirname, '../'),
            verbose: true
        })
    ]
})