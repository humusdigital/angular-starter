myApp.controller('documentCtrl', ['$scope', '$log','$rootScope','$routeParams', function($scope, $log, $rootScope,$routeParams) {

    $log.log('is Working Document!');

    $scope.documentModel = [{
        "1":[{
            "id":1,
            "img":"https://dummyimage.com/600x400/6b1c6b/1f2bcf.gif&text=Video",
            "title":"TITULO 1",
            "parrafo":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "img2": "https://dummyimage.com/400x400/694669/cf3c1f.gif&text=Imagen",
            "parrafo2":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "descargable": [{
                             "icon":"backup",
                             "descargable":"images/imagenes/fantasia.pdf"
                           },{
                             "icon":"backup",
                             "descargable":"images/imagenes/galeria.pdf"
                           }],
            "links": [{
                        "icon2": "link",
                        "link":"https://www.google.com.ar"
                      },{
                        "icon2": "link",
                        "link":"https://www.facebook.com"
                    }],
        }],
        "2":[{
            "id":2,
            "img":"https://dummyimage.com/400x400/466969/cf3c1f.gif&text=Imagen+3",
            "title":"TITULO 2",
            "parrafo":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "img2": "https://dummyimage.com/400x400/466969/48cf1f.gif&text=Imagen+1-2",
            "parrafo2":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "icon":"backup",
            "icon2": "link",
            "descargable": "",
            "links": ""
        }],
        "3":[{
            "id":3,
            "img":"https://dummyimage.com/400x400/466969/cf4b1f.gif&text=Imagen+2-2",
            "title":"TITULO 3",
            "parrafo":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "img2": "https://dummyimage.com/400x400/516946/6e6466.gif&text=Imagen+3-1",
            "parrafo2":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "icon":"backup",
            "icon2": "link",
            "descargable": "",
            "links": ""
        }],
    }]

    $scope.document = $scope.documentModel[0][$routeParams.secid];

    $log.log($scope.document);



}]);
