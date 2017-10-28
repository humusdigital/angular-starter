myApp.controller('documentsCtrl', ['$scope', '$log','$rootScope','$routeParams', function($scope, $log, $rootScope,$routeParams) {

    $log.log('is Working Documents !');

    $scope.documentsModel = [{
        "1":[{
            "id":1,
            "img":"",
            "title":"",
            "summary":""
        },{
            "id":2,
            "img":"",
            "title":"",
            "summary":""
        },{
            "id":3,
            "img":"",
            "title":"",
            "summary":""
        }],
        "2":[{
            "id":1,
            "img":"",
            "title":"",
            "summary":""
        },{
            "id":2,
            "img":"",
            "title":"",
            "summary":""
        }],
        "3":[{
            "id":1,
            "img":"",
            "title":"",
            "summary":""
        }]
    }]

    $scope.documents = $scope.documentsModel[0][$routeParams.secid];

    $log.log($scope.documents);
    


}]);
