var express = required('express');
var router = express.Router();

var index  = required('./router/index');

router.use(index);

module.exports = router;