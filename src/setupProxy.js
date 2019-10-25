const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://47.95.121.255:8080',
    changeOrigin: true,
    pathRewrite:{
      '^/api': ''
    }
  }))
  app.use('/ajax', proxy({
    target: 'http://m.maoyan.com',
    changeOrigin: true,
  }))
  app.use('/pay',proxy({
    target: 'https://luckych.club',
    changeOrigin: true
  }))
}