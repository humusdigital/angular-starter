myApp.controller('headerController', ['$scope', '$log','$rootScope','$state','$http','api', function($scope, $log, $rootScope, $state, $http, api) {

    $log.log('Header is Working !');

    $scope.$on('$stateChangeSuccess', function(event, toState){
      $scope.selectedIndex = toState.data.selectedTab;
      $log.log(toState.data.selectedTab);
    })

    $scope.showSearch = false;
    $scope.showDialogo = false;
    $scope.showSearchOn = function(){
      $scope.showSearch = true;
    }
    $scope.showSearchOff = function(){
      $scope.showSearch = false;
    }

    $scope.busqueda=[];
    $scope.buscar = function(){
      $log.log($scope.busqueda.key)
      $state.go("buscador",{key: $scope.busqueda.key})
    }
    $scope.openMenu = function($mdMenu, ev){
      originatorEv = ev;
      $mdMenu.open(ev);
    }
    $scope.testHttp = function(){
      var msg='';
      $http({
              method: 'GET',
              url: 'http://10.246.6.190/tmp/',
              params: {novedad:1},
              timeout: 10000
            }).then(function successCallback(response) {
              msg = res.data;

              $log.log(msg);
              $scope.openDialog(msg);
              $rootScope.novedad = msg;
            }, function errorCallback(response) {
              $scope.openDialog('Ocurrio un error');
          },
    )}
}]);
