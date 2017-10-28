/**
 * Created by sathiyas on 20/3/16.
 */

//Controller to Verify the file then  upload and save to mongodb

angular.module('uploadFile')
    .controller('uploadController', ['$scope', 'Upload', '$route', 'uploadService', '$http', function ($scope, Upload, $route, uploadService, $http) {
        $scope.files = [];
        $scope.show = false;

        var data1 = [];
        var map = [];

        $(document).ready(function () {
            $("#data").change(handleFileSelect);
            $("#map").change(handleFileSelect);
        });

//Validate the file using data and map file
        function handleFileSelect(evt) {
            var file = evt.target.files[0];
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                complete: function (results) {

                    if ((results.data.length) > 2) {
                        data1 = results.data
                    }
                    else {
                        map = results.data;
                    }

                }
            });

        }

        $scope.uploadData = function (file) {

            $scope.files.push(file);

        };

        /**
         * Check the parsing results,
         *
         *  If parsing result is correct,call the  upload service
         *
         *  else send the error message
         */
        $scope.readMapFile = function (file) {
            $scope.files.push(file);
            if ((Object.keys(data1[0])[0]) === map[0].created_at) {
                uploadService.uploadFile($scope.files)
                    .then(function (data) {
                            $scope.show = true;
                            $scope.alert = {type: "success", msg: data.resp};
                        },
                        function (data) {
                            $scope.show = true;
                            $scope.alert = {type: "danger", msg: data.resp};
                        });
            }
            else {
                $scope.show = true;
                $scope.alert = {type: "danger", msg: "Mapping failed.Please upload a correct files"};
            }

        };

        ////Close the alert
        $scope.closeAlert = function () {
            $scope.show = false;
            $scope.alert = {};
            window.location.href = '/upload'        };

    }]);
