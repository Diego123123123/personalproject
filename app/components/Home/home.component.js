'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('homeModule').
    component('homeComponent', {
        templateUrl: 'components/Home/home.html',
        controller: ['$scope',
            function ($scope) {
                $scope.toDisplay = 'Home Component';
                this.toDisplay = 'Welcome';
            }
        ]
    });