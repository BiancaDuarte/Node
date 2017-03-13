var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');


router.post('/add-users', function (req, res){

	file.read(function(data){
		var params = req.query;


		naorepete=file.check(params, data);
			console.log(naorepete);
			if(naorepete==0){

				var dataJson = JSON.stringify(data);
				data.push(params);
				file.write(dataJson, res);
			}

			else{
				res.end('Já existe!');
				naorepete=0;
			}

	});
})


module.exports = router;