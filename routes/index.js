/**
 * 首页router
 * @type {[type]}
 */
'use strict';

var express = require('express');
var router = express.Router();

var swipeDao = require('../dao/swipe-dao');

/* GET home page. */
router.get(['/', '/index'], function (req, res/* , next */) {
  var debug = req.query.debug;
  var data = {
    title: '中山深惠智能科技设备有限公司',
    head: {
      link: 'index'
    },
    debug: debug
  };
  console.log(debug);
  res.render('page/index.html', data);
});

router.get('/add', function (req, res, next) {
  swipeDao.addItem(req, res, next);
});

module.exports = router;
