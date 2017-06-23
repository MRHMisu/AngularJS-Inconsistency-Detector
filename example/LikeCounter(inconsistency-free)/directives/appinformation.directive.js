(function() {
    'use strict';
    function constructor() {
        var directive = {
			templateUrl:'views/appInformation.view.html',
			restrict:'EA',
			replace:'true',
			scope: {},
			bindToController: true,
			controller:'appInformationController',
			controllerAs: 'vm'    
        };
        return directive;
    }
        constructor.$inject = [];
        angular.module('likecounter').directive('appInformation', constructor);
})();