var express = require ('express');
var app = express();
var bodyParser = require('./models');
var db = require('./models');
var controllers = require('./controllers');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});

});

app.get('/api', controllers.api.index);



app.listen(3000);
