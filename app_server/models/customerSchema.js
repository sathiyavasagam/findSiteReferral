/*Data model fow how collection to be saved into mongodb*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = require('../db_config/db');

var customerDb = mongoose.connect(db.url);

var CustomerSchema = new Schema({

    id: {type: Number},
    email: {type: String, unique: true},
    first_name: {type: String},
    last_name: {type: String},
    ip: {type: String},
    latitude: {type: Number},
    longitude: {type: Number},
    created_at: {type: Date}
});


var customer = customerDb.model('Customer', CustomerSchema);

module.exports = {

    customer: customer
};
