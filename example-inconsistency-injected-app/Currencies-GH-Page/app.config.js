'use strict';
angular.module('myApp', ['ngRoute', 'ngResource']);
angular.module('myApp').config(function ($routeProvider) {
    $routeProvider.when('/currency', {
        templateUrl: 'views/currency.view.html',
        controller: 'currencyController',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({redirectTo: '/currency'});
});