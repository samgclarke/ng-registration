/*jslint white: true*/

angular.module('myApp')

.directive('registrationForm', function ($rootScope) {
  return {
    restrict:     'A',
    controller:   'registrationCtrl',
    controllerAs: 'reg',
    templateUrl:  'partials/registration_form.tmpl.html',
    link: function (scope, element, attrs) {
      // console.log('scope', scope);
    }
  };
});