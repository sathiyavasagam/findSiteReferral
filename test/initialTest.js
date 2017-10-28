
describe("App", function() {

  beforeEach(module('customerMgmt'));

  var $httpBackend, $controller;
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("says Hello Test when controller loads", function() {
    var $scope = {};
    $httpBackend.expectGET('getAll/').respond(200);
    var controller = $controller('home', {
      $scope : $scope
    });
    $httpBackend.flush();
    //expect($scope.greeting.content).toEqual('Hello Test');
  });

})