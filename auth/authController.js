myApp.controller('authCtrl', ['$scope', '$log','$rootScope','$state','$http','api', function($scope, $log, $rootScope, $state, $http, api){

  $log.log('Auth is Working !')

  api.getTocken().then(function successCallback(response){
    console.log (response);
    $rootScope.accesToken = response.data.token;
    $state.go ("welcome");
  }),function errorCallback(response){
    $log.log(response);
  };
}]);
