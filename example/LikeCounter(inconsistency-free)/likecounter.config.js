angular.module('likecounter', ['ngRoute']);
angular.module('likecounter').config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl:'/views/likecounter.view.html',
            controller:'likecounterController',
            controllerAs:'vm'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    });


