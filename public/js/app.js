/**
 * Created by sathiyas on 29/10/17.
 */

angular.module('customersApp', ['ngRoute'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);

    }])