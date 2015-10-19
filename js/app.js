angular.module('myApp', [
	'ui.router',
	'ngAria',
	'ngMaterial',
])

.config(function ($urlRouterProvider, $stateProvider) {
  var PARTIALS_PATH = 'partials/';
  
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state("username-exists", {
      url: "/username-exists/:username",
      resolve: {
        data: function() {
          var data = {
            result: false,
          }
          if (username = 'sam') {
            data.result = true;
          }
          return data;
        }
      }
    })
    .state('index', {
      url: '/',
    });
});