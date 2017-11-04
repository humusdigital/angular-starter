myApp.controller('sectionCtrl', ['$scope', '$log','$rootScope', function($scope, $log, $rootScope) {

    $log.log('is Working Section!')
    $scope.items=[
      {
        id: '1 ',
        icon:'mood',
        title:'Mi titulo'
      },
      {
        id: '2',
        icon:'mood',
        title:"Mi titulo 2"
      },
      {
        id: '3',
        icon:'mood',
        title:"Mi titulo 3",

   },

    ];


}]);
