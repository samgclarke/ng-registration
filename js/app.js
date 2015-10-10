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
      url: "/username-exists/:scriptId",
    })
    .state('index', {
      url: '/',
    });
});