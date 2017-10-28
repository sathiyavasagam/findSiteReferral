angular.module('customersApp')
    .controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location) {
        var referer = $location.search();

        $http.post('/saveReferer', referer).success(function(data) {
                console.log('Call success');
            })
            .error(function(err) {
                console.log('call err');
            })

    }]);