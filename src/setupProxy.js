const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
<<<<<<< HEAD
    target: 'http://10.9.24.153:8080/',
=======
    target: 'http://10.9.24.153:8080',
>>>>>>> 389ddb31286eb4b569b23c804f547a28bff0e3ab
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