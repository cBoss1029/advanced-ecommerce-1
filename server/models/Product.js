let mongoose = require('mongoose');
let schema = require('../schemas/Products');

module.exports = mongoose.model('Product', schema);