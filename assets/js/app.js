angular.module('ng-app', ['ui.bootstrap']);

// Login controller
angular.module('ng-app').controller('LoginCtrl', ['$scope','$http', function ($scope, $http){
  $scope.alerts = [];
  $scope.login = function(user){
    $scope.dataLoading = true;
    $http.post('/login', { 
      email: user.email,
      password: user.password
    }).
    success(function(data, status, headers, config){
      // async cb when response is available
      $scope.dataLoading = false;
      window.location.pathname = '/'
    }).
    error(function(data, status, headers, config){
      // async cb when error occurs OR
      // server returns response with error status
      $scope.dataLoading = false;
      $scope.alerts.push({msg: data});
    });

}
}]);

