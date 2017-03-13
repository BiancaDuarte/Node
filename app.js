var express = require('express');
var router = express.Router();

var index  = require('./routes/index');
router.use(index);

var list = require('./routes/list-users');
router.use(list);

var produtos = require('./routes/produtos');
router.use(produtos);

var add = require('./routes/add-users')
router.use(add);

module.exports = router;