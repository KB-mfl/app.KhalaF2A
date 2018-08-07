module.exports = {
  port: 4000, // local port for webpack-server
  api: { // api proxy
    host: 'http://192.168.1.197:8080/', // api host
    prefix: 'api'
  }
}
