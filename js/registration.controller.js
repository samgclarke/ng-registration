/*jslint white: true*/

angular.module('myApp')

.controller('registrationCtrl', function ($scope) {
  "use strict";

  var self = this;

  self.appname = 'My App';

  self.user = {
    username: '',
    password: '',
    email: '',
  };

});