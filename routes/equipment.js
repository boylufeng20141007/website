/**
 * 公司简介router
 * @type {[type]}
 */
'use strict';

var express = require('express');
var router = express.Router();


/* GET company page. */
router.get('/equipment', function (req, res /* , next */) {
  var data = {
    title: '厂房设备',
    head: {
      link: 'equipment'
    }
  };
  res.render('page/equipment.html', data);
});

module.exports = router;