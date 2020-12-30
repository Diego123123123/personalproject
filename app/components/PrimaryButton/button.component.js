'use strict';

angular.module('primaryButtonModule')
    .component('primaryButton', {
       templateUrl: 'components/PrimaryButton/button.template.html',
       controller: function primaryButtonController() {},
       bindings: {
           buttonText: '@',
           doSomething: '&'
       }
    });
