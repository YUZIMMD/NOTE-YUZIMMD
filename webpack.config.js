let webpackConfig

console.log('环境',process.env.NODE_ENV)
if (process.env.NODE_ENV === 'local') {
    webpackConfig = require('./config/dev.js')
} else  {
    webpackConfig = require('./config/pord.js')
}

module.exports = webpackConfig