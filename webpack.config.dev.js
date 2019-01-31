const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000
  },
  devtool: 'source-map'
  // map o code no browser to source code par conseguir
  // fazer debugger corretamente
})
