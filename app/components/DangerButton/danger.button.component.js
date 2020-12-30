'use strict';

angular.module('dangerButtonModule')
    .component('dangerButton', {
        templateUrl: 'components/DangerButton/dangerbutton.template.html',
        controller: function dangerButtonController() {},
        bindings: {
            buttonText: '@',
            onClick: '&'
        }
    });