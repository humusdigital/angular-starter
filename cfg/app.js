var myApp = angular.module('starterApp', ['ngMaterial','ngRoute']);

myApp.config(['$routeProvider','$mdThemingProvider',function($routeProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('darky')
    .primaryPalette('grey',{
    'default': '900'}).dark();

    $mdThemingProvider.theme('myBtnTheme')
    .primaryPalette('cyan');

    $mdThemingProvider.setDefaultTheme('darky');

    $mdThemingProvider.alwaysWatchTheme(true);

    $routeProvider
        .when('/welcome', {
            templateUrl: 'welcome/welcome.html'
        }).when('/section', {
            templateUrl: 'section/section.html',
            controller:'sectionCtrl'
        }).when('/documents/:secid', {
            templateUrl: 'documents/documents.html',
            controller:'documentsCtrl'
        }).otherwise({
          redirectTo: '/welcome'
        });
}]);
