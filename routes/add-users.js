var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');


router.post('/add-users', function (req, res){

	file.read(function(data){
		var params = req.query;
		var id=0;
		id= data.length + 1;
		var naorepete=file.check(params, data)

			Object.defineProperty(params, "id", {
 				get: function (){ 
 					return id;
 				 },

  				set: function (value){ 
  					id = value;
  				},

  				enumerable: true
			});		

			if(naorepete==0){
				data.push(params);
				var dataJson = JSON.stringify(data);
				file.write(dataJson,res);
			}

			else{
				res.end('Já existe!');
				naorepete=0;
			}

	});
});


module.exports = router;