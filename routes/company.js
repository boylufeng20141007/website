/**
 * 公司简介router
 * @type {[type]}
 */
'use strict';

var express = require('express');
var router = express.Router();


/* GET company page. */
router.get('/company', function (req, res, next) {
  var data = {
    title: '公司简介',
    head: {
      link: 'company'
    }
  };
  res.render('page/company', data);
});

module.exports = router;
