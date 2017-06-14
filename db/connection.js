'use strict';

var mysql = require('mysql');

var config = require('./config');

var connection = mysql.createConnection(config);

module.exports = connection;

