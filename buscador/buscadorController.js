myApp.controller('buscadorCtrl', ['$scope', '$log','$rootScope','$stateParams', function($scope, $log, $rootScope,$stateParams) {

    $log.log('is Working buscador!');

    $scope.buscadorModel = [
        {
            "id":1,
            "img":"https://dummyimage.com/600x400/6b1c6b/1f2bcf.gif&text=Video",
            "title":"Title 1-1",
            "summary":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            "idDoc":1
        },
        {
            "id":2,
            "img":"https://dummyimage.com/400x400/694669/cf3c1f.gif&text=Imagen",
            "title":"Title 1-2",
            "summary":"Cómo vas a saber lo que es la pasión, Si nunca estuviste en la Boutique.Cómo vas a saber lo que es lo que es la nostalgia, Si nunca caminaste por Barrio Jardín. ",
            "idDoc":2
        },
        {
            "id":3,
            "img":"https://dummyimage.com/400x400/466969/cf3c1f.gif&text=Imagen+3",
            "title":"Title 1-3",
            "summary":"Cómo vas a saber lo que es el arte, Si nunca viste jugar a O rey pele en Tu cancha (La boutique).",
            "idDoc":3
        },
        {
            "id":1,
            "img":"https://dummyimage.com/400x400/466969/48cf1f.gif&text=Imagen+1-2",
            "title":"Title 2-1",
            "summary":"Cómo vas a saber lo que es el dolor, Si nunca te fuiste al descenso. ",
            "idDoc":4
        },
        {
            "id":2,
            "img":"https://dummyimage.com/400x400/466969/cf4b1f.gif&text=Imagen+2-2",
            "title":"Title 2-2",
            "summary":"Cómo vas a saber lo que es definir,Si nunca tuviste una delantera de selección como Reinaldi, Valencia, Bocanelli, Bravo, Oviedo.",
            "idDoc":5
        },
        {
            "id":1,
            "img":"https://dummyimage.com/400x400/516946/6e6466.gif&text=Imagen+3-1",
            "title":"Title 3-1",
            "summary":"Cómo vas a saber lo que es viajar, Si jamás hiciste una gira a Turquía, Grecia, El Zaire, Guatemala, El Salvador, España y Brasil",
            "idDoc":6
        }]

    $scope.buscador = $stateParams.key;

    $log.log($scope.buscador);



}]);
