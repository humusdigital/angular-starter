myApp.controller('novedadesCtrl', ['$scope', '$log','$rootScope','$http', function($scope, $log, $rootScope, $http) {

    $log.log('Novedades is Working !')

    $scope.testHttp = function(){
      var msg='';
      $http({
              method: 'GET',
              url: 'http://10.246.6.190/tmp/',
              params: {novedad:1},
              //timeout: 10000
            }).then(function successCallback(response) {
              $log.log(response)
              msg = response.data;
              //$log.log(msg);
              //$scope.openDialog(msg);
              $scope.novedad = msg;
            }, function errorCallback(response) {
              //$scope.openDialog('Ocurrio un error');
          },
    )}
    $scope.testHttp();

}]);
