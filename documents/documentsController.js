myApp.controller('documentsCtrl', ['$scope', '$log','$rootScope','$routeParams', function($scope, $log, $rootScope,$routeParams) {

    $log.log('is Working Documents !');

    $scope.documentsModel = [{
        "1":[{
            "id":1,
            "img":"https://dummyimage.com/600x400/6b1c6b/1f2bcf.gif&text=Video",
            "title":"Title 1-1",
            "summary":"Parrafo 1-1"
        },{
            "id":2,
            "img":"https://dummyimage.com/400x400/694669/cf3c1f.gif&text=Imagen",
            "title":"Title 1-2",
            "summary":"Parrafo 1-2"
        },{
            "id":3,
            "img":"https://dummyimage.com/400x400/466969/cf3c1f.gif&text=Imagen+3",
            "title":"Title 1-3",
            "summary":"Parrafo 1-3"
        }],
        "2":[{
            "id":1,
            "img":"https://dummyimage.com/400x400/466969/48cf1f.gif&text=Imagen+1-2",
            "title":"Title 2-1",
            "summary":"Parrafo 2-1"
        },{
            "id":2,
            "img":"https://dummyimage.com/400x400/466969/cf4b1f.gif&text=Imagen+2-2",
            "title":"Title 2-2",
            "summary":"Parrafo 2-2"
        }],
        "3":[{
            "id":1,
            "img":"https://dummyimage.com/400x400/516946/6e6466.gif&text=Imagen+3-1",
            "title":"Title 3-1",
            "summary":"Parrafo 3-1"
        }],
    }]

    $scope.documents = $scope.documentsModel[0][$routeParams.secid];

    $log.log($scope.documents);



}]);
