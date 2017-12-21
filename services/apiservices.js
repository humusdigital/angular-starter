angular.module('starterApp.services', [])

.service('api', ['$http', function($http){

    console.log ('Sevices ON');
    var apiUrl = 'http://www.goblackdiamond.com/wp-json/jwt-auth/v1/token/';
    var apiUrlPosts ='http://www.goblackdiamond.com/wp-json/wp/v2/';

    return {
       events: [],

       getTocken: function(){

         var datParams;

         datParams = {
           username: "apApi",
           password: "CQ(JXH9RdpqBhhB(0i%$0&MZ",

         }
         return $http({
           method: 'post',
           url: apiUrl,
           timeout: 10000,
           params: datParams,
         });

       },
       getContent: function(){

         comsole.log (token);

         var myQuery ='configuracion/42';
         return $http({
           method: 'GET',
           url: apiUrlPosts+myQuery,
           timeout: 10000,
           headers: {
             'Authorization':'Bearer'+token
           }
         });
}}
}]);
