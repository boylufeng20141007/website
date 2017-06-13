/**
 * 首页router
 * @type {[type]}
 */
'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var renderData = {
		title: '中山深惠智能科技设备有限公司'
	};
  res.render('index',renderData );
});

module.exports = router;
