'use strict';

angular.module('secondaryButtonModule')
    .component('secondaryButton', {
        templateUrl: 'components/SecondaryButton/secondarybutton.template.html',
        controller: function secondaryButtonController() {},
        bindings: {
            buttonText: '@',
            doSomething: '&'
        }
    });