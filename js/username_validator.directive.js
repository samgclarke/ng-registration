/*jslint white: true*/

angular.module('myApp')

.directive('usernameValidator', ['$http', '$q', function ($http, $q) {
  return {
    require : 'ngModel',
    link : function($scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.username = function (username) {

        // root url should be inject from globals/constants
        var api_url = "http://127.0.0.1:5000";

      	if (!username) {
          return $q.when(true);
        }
        return $http.get(api_url + '/username-exists/' + username).then(function (response) {
          console.log('RESPONSE', response);
          if (response.data) {
            return $q.reject();
          }
          return false;
        });

      };
    }
  }
}]);