// File upload service

angular.module('uploadFile')
    .service('uploadService',['Upload','$q',function(Upload,$q){

console.log("service")

        this.uploadFile = function(files) {

            var def = $q.defer();

            if (files && !files.$error) {
                Upload.upload({
                    url: '/uploadCustFile',
                    file: files
                }).success(function (data, status, headers, config) {
                    def.resolve(data);
                }).error(function (data, status, headers, config) {
                    def.reject(data);
                });

            }

            //returning the promise resolved
            return def.promise;

        };

    }]);
