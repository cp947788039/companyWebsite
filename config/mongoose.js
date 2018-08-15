/**
 * Created by 1 on 2016/5/16.
 */
var mongoose = require('mongoose');
var config = require('./db_url.js');

module.exports = function() {
    var db = mongoose.connect(config.mongodb)
        .then(() => { console.log('MongoDB Connected') })
        .catch((err) => { console.log(err); });
    require('../model/user.js');
    require('../model/news.js');
    require('../model/recruit.js');
    require('../model/quit.js');
    require('../model/feedback.js');
    return db;
}