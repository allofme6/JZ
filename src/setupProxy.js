const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:9000',
    changeOrigin: true,
  }))
  app.use('/ajax', proxy({
    target: 'http://m.maoyan.com',
    changeOrigin: true,
  }))
  app.use('/addblog',proxy({
    target: 'http://10.9.28.152:8080',
    changeOrigin: true
  }))
}