/*Data model fow how collection to be saved into mongodb*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = require('../db_config/db');

var customerDb = mongoose.connect(db.url);

var CustomerSchema = new Schema({

    id: { type: Number },
    referer_header: { type: String },
    referer_source: { type: String },
    created_at: { type: Date }
});


var customer = customerDb.model('Customer', CustomerSchema);

module.exports = {

    customer: customer
};