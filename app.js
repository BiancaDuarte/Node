var express = required('express');
var router = express.Router();

var index  = required('./routes/index');

router.use(index);

module.exports = router;