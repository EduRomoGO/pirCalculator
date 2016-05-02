'use strict';

var express = require('express'),
		inspector = require('./classInspector'),
		app = express(),
		bodyParser = require('body-parser'),
		getResults = require('./resultsCalculator'),
		port = 9292;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/front/js'));
app.use('/css', express.static(__dirname + '/front/css'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
	res.render('index',
	  { title : 'Home' }
	);
})

app.post('/getResults', function(req, res) {
	// console.log('req.body');
	// console.log(req.body);
	var results = getResults(req.body);
	var resultsString = JSON.stringify(results, null, 4);
	res.send({'resultsString': resultsString});
});

app.get('/voice', function(req, res) {
	res.render('voice',
	  { title : 'Home' }
	);
})

app.listen(process.env.PORT || port, function() {
	console.log('server listening on port: ' + port);
});
