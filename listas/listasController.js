myApp.controller('ListasCtrl', ['$scope', '$log', '$http', function($scope, $log, $http) {

    var page = 1;
    var totalPages;

    $scope.rewind = false;
    $scope.forward = true;

    $scope.paginate = function(direction){

      if (direction > 0) {

        if (page == totalPages){
          $scope.forward = false;
        }else{
          $scope.rewind = true;
          page++;
          if (page == totalPages) {
            $scope.forward = false;
          }
          $scope.getList(page);

        }

      }else if (direction<0){

        if (page == 1){

        }else{
          $scope.forward = true;
          page--;
            if (page == 1){
                $scope.rewind = false;
            }
          $scope.getList(page);

        }

      }


    };

    $scope.getList = function(pageNum){

        $log.log(pageNum);

        // Simple GET request example:
        $http({
          method: 'GET',
          url: 'https://reqres.in/api/users?page='+pageNum
        }).then(function successCallback(response) {

            $log.log(response.data.data);

            totalPages = response.data.total_pages;
            $scope.modelListas = response.data.data;

          }, function errorCallback(response) {

            $log.log(response);

          });

    };

    $scope.getList(page);


}]);
