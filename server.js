var express = require('express')
var app = express();
app.use(express.static(__dirname+'/static'));
app.get('/', function(req, res) { res.sendfile('static/index.html') });
app.listen(8000);
