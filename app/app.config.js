'use strict';

angular.
    module('myDay').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/home', {
                        template: '<home-component></home-component>'
                    }).
                    when('/login', {
                        template: '<login-component></login-component>'
                    }).
                    when('/not-found', {
                        template: '<not-found></not-found>'
                    }).
                    otherwise('/not-found');
            }
        ]);
