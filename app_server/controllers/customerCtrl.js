/**
 * Created by sathiyas on 5/3/16.
 */

    /*Controller to add,edit,update and delete the  data from mongodb*/

var customer = require('../models/customerSchema');


module.exports.insert = function (req, res) {


    var addCustomer = new customer.customer(req.body);
    addCustomer.created_at = new Date();

    addCustomer.save(function (err, result) {
        if (err) {
            res.status(500).json({resp: 'Customer already exists'});
        }
        else {
            res.status(200).json({resp: result});
        }
    });

};


//Api implementation to update a customer

module.exports.update = function (req, res) {

    //Finding the customer to be updated by its id and updating with the data passed
    var query = {_id: req.params.id};
    var Customer = req.body;
    Customer.updated_at = new Date();
    customer.customer.update(query, Customer, {upsert: true}, function (err, doc) {
        if (err) {
            console.log(err);
            res.status(500).json({resp: 'Failed to update'});
        }
        else {

            res.json({data: doc});
        }
    });

};

// Api implementation to delete a customer

module.exports.delete = function (req, res) {

    console.log("Deleting Customers");
    customer.customer.find({'_id': req.params.id}).remove(function (err) {
        if (err) {
            console.log(err);
            res.send(500).json({resp: 'Error while deleting'});
        }
        else {
            customer.customer.find(function (err, customers) {
                if (err)
                    res.staus(500).json({resp: 'No customers found'});
                res.json({data: customers});
            })
        }
    })

};

exports.getAllCustomers = function (req, res) {

    //Find all the customers
    customer.customer.find(function (err, customers) {

        if (err)
            res.staus(500).json({resp: 'No customers found'});

        res.json({data: customers});
    });

};
