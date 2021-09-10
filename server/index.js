var express = require('express');
var cors = require('cors')
var app = express();
var server = require('http').createServer(app);
app.use(express.json())

app.use(cors())

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res, next) {
  res.status(200)
});

app.post('/', function(req, res, next) {
  console.log(req.body)
  res.status(200)
  res.end()
})

server.listen(4200);
