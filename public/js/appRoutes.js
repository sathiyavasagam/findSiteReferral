/**
 * Created by sathiyas on 20/3/16.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    // upload file page route
        .when('/upload', {
            templateUrl: 'views/upload.html',
            controller: 'uploadController'
        })  //add a customer page route
        .when('/add', {
            templateUrl: 'views/add.html',
            controller:'gridListController'
        }) //list all customers page route
        .when('/grid', {
            templateUrl: 'views/grid.html',
            controller:'gridListController'
        })

    $locationProvider.html5Mode(true);

}]);
