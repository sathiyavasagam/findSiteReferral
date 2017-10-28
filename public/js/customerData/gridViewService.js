/**
 * Created by sathiyas on 22/3/16.
 */
//All the customers related operation (CRUD api call to node)

angular
    .module('customerMgmt')
    .service('customer', ['$http', function ($http) {

        var customer = {};


        customer.getCustomers = function () {

            return $http.get('/getAll');
        }

        customer.getCustomer = function (id) {

            return $http.get('/getCustomer/' + id);
        }

        customer.addCustomer = function (customer) {
            return $http.post('/addCustomer', customer);
        }

        customer.removeCustomer = function (id) {
            return $http.delete('/deleteCustomer/' + id);
        }

        customer.updateCustomer = function (id, customer) {
            return $http.put('/updateCustomer/' + id, customer);
        }

        return customer;

    }]);