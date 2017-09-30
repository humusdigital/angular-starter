myApp.controller('ListasCtrl', ['$scope', '$log', '$http', function($scope, $log, $http) {

    //$scope.modelListas = modelListas;

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1'
    }).then(function successCallback(response) {

        $log.log(response);
        $scope.modelListas = response.data.data;

      }, function errorCallback(response) {

        $log.log(response);

      });

}]);
