// very simple node.js static web server

var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect()
  .use(serveStatic(__dirname))
  .use(function(req, res){
    res.end('hello world\n');
  })
 .listen(8080);