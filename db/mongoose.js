const config = require('./../config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

module.export = {mongoose};
