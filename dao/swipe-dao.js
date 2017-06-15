/**
 * @description 操作首页轮播图
 */
'use strict';

var mysql = require('mysql');
var conf = require('../conf/db');
var swipeSql = require('./swipe-sql-map');
var pool = mysql.createPool(conf.mysql);

module.exports = {
    addItem: function (req, res, next) {
        // 是用连接池，提升性能
        pool.getConnection(function (err, connection) {
            // 获取前端参数
            var param = req.query || req.params;
            console.log(param);

            // 建立连接，向表中插入值
            connection.query(swipeSql.insert, [param.imgURL, param.link, param.isShow], function (err, result) {
                if (err) {
                    res.json({
                        code: '0',
                        msg: '操作失败'
                    });
                }else {
                    res.json({
                        code: 200,
                        msg: '操作成功'
                    });
                }

                connection.release();
            });
        });
    }
};
