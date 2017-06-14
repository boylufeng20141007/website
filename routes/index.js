/**
 * 首页router
 * @type {[type]}
 */
'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
        title: '中山深惠智能科技设备有限公司',
        head: {
            link: 'index'
        }
	};
  res.render('index', data);
});

module.exports = router;
