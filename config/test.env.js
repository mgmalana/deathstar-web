var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SERVER_URL: '"http://35.197.13.136/"'
})
