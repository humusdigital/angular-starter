var myApp = angular.module('starterApp', ['ngMaterial','ngRoute']);

myApp.config(['$routeProvider',function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'home/home.html'
        }).when('/listas', {
            templateUrl: 'listas/listas.html',
            controller: 'ListasCtrl'
        }).otherwise({
          redirectTo: '/home'
        });

}]);
