const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://10.9.24.153:8080',
    changeOrigin: true,
    pathRewrite:{
      '^/api': ''
    }
  }))
  app.use('/ajax', proxy({
    target: 'http://m.maoyan.com',
    changeOrigin: true,
  }))
<<<<<<< HEAD
  app.use('/addblog',proxy({
    target: 'http://10.9.28.152:8080',
=======
  app.use('/pay',proxy({
    target: 'https://luckych.club',
>>>>>>> master
    changeOrigin: true
  }))
}