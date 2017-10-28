myApp.controller('sectionCtrl', ['$scope', '$log','$rootScope', function($scope, $log, $rootScope) {

    $log.log('is Working Section !')
    $scope.items=[
      {
        id: '1',
        icon: 'favorite',
        title: 'Mi titulo 1'
      },
      {
        id: '2',
        icon: 'headset',
        title: 'Mi titulo 2'
      },
      {
        id: '3',
        icon: 'favorite',
        title: 'Mi titulo 3'
      },
    ];
}]);
