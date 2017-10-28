/**
 * Created by sathiyas on 22/3/16.
 */

// Angular Controller to add, delete, edit and search the customers

angular
    .module('customerMgmt')
    .controller('gridListController',['$scope','customer','$route', function($scope,customer,$route){
        $scope.customer = {};


        //Get all the customers and assign to myData

        customer.getCustomers()
            .success(function(data){
                $scope.myData = data.data;
            });
            
            $scope.add = function(){

                customer.addCustomer($scope.customer)
                    .success(function(data){

                        alert('User added successfully');
                        $route.reload();
                    })
                    .error(function(data){
                        alert(data.resp);
                        $route.reload();
                    });

            };
            //delete the selected user

            $scope.delete = function(id){
                customer.removeCustomer(id)
                    .success(function(data){
                      alert("Customer information deleted successfully");
                        $route.reload();

                    })
                    .error(function(){

                        alert("Deletion failed");
                        $route.reload();

                    });

            };

        //Cell template for  delete button on each row of the grid
        var ActionTemplate = '<a href="#" name="delete" ng-click="grid.appScope.delete(row.entity._id)" class="btn btn-small btn-link" ><i class="glyphicon glyphicon-trash" /></a>';

        //Grid definition with all the required options
        $scope.gridOptions = {
            data : 'myData',
            paginationPageSizes: [50, 100, 500],
            paginationPageSize: 50,
            enableFiltering: true,
            enableCellEditOnFocus: true,
            enableGridMenu: true,
            columnDefs: [

                { field: 'first_name', displayName: 'First Name', width: 110 ,enableCellEdit: true},
                { field: 'last_name', displayName: 'Last Name', width: 110 ,enableCellEdit: true},
                { field: 'ip', displayName: 'IP Address',width: 150,enableCellEdit: true },
                { field: 'email', displayName: 'Email',enableCellEdit: true },
                { field: 'latitude', displayName: 'Latitude', width: 100 ,enableCellEdit: true},
                { field: 'longitude', displayName: 'Longitude', width:100 ,enableCellEdit: true},
                {field:'action',displayName:'',width:100,cellTemplate: ActionTemplate}
            ]};

        $scope.saveRow = function( rowEntity ) {
            // create a fake promise - normally you'd use the promise returned by $http or $resource
            customer.updateCustomer(rowEntity._id,rowEntity)
                .success(function(data){
                  alert("Customer information updated successfully");
                  $route.reload();
                }).error(function(data){
                  alert("Can not update the Row")
                  $route.reload();
                })



            //$scope.gridApi.rowEdit.setSavePromise(rowEntity);


        };
        /*APi for Inline edit which calls the saveRow above function*/

        $scope.gridOptions.onRegisterApi = function(gridApi){
            //set gridApi on scope
            $scope.gridApi = gridApi;
            gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
        };


    }]);
