const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const iHost = require('./local.js')
const Proxys = require('./proxy.js')

const isContext = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
	entry: {
		main: resolve('app/config/app.js'),
		vendors: ['vue', 'vuex', 'vue-router'],
		plugins: ['element-ui'],
	},
	output:{
		path: resolve('label-system'),
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:ExtractTextPlugin.extract({
				fallback:'style-loader',
				use:['css-loader','postcss-loader']
			})
		},{
			test: /\.styl$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'style-loader!css-loader!stylus-loader'
			})
		},{			
			test:/\.(png|jpg|jeg|gif|svg)$/,
			use:['url-loader?limit=3000&name=image/[name].[ext]']
		},{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			options:{
				cacheDirectory:true
			}
		},{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=1000&name=fonts/[hash].[ext]'
		}]
	},
	resolve:{
		extensions: ['.vue','.js','.css','.json','.styl'],
		alias:{
			'@': resolve('app'),
			'assets': resolve('app/assets')
		}
	},
	devServer:{
    host: iHost,//IP地址
    port: 2556,
    hot: true,
		proxy: isContext ? {}:Proxys
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name: ['plugins',],
			chunks: ['plugins']
		}),
		new webpack.optimize.CommonsChunkPlugin({
				name: 'vendors',
				minChunks: function (module, count) {
					console.log(module.resource,`被引用次数${count}`);
					return (
						module.resource && /\.js$/.test(module.resource) &&
						module.resource.indexOf(path.join(__dirname, '../node_modules')) 
						=== 0
					)
				}
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './app/index.html',
			inject: true,
			minify: {
				removeComponents: true,
				collapseWhitespace: false,
				removeAttributeQuotes: true
			}
		})
	]
}