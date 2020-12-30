'use strict';

angular.
    module('loginModule').
    component('loginComponent', {
        templateUrl: 'components/Login/login.template.html',
        controller: ['$scope',
            function ($scope) {
                $scope.toDisplay = 'Happy you came back';
                this.loginFunction = function loginFunction () {
                    console.log("user has login");
                };
            }
        ],
    });