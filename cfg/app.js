var myApp = angular.module('starterApp', ['ngMaterial','ui.router','starterApp.services']);

myApp.config(['$stateProvider','$urlRouterProvider','$mdThemingProvider',function($stateProvider,$urlRouterProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('darky')
    .primaryPalette('grey',{
    'default': '900'}).dark();

    $mdThemingProvider.theme('myBtnTheme')
    .primaryPalette('cyan');

    $mdThemingProvider.setDefaultTheme('darky');

    $mdThemingProvider.alwaysWatchTheme(true);

    $stateProvider
    .state('auth', {
        url: '/auth',
        templateUrl: 'auth/auth.html',
        data: {
          'selectedTab' : 0
        },
        controller: 'authCtrl'
    }).state('welcome', {
            url: '/welcome',
            templateUrl: 'welcome/welcome.html',
            data: {
              'selectedTab' : 0
            },
            controller: 'welcomeCtrl'
        }).state('section', {
            url: '/section',
            templateUrl: 'section/section.html',
            controller:'sectionCtrl',
            data: {
              'selectedTab' : 1
            }
        }).state('documents', {
            url: '/documents/:secid',
            templateUrl: 'documents/documents.html',
            controller: 'documentsCtrl',
            data: {
              'selectedTab' : 1
            }
        }).state('document', {
          url: '/document/:secid',
          templateUrl: 'document/document.html',
          controller: 'documentCtrl'
        }).state('novedades', {
            url: '/novedades',
            templateUrl: 'novedades/novedades.html',
            controller:'novedadesCtrl',
            data: {
              'selectedTab' : 2
            }
            }).state('buscador', {
                url: '/buscador/:key',
                templateUrl: 'buscador/buscador.html',
                controller:'buscadorCtrl',
                data: {
                  'selectedTab' : 1
                }
            });
        $urlRouterProvider.otherwise('auth');
}]);
