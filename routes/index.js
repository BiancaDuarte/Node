var express = required('express');
var router = express.Router();

router.get('/', function (req, res){
	res.json({'msg':'seja bem vindo'});

});

module.exports = router;