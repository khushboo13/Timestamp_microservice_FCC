var express = require('express');
var validator = require('./date_validator');
var app = express();

var PORT = 3000;
app.get('/:timestamp', function(req, res){

	var param = req.params.timestamp;
	
	var dates = validator(param);

	res.send(dates);

});

app.listen(PORT);