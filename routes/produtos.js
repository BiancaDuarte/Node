var express = require('express');
var router = express.Router();

router.get('/produtos', function (req, res){
	res.json({

		produto1:
		{
			"nome":"batata",
			"valor":34,
			"estoque":"98",
			"status":"A"

		},

		produto2:{
			"nome":"banana",
			"valor":34,
			"estoque":"45",
			"status":"I"

		}
		
	});
});


module.exports = router;